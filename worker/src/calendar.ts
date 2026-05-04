import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import type { Bindings } from './index';

export const calendarRouter = new Hono<{ Bindings: Bindings }>();

/**
 * Importa la clave privada en formato PEM para usarla en Web Crypto API.
 */
async function importPrivateKey(pem: string) {
  // Manejar saltos de línea literales
  const formattedPem = pem.replace(/\\n/g, '\n');
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  
  if (!formattedPem.includes(pemHeader) || !formattedPem.includes(pemFooter)) {
    throw new Error('Formato PEM inválido en GOOGLE_PRIVATE_KEY');
  }

  const pemContents = formattedPem.substring(
    formattedPem.indexOf(pemHeader) + pemHeader.length,
    formattedPem.indexOf(pemFooter)
  );
  
  const binaryDerString = atob(pemContents.replace(/\s/g, ''));
  const binaryDer = new Uint8Array(binaryDerString.length);
  for (let i = 0; i < binaryDerString.length; i++) {
    binaryDer[i] = binaryDerString.charCodeAt(i);
  }
  
  return crypto.subtle.importKey(
    "pkcs8",
    binaryDer.buffer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );
}

/**
 * Genera el access token de Google.
 */
async function getGoogleAccessToken(clientEmail: string, privateKeyPem: string) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600; // 1 hour

  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp,
    iat
  };

  const privateKey = await importPrivateKey(privateKeyPem);
  
  // Usamos hono/jwt para firmar el token
  const token = await sign(payload, privateKey, 'RS256');

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: token
    })
  });

  const data = await response.json() as any;
  if (!response.ok) {
    throw new Error(`Google OAuth error: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

/**
 * Obtiene la disponibilidad del calendario (bloques libres).
 */
calendarRouter.get('/availability', async (c) => {
  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID } = c.env;
  
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_CALENDAR_ID) {
    return c.json({ error: "Configuración de Google Calendar incompleta" }, 500);
  }

  try {
    const accessToken = await getGoogleAccessToken(GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY);
    
    // Rango: mes actual (podría ser parametrizable)
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();
    
    const requestBody = {
      timeMin: startOfMonth,
      timeMax: endOfMonth,
      timeZone: 'America/Santiago',
      items: [{ id: GOOGLE_CALENDAR_ID }]
    };

    const res = await fetch(`https://www.googleapis.com/calendar/v3/freeBusy`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await res.json() as any;
    if (!res.ok) {
      console.error("Error de FreeBusy API:", data);
      return c.json({ error: "Error consultando disponibilidad", details: data }, 500);
    }

    const busySlots = data.calendars[GOOGLE_CALENDAR_ID]?.busy || [];
    
    return c.json({
      calendarId: GOOGLE_CALENDAR_ID,
      busy: busySlots
    });
  } catch (error: any) {
    console.error("Error en /availability:", error);
    return c.json({ error: "Error interno del servidor", details: error.message }, 500);
  }
});

/**
 * Crea un evento en el calendario. 
 * Ruta: POST /api/calendar/book
 */
calendarRouter.post('/book', async (c) => {
  const body = await c.req.json();
  const { pacienteNombre, dia, hora } = body;
  
  if (!pacienteNombre || !dia || !hora) {
    return c.json({ error: "Faltan datos requeridos (pacienteNombre, dia, hora)" }, 400);
  }

  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID } = c.env;
  
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_CALENDAR_ID) {
    console.error("Faltan variables de entorno para Google Calendar");
    return c.json({ error: "Configuración de Google Calendar incompleta" }, 500);
  }

  try {
    const accessToken = await getGoogleAccessToken(GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY);

    // Obtener mes y año actuales en Santiago
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Santiago', year: 'numeric', month: '2-digit' }).formatToParts(now);
    const year = parts.find(p => p.type === 'year')?.value || now.getFullYear().toString();
    const month = parts.find(p => p.type === 'month')?.value || (now.getMonth() + 1).toString().padStart(2, '0');

    // Calcular el offset horario actual de Santiago (ej. -04:00 o -03:00)
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const santiagoTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Santiago"})).getTime();
    const diffMins = Math.round((santiagoTime - utcTime) / 60000);
    const sign = diffMins >= 0 ? "+" : "-";
    const absMins = Math.abs(diffMins);
    const offsetStr = `${sign}${Math.floor(absMins / 60).toString().padStart(2, '0')}:${(absMins % 60).toString().padStart(2, '0')}`;

    const [horas, mins] = hora.split(':');
    const startIso = `${year}-${month}-${dia.toString().padStart(2, '0')}T${horas.padStart(2, '0')}:${mins.padStart(2, '0')}:00${offsetStr}`;
    
    // Duración de 1 hora
    const d = new Date(startIso);
    d.setHours(d.getHours() + 1);
    const endIso = d.toISOString();

    const event = {
      summary: `Sesión con ${pacienteNombre}`,
      description: `Reserva agendada vía web.`,
      start: {
        dateTime: startIso,
        timeZone: 'America/Santiago'
      },
      end: {
        dateTime: endIso,
        timeZone: 'America/Santiago'
      }
    };

    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });

    const data = await res.json() as any;

    if (!res.ok) {
      console.error("Error de Google Calendar API:", data);
      return c.json({ error: "Error creando el evento en Google Calendar", details: data }, 500);
    }

    return c.json({
      message: "Reserva creada exitosamente",
      eventUrl: data.htmlLink
    });
  } catch (error: any) {
    console.error("Error en /book:", error);
    return c.json({ error: "Error interno del servidor", details: error.message }, 500);
  }
});
