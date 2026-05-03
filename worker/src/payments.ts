import { Hono } from 'hono';
import type { Bindings } from './index';

export const paymentsRouter = new Hono<{ Bindings: Bindings }>();

/**
 * Genera un link/preferencia de pago de MercadoPago.
 * Ruta: POST /api/payments/create-preference
 */
paymentsRouter.post('/create-preference', async (c) => {
  const token = c.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!token || token === "...") {
    return c.json({ error: "MercadoPago Access Token no configurado en el Worker." }, 500);
  }

  try {
    const body = await c.req.json();
    const { paciente, dia, hora, precio = 35000 } = body;

    const preferenceData = {
      items: [
        {
          title: `Consulta Psicológica - ${dia} a las ${hora}`,
          description: `Sesión clínica reservada por ${paciente.nombre}`,
          quantity: 1,
          currency_id: "CLP",
          unit_price: precio,
        }
      ],
      payer: {
        name: paciente.nombre,
        email: paciente.correo,
        identification: {
          type: "RUT",
          number: paciente.rut
        }
      },
      back_urls: {
        success: "http://localhost:5173/?payment=success",
        failure: "http://localhost:5173/?payment=failure",
        pending: "http://localhost:5173/?payment=pending"
      },
      // auto_return: "approved", // Desactivado temporalmente para pruebas en localhost
      // Metadata útil para el webhook
      metadata: {
        paciente_rut: paciente.rut,
        dia_reserva: dia,
        hora_reserva: hora
      }
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferenceData)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error creando preferencia MP:", data);
      return c.json({ error: "Error de MercadoPago", details: data }, 400);
    }

    return c.json({
      message: "Preferencia creada",
      init_point: data.init_point // URL para redirigir al paciente
    });
  } catch (error: any) {
    console.error("Error en create-preference:", error);
    return c.json({ error: "Error interno procesando el pago" }, 500);
  }
});

/**
 * Webhook que recibe las notificaciones de MercadoPago.
 * Ruta: POST /api/payments/webhook
 */
paymentsRouter.post('/webhook', async (c) => {
  const query = c.req.query();
  const body = await c.req.json().catch(() => ({})); // MercadoPago puede enviar distintos payloads
  
  console.log("Webhook recibido de MercadoPago", query, body);
  
  // TODO: Verificar la firma y el estado del pago.
  // Si el estado es "approved", llamar a la lógica de calendar.ts para insertar el evento.
  
  return c.json({ status: "success" });
});
