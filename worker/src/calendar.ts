import { Hono } from 'hono';
import type { Bindings } from './index';

export const calendarRouter = new Hono<{ Bindings: Bindings }>();

/**
 * Obtiene la disponibilidad del calendario (bloques libres).
 * Ruta: GET /api/calendar/availability
 */
calendarRouter.get('/availability', async (c) => {
  const calendarId = c.env.GOOGLE_CALENDAR_ID;
  
  // TODO: Implementar lógica de generación de JWT con la Service Account
  // TODO: Hacer fetch a https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events
  
  return c.json({
    message: "Endpoint de disponibilidad de calendario",
    calendarId: calendarId ? "Configurado" : "Falta configurar en .dev.vars",
    data: [
      // Estructura de ejemplo
      { start: "2024-05-01T10:00:00Z", end: "2024-05-01T11:00:00Z" }
    ]
  });
});

/**
 * Crea un evento en el calendario. 
 * Esta ruta idealmente solo debe ser llamada internamente por el webhook de MercadoPago,
 * pero se define aquí como estructura.
 * Ruta: POST /api/calendar/book
 */
calendarRouter.post('/book', async (c) => {
  const body = await c.req.json();
  
  // TODO: Validar que la petición viene de un pago confirmado
  // TODO: Insertar evento en Google Calendar
  
  return c.json({
    message: "Reserva creada exitosamente (Mock)",
    details: body
  });
});
