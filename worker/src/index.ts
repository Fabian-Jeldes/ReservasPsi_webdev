import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { calendarRouter } from './calendar';
import { paymentsRouter } from './payments';

// Definición de tipos para las variables de entorno inyectadas por Cloudflare
export type Bindings = {
  GOOGLE_CALENDAR_ID: string;
  GOOGLE_CLIENT_EMAIL: string;
  GOOGLE_PRIVATE_KEY: string;
  MERCADOPAGO_ACCESS_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Configurar CORS para permitir peticiones desde el frontend
app.use('*', cors({
  origin: '*', // En producción, restringir al dominio de Cloudflare Pages
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Endpoints de salud
app.get('/', (c) => c.text('Andi Backend API (Cloudflare Worker) is running!'));
app.get('/api/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }));

// Rutas anidadas
app.route('/api/calendar', calendarRouter);
app.route('/api/payments', paymentsRouter);

// Manejo de errores global
app.onError((err, c) => {
  console.error(`Error procesando petición: ${err.message}`);
  return c.json({ error: 'Internal Server Error', message: err.message }, 500);
});

export default app;
