import type { LegalPageData, LegalPageId } from '../types/site'

export const LEGAL_PAGES_DATA: Record<LegalPageId, LegalPageData> = {
  privacidad: {
    id: 'privacidad',
    path: '/privacidad',
    navLabel: 'Privacidad',
    eyebrow: 'Seguridad y Privacidad',
    titlePrefix: 'Política de',
    titleAccent: 'Privacidad',
    summary:
      'El cuidado de tu confidencialidad comienza desde el primer contacto digital. Aquí se explica con transparencia qué ocurre con la información cuando navegas por este sitio o solicitas una sesión clínica.',
    updatedLabel: 'Actualizado en 2026 · Práctica clínica en Chile',
    sections: [
      {
        title: '1. Navegación cifrada y sitio sin almacenamiento clínico propio',
        paragraphs: [
          'Este sitio web opera íntegramente bajo conexión cifrada <strong>HTTPS (TLS con HSTS)</strong> y cabeceras de seguridad activas para proteger tu navegación.',
          'En <strong>psandrei.com</strong> no existe una base de datos propia de pacientes ni se almacenan fichas clínicas, antecedentes médicos, diagnósticos ni motivos de consulta.',
        ],
      },
      {
        title: '2. Datos ingresados en el formulario previo de agenda',
        paragraphs: [
          'Al abrir la ventana de agendamiento se solicitan únicamente tres datos básicos de contacto (<strong>nombre, correo electrónico y teléfono</strong>) para validar el formulario en tu navegador y facilitar el paso hacia el calendario oficial de reservas en Google Calendar.',
          'Esos datos no se guardan en servidores propios del sitio y el enlace externo aplica política <strong>no-referrer</strong> para reducir el intercambio de metadatos de navegación.',
        ],
        bullets: [
          'Se solicita solo información de contacto básica: no ingreses antecedentes clínicos sensibles en formularios previos.',
          'Al completar la reserva en Google Calendar, el tratamiento de esa cita se rige adicionalmente por las medidas de seguridad de tu cuenta y de Google.',
        ],
      },
      {
        title: '3. Telemetría técnica sin datos clínicos',
        paragraphs: [
          'El sitio utiliza analítica técnica agregada (PostHog mediante proxy propio) con el único fin de medir estabilidad, lectura de contenidos y mejoras de experiencia.',
          'Los formularios de contacto están excluidos de captura automática (<strong>ph-no-capture</strong>), los campos de texto se encuentran enmascarados y no se envían identificadores ni antecedentes clínicos en eventos de medición.',
        ],
      },
      {
        title: '4. Resguardo, derechos del titular y contacto',
        paragraphs: [
          'En coherencia con el secreto profesional de la psicología clínica y la normativa de protección de datos personales en Chile, puedes consultar, actualizar o solicitar aclaraciones sobre tus datos de contacto escribiendo a <a href="mailto:contacto@psandrei.com" class="editorial-link">contacto@psandrei.com</a>.',
        ],
      },
    ],
    closingQuote:
      'La privacidad no es un trámite técnico: es la base del vínculo terapéutico y del respeto por tu historia desde el primer clic.',
    ctaTitle: '¿Prefieres conversar directamente en consulta?',
    ctaDescription:
      'Agenda una sesión confidencial en un espacio seguro, humano y libre de juicios.',
  },
  'practica-digital': {
    id: 'practica-digital',
    path: '/practica-digital',
    navLabel: 'Práctica Digital',
    eyebrow: 'Atención Remota y Canales Formales',
    titlePrefix: 'Práctica',
    titleAccent: 'Digital',
    summary:
      'Lineamientos claros sobre cómo se desarrolla la atención psicológica y sexológica en entornos digitales, el resguardo de la confidencialidad en sesión remota y los canales formales de coordinación.',
    updatedLabel: 'Actualizado en 2026 · Modalidad online y práctica clínica',
    sections: [
      {
        title: '1. Sesiones online y confidencialidad en entorno remoto',
        paragraphs: [
          'Las sesiones tienen una duración de <strong>60 minutos</strong> y se realizan mediante plataformas de videollamada cifradas (como Google Meet), con un enlace privado asignado exclusivamente a tu horario.',
          'El espacio remoto mantiene exactamente el mismo estándar ético y de confidencialidad que una consulta presencial, resguardado por el secreto profesional vigente en Chile (Ley N° 20.584 de Derechos y Deberes de los Pacientes).',
        ],
        bullets: [
          'Te recomiendo conectarte desde un lugar privado, silencioso y sin interrupciones.',
          'El uso de audífonos y una conexión estable favorece la intimidad y continuidad de la conversación.',
          'Las sesiones no se graban ni se almacenan en audio o video.',
        ],
      },
      {
        title: '2. Canales formales de agenda y comunicación',
        paragraphs: [
          'La solicitud y gestión de horas se realiza exclusivamente a través de la <strong>agenda oficial enlazada en este sitio</strong> y la confirmación posterior por canales formales directos (correo electrónico o mensajería acordada para coordinación logística).',
          'Las redes sociales asociadas (como Instagram) cumplen un rol estrictamente psicoeducativo y de divulgación: no constituyen un canal de atención clínica ni deben utilizarse para enviar antecedentes personales sensibles.',
        ],
      },
      {
        title: '3. Encuadre terapéutico, consentimiento y continuidad',
        paragraphs: [
          'Al iniciar tu proceso terapéutico se acuerdan con claridad los objetivos clínicos, el consentimiento informado, la frecuencia sugerida, los aranceles y las condiciones de reprogramación o aviso de inasistencia.',
          'Cuando el motivo de consulta requiere una evaluación orgánica o interdisciplinaria (por ejemplo, urología, ginecología o psiquiatría), trabajamos con criterio clínico y derivación coordinada para cuidar tu salud de manera integral.',
        ],
      },
      {
        title: '4. Límites de la comunicación entre sesiones',
        paragraphs: [
          'Los canales digitales entre sesiones están destinados a coordinaciones administrativas (horarios, confirmaciones, envío de material acordado) y no reemplazan el espacio terapéutico ni brindan respuesta inmediata las 24 horas.',
        ],
      },
    ],
    closingQuote:
      'La terapia online funciona con calidez y rigor cuando existe un encuadre claro, privacidad compartida y canales formales bien definidos.',
    ctaTitle: '¿Listo para dar el primer paso?',
    ctaDescription:
      'Revisa la disponibilidad actualizada y coordina tu primera sesión online de evaluación.',
  },
  terminos: {
    id: 'terminos',
    path: '/terminos',
    navLabel: 'Términos',
    eyebrow: 'Marco Informativo y Legal',
    titlePrefix: 'Términos',
    titleAccent: 'de Uso',
    summary:
      'Condiciones generales de uso de psandrei.com y alcance de los artículos, guías de especialidades y materiales de psicoeducación publicados en este sitio.',
    updatedLabel: 'Actualizado en 2026 · psandrei.com',
    sections: [
      {
        title: '1. Finalidad informativa y psicoeducativa',
        paragraphs: [
          'Todos los textos, artículos de psicoeducación, descripciones de áreas de atención, preguntas frecuentes y recursos publicados en <strong>psandrei.com</strong> tienen un propósito exclusivamente informativo y educativo, respaldado en evidencia clínica.',
          'La lectura de este material busca acercar información rigurosa y derribar mitos sobre salud sexual y emocional, pero <strong>no constituye diagnóstico, indicación médica ni tratamiento psicoterapéutico individual</strong>.',
        ],
      },
      {
        title: '2. No reemplaza evaluación clínica profesional',
        paragraphs: [
          'Cada cuerpo, historia y proceso emocional es particular. Ningún contenido de este sitio reemplaza una evaluación profesional personalizada con un psicólogo clínico, sexólogo o médico especialista.',
          'Ante dolor físico persistente, cambios orgánicos relevantes o dudas sobre medicación, consulta siempre con tu profesional de salud correspondiente.',
        ],
      },
      {
        title: '3. Este sitio no es un servicio de urgencias',
        paragraphs: [
          'Ni este sitio web, ni el agendamiento online ni las redes sociales vinculadas prestan atención de crisis o urgencias psiquiátricas o médicas.',
        ],
        bullets: [
          '<strong>Línea de Prevención del Suicidio (Chile):</strong> marca <strong>*4141</strong> (gratuita, confidencial, 24/7).',
          '<strong>Salud Responde (MINSAL):</strong> llama al <strong>600 360 7777</strong>.',
          '<strong>Emergencias médicas (SAMU):</strong> llama al <strong>131</strong> o acude al servicio de urgencias más cercano.',
        ],
      },
      {
        title: '4. Propiedad intelectual y enlaces a terceros',
        paragraphs: [
          'Los contenidos originales, estructura editorial y material divulgativo de este sitio pertenecen a <strong>Ps. Andrei Andrusco Fidalgo</strong>. Pueden citarse con fines educativos mencionando explícitamente la fuente.',
          'Los enlaces externos hacia instituciones académicas, artículos científicos, clínicas, Doctoralia, Instagram o Google Calendar se incluyen como referencia y se rigen por los términos y políticas de cada plataforma externa.',
        ],
      },
    ],
    closingQuote:
      'Informarse con rigor alivia y orienta; el acompañamiento clínico real ocurre en consulta, escuchando tu historia particular con tiempo y cuidado.',
    ctaTitle: '¿Necesitas orientación profesional para tu caso?',
    ctaDescription:
      'Puedes agendar una sesión de evaluación o explorar la biblioteca de psicoeducación.',
  },
}
