import type {
  BlogPost,
  KycFormState,
  Review,
  Specialization,
  PageSeo,
  FaqCategory,
  LegalPageId,
} from '../types/site'

export const PROFILE_IMAGE_URL = '/portada-andi.webp'
export const ABOUT_IMAGE_URL = '/sobre-mi-andi.webp'

export const TRUST_BAR_DATA = {
  eyebrow: 'FORMACIÓN Y PRÁCTICA CLÍNICA',
  institutions: [
    {
      name: 'Universidad Adolfo Ibáñez',
      url: 'https://www.uai.cl/postgrados/diplomados/diplomados-area-psicologia-salud-y-bienestar',
    },
    {
      name: 'UDD',
      url: 'https://psicologia.udd.cl/carrera/psicologia/',
    },
    {
      name: 'INCHISEX',
      url: 'https://inchisex.cl/',
    },
    {
      name: 'Clínica Mediterra',
      url: 'https://www.clinicamediterra.cl/',
    },
    {
      name: 'Clínica Uromed',
      url: 'https://www.uromed.cl/psicologia-y-urologia',
    },
    {
      name: 'ADIPA',
      url: 'https://adipa.cl/',
    },
  ] as const,
}

/* ── SEO ─────────────────────────────────────────────────────────── */

/** Dominio canónico (sin barra final). Se usa en canonical, sitemap, OG y JSON-LD. */
export const SITE_URL = 'https://psandrei.com'
export const SITE_NAME = 'Ps. Andrei Andrusco'
export const DEFAULT_OG_IMAGE = '/og/home.jpg'

/** Datos del profesional para schema.org (Person / ProfessionalService) */
export const PROFESSIONAL = {
  name: 'Andrei Andrusco Fidalgo',
  jobTitle: 'Psicólogo clínico y sexólogo',
  email: 'contacto@psandrei.com',
  description:
    'Psicólogo clínico y sexólogo. Terapia sexual y psicológica online y presencial en Chile, enfocada en disfunciones sexuales psicógenas y ansiedad de rendimiento.',
  alumniOf: ['Universidad Adolfo Ibáñez', 'Universidad del Desarrollo'],
  credentials: [
    {
      name: 'Magíster en Psicología Clínica',
      recognizedBy: 'Universidad Adolfo Ibáñez',
    },
    {
      name: 'Diplomado Internacional en Sexología y Terapia Sexual',
      recognizedBy: 'ADIPA',
    },
    {
      name: 'Diplomado en Sexología Clínica',
      recognizedBy: 'Universidad del Desarrollo / INCHISEX',
    },
  ],
  affiliations: [
    { name: 'Clínica Mediterra', url: 'https://www.clinicamediterra.cl/' },
    { name: 'Clínica Uromed', url: 'https://www.uromed.cl/' },
  ],
  knowsAbout: [
    'Terapia sexual',
    'Sexología clínica',
    'Disfunción eréctil psicógena',
    'Eyaculación precoz',
    'Bajo deseo sexual',
    'Ansiedad de rendimiento',
    'Terapia de pareja',
  ],
  /** Perfiles públicos reales presentes en el sitio */
  sameAs: ['https://www.instagram.com/ps.aandrusco'],
}

export const SEO_PAGES = {
  home: {
    title: 'Ps. Andrei Andrusco | Psicólogo y Sexólogo Clínico en Santiago',
    description:
      'Consulta especializada en sexología clínica y terapia sexual en Santiago de Chile. Tratamiento humano para disfunción eréctil, eyaculación precoz y ansiedad de desempeño.',
  },
  about: {
    title: 'Sobre mí | Ps. Andrei Andrusco - Formación y Enfoque Clínico',
    description:
      'Conoce la trayectoria y formación del Ps. Andrei Andrusco, Psicólogo Clínico y Sexólogo. Magíster en Psicología Clínica y diplomados en Sexología Clínica.',
  },
  articles: {
    title: 'Biblioteca de Psicoeducación y Salud Sexual | Ps. Andrei Andrusco',
    description:
      'Artículos clínicos sobre sexualidad masculina, disfunción eréctil, eyaculación precoz, pornografía y comunicación de pareja, basados en evidencia.',
  },
  privacy: {
    title: 'Política de Privacidad y Resguardo de Datos | Ps. Andrei Andrusco',
    description:
      'Cómo resguardamos tu privacidad al navegar y al solicitar una sesión clínica: cifrado HTTPS, minimización de datos y confidencialidad profesional.',
  },
  digitalPractice: {
    title: 'Práctica Digital y Confidencialidad Remota | Ps. Andrei Andrusco',
    description:
      'Condiciones de confidencialidad en terapia psicológica y sexológica online, resguardo del entorno remoto y canales formales de agenda.',
  },
  terms: {
    title: 'Términos de Uso y Alcance Informativo | Ps. Andrei Andrusco',
    description:
      'Alcance informativo y psicoeducativo de los contenidos publicados en psandrei.com. No reemplaza evaluación clínica ni constituye atención de urgencias.',
  },
  notFound: {
    title: 'Página no encontrada | Ps. Andrei Andrusco',
    description: 'La página que buscas no existe o fue movida.',
  },
} satisfies Record<string, PageSeo>

/** Sufijo del <title> en artículos */
export const ARTICLE_TITLE_SUFFIX = ' | Ps. Andrei Andrusco'
/** Sufijo del <title> en páginas de especialidad */
export const SPECIALIZATION_TITLE_SUFFIX = ' | Sexología en Santiago - Ps. Andrei Andrusco'

/** Ubicación y horario de atención (schema.org ProfessionalService) */
export const PRACTICE_LOCATION = {
  addressLocality: 'Santiago',
  addressRegion: 'Región Metropolitana',
  addressCountry: 'CL',
  openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '19:00',
}

export const BREADCRUMB_LABELS = {
  home: 'Inicio',
  articles: 'Artículos',
}

export const NOT_FOUND_PAGE = {
  code: '404',
  title: 'Esta página no existe',
  summary: 'Puede que el enlace esté roto o que el contenido haya cambiado de lugar.',
  homeLabel: 'Volver al inicio',
  articlesLabel: 'Ver artículos',
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    author: 'Paciente Anónimo',
    content:
      'Excelente profesional, me sentí escuchado y sin juicios desde el primer momento.',
    rating: 5,
  },
  {
    id: 2,
    author: 'M. González',
    content: "El enfoque clínico es muy humano. Me ayudó a entender que no estoy 'roto'.",
    rating: 5,
  },
  {
    id: 3,
    author: 'Carlos R.',
    content:
      'Muy recomendado para temas de ansiedad de desempeño. El cambio fue notable en pocas sesiones.',
    rating: 4,
  },
  {
    id: 4,
    author: 'J. P. L.',
    content: 'La psicoeducación es clave. Andi explica todo de forma clara y profesional.',
    rating: 5,
  },
  {
    id: 5,
    author: 'Andrés F.',
    content:
      'Excelente profesional, con enfoque humanista y muy claro en su forma de comunicar. Totalmente recomendado.',
    rating: 5,
  },
  {
    id: 6,
    author: "A. S.",
    content: "Llegué con muchas dudas e inseguridades, ya que no es fácil hablar de estos temas; sin embargo, Andrei me generó de inmediato confianza. Ya estoy como enla 5ta sesión y su diagnóstico fue súper certero, me ha ayudado mucho con mi situación actual y espero que siga mejorando.",
    rating: 5,
  },
  {
    id: 7,
    author: "C. B.",
    content: "Es muy empático y dedicado. Le gusta mucho su trabajo.",
    rating: 5,
  },
  {
    id: 8,
    author: "F.",
    content: "Andrei es una persona muy asertiva y receptiva. Recomiendo 100%.",
    rating: 5,
  },
  {
    id: 9,
    author: "C. V. V.",
    content: "Gran profesional. Hizo que la sesión fuera muy amena, en un ambiente de confianza donde uno siente seguridad de hablar los temas que le afectan.",
    rating: 5,
  },
  {
    id: 10,
    author: "A. T. F.",
    content: "Excelente profesional. Su atención se realizó en un ambiente muy ameno, pero totalmente abocado al tema. Me sirvió y me gustó su sesión.",
    rating: 5,
  },
  {
    id: 11,
    author: "L. S.",
    content: "Muy comprometido y con mucho entusiasmo en ayudarte y ser un equipo durante el proceso terapéutico.",
    rating: 5,
  },
  {
    id: 12,
    author: "L. D.",
    content: "Excelente como siempre, muy dedicado. Excelente profesional.",
    rating: 5,
  },
  {
    id: 13,
    author: "D.",
    content: "Súper atento y escuchando activamente, atendiendo las inquietudes y preocupaciones. Se da tiempo de explicar y orientar, da herramientas para trabajar con una ruta de trabajo.",
    rating: 5,
  },
  {
    id: 14,
    author: "F. A.",
    content: "Andrei siempre se toma el tiempo que necesites para apoyarte, orientarte y no dejarte a la deriva. Han sido sesiones de visibilizar temas profundos y complejos pero, a pesar de todo, Andrei siempre genera un espacio seguro y de confianza. He pasado por muchos profesionales y es la primera vez que puedo expresarme y sentirme comprendido.",
    rating: 5
  },
  {
    id: 15,
    author: "J. A.",
    content: "Todo súper bien y avanzando de buena manera en mi tratamiento.",
    rating: 5,
  },
  {
    id: 16,
    author: "R. A. G.",
    content: "Excelente profesional, brinda una atención cercana y afectiva que ayuda a sentirse muy cómodo y poder avanzar en el proceso con confianza. 100% recomendable.",
    rating: 5,
  },
  {
    id: 17,
    author: "E. P.",
    content: "Terapia bien enfocada. Buena comunicación y confianza.",
    rating: 5,
  },
  {
    id: 18,
    author: "S. M.",
    content: "Excelente profesional, siempre aclarando las dudas.",
    rating: 5
  },
  {
    id: 19,
    author: "D. C. I.",
    content: "La experiencia hasta ahora ha sido genial; la empatía, la honestidad y lo genuino han sido la clave en mi proceso. Estoy muy agradecido.",
    rating: 5
  },
  {
    id: 20,
    author: "F. R.",
    content: "Muy profesional. Fue una experiencia muy reconfortante al hacerme entender cosas que no había comprendido de mi problema y verlo de manera diferente. 100% recomendado al mezclar sus conocimientos profesionales con un trato muy casual y ameno.",
    rating: 5
  },
  {
    id: 21,
    author: "O.",
    content: "Recomiendo al profesional; es simpático, agradable, resolutivo y competente.",
    rating: 5
  },
  {
    id: 22,
    author: "L. A.",
    content: "Muy eficaz en el tratamiento. Muy amable y dedicado en cada sesión. Agradecido de las herramientas entregadas y del trabajo realizado.",
    rating: 5
  },
  {
    id: 23,
    author: "R. Z.",
    content: "Llevo 4 sesiones con él y me ha hecho sentir muy cómodo. Me ha explicado las posibles causas de mi situación y planteado técnicas para su solución. Excelente profesional.",
    rating: 5
  },
  {
    id: 24,
    author: "O. F.",
    content: "Excelente profesional, buena atención, puntual, muy cercano y empático.",
    rating: 5
  },
  {
    id: 25,
    author: "L. A.",
    content: "Recomiendo al profesional; es simpático, agradable, resolutivo y competente.",
    rating: 5
  },
  {
    id: 26,
    author: "R. Z.",
    content: "Muy eficaz en el tratamiento. Muy amable y dedicado en cada sesión. Agradecido de las herramientas entregadas y del trabajo realizado.",
    rating: 5
  },

  {
    id: 27,
    author: "L. V. R.",
    content: "Me gustó mucho cómo Andrei trató mi problema; fue cercano y se dio el tiempo de responder todas las preguntas que me fueron surgiendo en la sesión. Me hizo sentir cómodo y que mi problema era algo que iba a poder sacar adelante, dándome esperanza.",
    rating: 5
  },

  {
    id: 28,
    author: "J. M.",
    content: "Buena experiencia con Andrei, muy dedicado y enfocado en el paciente.",
    rating: 5
  },

  {
    id: 29,
    author: "H.",
    content: "Explicación clara y una orientación hacia el objetivo de mejorar mi conducta errónea.",
    rating: 5
  },

  {
    id: 30,
    author: "S. C.",
    content: "Muy atento y puntual, genera buen lazo en la atención dando espacios para una comunicación fluida entre el paciente y el profesional. El tratamiento ha sido eficaz mediante las herramientas entregadas.",
    rating: 5
  },

  {
    id: 31,
    author: "Anónimo",
    content: "Excelente especialista. Confianza y puntualidad. Lo recomiendo.",
    rating: 5
  },
  {
    id: 32,
    author: "D.",
    content: "Excelente profesional, analiza el problema y le da un enfoque integral. Recomendable 100%.",
    rating: 5
  },

  {
    id: 33,
    author: "F. N.",
    content: "Encuentro que presenta un interés genuino por el paciente, disposición y adaptabilidad a sus necesidades, y una empatía tal que te invita a abrirte y a expresar de una forma más simple todo lo que estás pensando o sintiendo. En mi caso particular, siendo yo una persona muy compleja de llevar, puedo decir que Andrei genera el espacio y la confianza necesaria para poder verbalizar de mejor manera y expresar lo que estoy viviendo y sintiendo. Creo que es un excelente profesional.",
    rating: 5
  },
  {
    id: 34,
    author: "D.",
    content: "Excelente profesional, analiza el problema y le da un enfoque integral. Recomendable 100%.",
    rating: 5
  },
]

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: 1,
    slug: 'disfuncion-erectil-psicogena',
    title: 'Disfunción Eréctil Psicógena',
    subtitle: 'Reconceptualizando la erección',
    description:
      'No estás enfermo ni tu cuerpo está "roto". A través de la terapia, entenderemos que la pérdida de erección es una respuesta humana natural ante la presión y la ansiedad por rendir.',
    moreContent:
      'Aprenderemos a soltar la exigencia y el miedo a fallar, permitiéndote disfrutar sin que un contratiempo se sienta como una fatalidad, sino solo como un momento pasajero.',
    detailedContent: [
      'Es muy común que cuando un hombre pierde la erección, o le empieza a pasar de forma recurrente, sienta que algo se "rompió" dentro de él. Nos han hecho creer que el cuerpo masculino tiene que estar siempre listo, como si fuera un interruptor que simplemente se enciende a voluntad. Pero la realidad humana es mucho más compleja y, a la vez, mucho más lógica.',
      'Para que una erección ocurra y se mantenga, tu cuerpo necesita sentirse en un <strong class="theme-text">espacio de confianza, disfrute y relajación</strong>. Sin embargo, ¿qué pasa cuando entras a la intimidad pensando "ojalá no me falle hoy", "tengo que cumplir" o "¿y si me vuelve a pasar?"? En ese momento, tu cerebro detecta una amenaza. Se encienden las alarmas, el <strong class="theme-text">miedo al fracaso toma el control</strong> y tu sistema nervioso reacciona preparándote para "huir o pelear" ante ese peligro.',
      'En ese estado de alerta máxima, la <strong class="theme-text">excitación es biológicamente imposible</strong>. Tu cuerpo, literalmente, desconecta la respuesta sexual porque toda su energía está puesta en defenderte de esa angustia mental.',
      'Por eso es tan importante entender que <strong class="theme-text">no estás enfermo ni defectuoso</strong>. ¡Al contrario! Tu cuerpo está funcionando a la perfección, respondiendo de manera completamente congruente a las señales de estrés intenso que tu mente le está enviando. Estás reaccionando a una <strong class="theme-text">falsa alarma creada por la autoexigencia</strong>.',
      'En nuestro trabajo en terapia no buscaremos "soluciones mágicas" para obligar a tu cuerpo a rendir, porque <strong class="theme-text">intentar forzar una erección es justamente lo que más la aleja</strong>. Lo que haremos será desarmar esa presión asfixiante. Te ayudaré a entender cómo operan tus propios bloqueos, a aceptar que somos falibles y a perderle el miedo a que la respuesta física fluctúe. Cuando dejamos de tratar a la intimidad como un examen que hay que aprobar, la ansiedad baja, el bloqueo simplemente pasa y tu cuerpo <strong class="theme-text">vuelve a conectarse con el placer de forma natural</strong>.',
      '<strong class="theme-text font-bold">"La erección no es un interruptor que se enciende a voluntad, sino una respuesta natural que florece cuando apagamos el miedo a fallar."</strong>'
    ],
    references: [
      'Barlow, D. H. (1986). Causes of sexual dysfunction: The role of anxiety and cognitive interference. <a href="https://pubmed.ncbi.nlm.nih.gov/3700804/" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Consulting and Clinical Psychology</a>.',
      'American Psychological Association (APA). (2020). <a href="https://www.apa.org/topics/sexual-health" target="_blank" rel="noopener noreferrer" class="editorial-link">Understanding sexual health and erectile dysfunction</a>.',
      'Bancroft, J. (2009). Human Sexuality and Its Problems. Elsevier Health Sciences.'
    ]
  },
  {
    id: 2,
    slug: 'control-eyaculatorio',
    title: 'Control Eyaculatorio (Precoz y Retardado)',
    subtitle: 'Tu sexualidad, a tu propio ritmo',
    description:
      'Ya sea que sientas presión por "durar más" o angustia por "tener que llegar", el problema no eres tú, sino la exigencia de rendir bajo un estándar irreal.',
    moreContent:
      'Desarmaremos la trampa del automonitoreo y la obligación, explorando tus propios mecanismos para que puedas reconectar con el placer genuino y dejar que tu respuesta sexual fluya naturalmente a tu propio ritmo.',
    detailedContent: [
      'A los hombres se les ha enseñado a ver su cuerpo como un reloj que debe estar perfectamente sincronizado. Si terminas muy rápido, sientes que fallaste. Si te demoras demasiado o simplemente no logras llegar, también sientes que fallaste. Esta exigencia constante de tener que "durar lo exacto" o "llegar a la meta" convierte un espacio que debería ser de conexión y disfrute en un <strong class="theme-text">agotador examen de rendimiento</strong>.',
      'Aunque parezcan problemas opuestos, llegar antes de tiempo o no poder llegar por más que te esfuerces comparten exactamente la misma raíz: <strong class="theme-text">la ansiedad, la presión por el "deber ser" y el automonitoreo constante</strong>.',
      'Cuando entras a la intimidad hipervigilante, pensando cosas como "tengo que aguantar", "ojalá no me pase de nuevo" o "¿por qué no estoy terminando?", tu mente deja de estar en el momento presente y <strong class="theme-text">se convierte en un juez</strong>. Este exceso de control mental y angustia hace que tu sistema nervioso entre en estado de alerta.',
      'En algunos hombres, esta alarma producida por la ansiedad acelera drásticamente el proceso... En otros, produce el efecto de <strong class="theme-text">"espectador"</strong> (estudiado clínicamente por el <a href="https://pubmed.ncbi.nlm.nih.gov/3700804/" target="_blank" rel="noopener noreferrer" class="editorial-link">Dr. David Barlow</a>): la sobre-observación te desconecta tanto de las sensaciones físicas que tu cuerpo se bloquea, impidiendo alcanzar el clímax a pesar del esfuerzo.',
      'En ninguno de los dos casos tu cuerpo está dañado o enfermo. Tu cuerpo está sano y está respondiendo de manera completamente lógica a la <strong class="theme-text">presión de una obligación irreal</strong>.',
      'En nuestro espacio de terapia no vamos a buscar "trucos" mecánicos para que te distraigas o intentes forzar a tu cuerpo a comportarse como una máquina. Eso solo aumenta la desconexión. Lo que haremos será <strong class="theme-text">desarmar esa autoexigencia asfixiante</strong>. Te acompañaré a entender cómo funcionan tus propios mecanismos de alerta, a perdonarte la exigencia de ser infalible y a dejar de evaluar tu desempeño. Cuando le quitamos a la intimidad el carácter de obligación, puedes "volver a habitar tu cuerpo", reconectar con el placer genuino y dejar que tu respuesta sexual, finalmente, fluya a su propio ritmo.',
      '<strong class="theme-text font-bold">"Tu cuerpo no es un cronómetro; el placer solo encuentra su verdadero ritmo cuando dejas de evaluar tu rendimiento."</strong>'
    ],
    references: [
      'Althof, S. E. (2016). Treatment of rapid ejaculation: Psychotherapy, pharmacotherapy, and combined therapy. <a href="https://pubmed.ncbi.nlm.nih.gov/27045952/" target="_blank" rel="noopener noreferrer" class="editorial-link">The Journal of Sexual Medicine</a>.',
      'International Society for Sexual Medicine (ISSM). (2018). <a href="https://www.issm.info/" target="_blank" rel="noopener noreferrer" class="editorial-link">Clinical Practice Guidelines for Premature and Delayed Ejaculation</a>.',
      'Rowland, D. L., & Cooper, S. E. (2011). Understanding and treating premature ejaculation. <a href="https://pubmed.ncbi.nlm.nih.gov/21834947/" target="_blank" rel="noopener noreferrer" class="editorial-link">Postgraduate Medicine</a>.'
    ]
  },
  {
    id: 3,
    slug: 'cambios-deseo-sexual',
    title: 'Cambios en el Deseo Sexual',
    subtitle: 'Normalizando tu experiencia',
    description:
      'Desmitificamos la idea tóxica de que el hombre debe "estar siempre listo" o "siempre con ganas". Exploramos sin juicios las presiones, rutinas y estresores que apagan tu interés.',
    moreContent:
      'Te acompaño a entender que estas fluctuaciones son reacciones normales y no una enfermedad, para reincorporar la sexualidad a tu vida de forma más amable y compasiva.',
    detailedContent: [
      'Existe un mito cultural muy pesado y silencioso: la idea tóxica de que el hombre debe estar "siempre listo" y con ganas, como si el deseo masculino fuera un motor inagotable que no se apaga jamás. Por eso, cuando notas que tu interés por la intimidad disminuye o simplemente desaparece, es muy fácil caer en la culpa, sentir que estás perdiendo tu masculinidad o pensar que algo dentro de ti se "rompió".',
      'Pero la reality humana es muy distinta. El deseo sexual no es un interruptor automático, sino un <strong class="theme-text">sistema altamente sensible a tu entorno, a tus emociones y a tus niveles de energía</strong> (explicado mediante el modelo circular de <a href="https://pubmed.ncbi.nlm.nih.gov/11107297/" target="_blank" rel="noopener noreferrer" class="editorial-link">Rosemary Basson</a>). Imagina que tu respuesta sexual tiene un acelerador y un freno. Las presiones del trabajo, el cansancio crónico o las tensiones no resueltas actúan como un <strong class="theme-text">freno de mano puesto a fondo</strong>.',
      'Fisiológicamente, cuando estás sobrecargado por la rutina o las preocupaciones, tu cerebro interpreta que estás en <strong class="theme-text">modo de "supervivencia"</strong>. Y biológicamente, cuando el sistema nervioso está intentando sobrevivir al estrés diario, <strong class="theme-text">la reproducción y el placer pasan a ser la última prioridad</strong>. Tu cuerpo, literalmente, apaga el deseo para ahorrar energía.',
      'Por lo tanto, una baja en tu libido no significa que estés enfermo, que seas defectuoso o que tu relación esté arruinada. Al contrario, tu cuerpo está teniendo una <strong class="theme-text">reacción completamente normal, lógica y sana</strong> frente a un nivel de agotamiento o presión que tu mente ya no puede procesar.',
      'En nuestra terapia no vamos a juzgarte, ni mucho menos a forzarte a "tener ganas"... Obligarse a desear solo genera más riesgo y frustración. Lo que haremos será <strong class="theme-text">quitarle a la intimidad el peso de ser "otra obligación más"</strong> en tu lista de tareas, para que puedas reencontrarte con tu sexualidad de una forma mucho más <strong class="theme-text">amable, compasiva y humana</strong>.',
      '<strong class="theme-text font-bold">"No existe el deber de \'estar siempre listo\'; tu deseo no se apagó, solo está reaccionando al peso y al estrés de tu rutina."</strong>'
    ],
    references: [
      'Basson, R. (2000). The female sexual response: A different model. <a href="https://pubmed.ncbi.nlm.nih.gov/11107297/" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Sex & Marital Therapy</a>.',
      'McCarthy, B., & McCarthy, E. (2003). Rekindling Desire: A Step-by-Step Program to Help Low-Sex and No-Sex Marriages. Brunner-Routledge.',
      'Brotto, L. A. (2018). Mindfulness-based treatment for low sexual desire. <a href="https://pubmed.ncbi.nlm.nih.gov/29088656/" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Sexual Medicine</a>.'
    ]
  },
  {
    id: 4,
    slug: 'ansiedad-desempeno',
    title: 'Ansiedad de Desempeño y Miedo a Fallar',
    subtitle: 'Rompiendo la trampa mental',
    description:
      'Tratarte a ti mismo como "el problema" es justamente lo que alimenta la ansiedad. Entenderemos cómo el temor a que "vuelva a pasar" bloquea tu cuerpo y mente.',
    moreContent:
      'Aprenderemos a aceptar nuestra falibilidad como algo absolutamente humano, soltando las consecuencias catastróficas imaginarias para que el bloqueo simplemente pase y vuelvas al placer.',
    detailedContent: [
      'La mente tiene una capacidad asombrosa para arruinar un buen momento, especialmente cuando asume el rol de un juez crítico. Cuando un encuentro íntimo deja de ser un espacio de disfrute y se transforma en un <strong class="theme-text">examen que sientes que "debes aprobar"</strong>, el miedo toma el control. Empiezan los ecos anticipatorios: "¿Y si me vuelve a pasar?", "hoy no puedo fallar", "tengo que demostrar que todo está bien".',
      'Esa es exactamente la trampa mental. Tratarte a ti mismo como "el problema" o convencerte de que estás dañado es el <strong class="theme-text">combustible principal de la ansiedad</strong>. Al entrar a la intimidad con una lupa, vigilando cada una de tus reacciones y evaluando tu rendimiento en tiempo real, tu cerebro deja de registrar el placer y comienza a registrar una amenaza.',
      'Ante una amenaza, tu sistema nervioso reacciona. Tu cuerpo, en un intento por protegerte de esa enorme angustia psicológica, entra en estado de alerta y <strong class="theme-text">simplemente bloquea la respuesta sexual</strong> (mecanismo cognitivo-conductual analizado por <a href="https://pubmed.ncbi.nlm.nih.gov/16912384/" target="_blank" rel="noopener noreferrer" class="editorial-link">Nobre & Pinto-Gouveia, 2006</a>). No es que tu cuerpo haya olvidado cómo funcionar; es que está literalmente <strong class="theme-text">paralizado por el miedo a equivocarse</strong>.',
      'Es vital que entiendas que este bloqueo no te hace menos hombre ni significa que estés enfermo. Eres una persona sana atrapada en un <strong class="theme-text">ciclo de autoexigencia asfixiante</strong>. Tu cuerpo está reaccionando perfectamente al terror que le provoca imaginar las consecuencias catastróficas de "no rendir" bajo ese estándar irreal.',
      'En nuestro espacio de terapia, el objetivo no será darte herramientas para que te conviertas en una máquina infalible, porque eso es una fantasía inhumana. Lo que haremos será desarmar ese ciclo. Te acompañaré a mirar de frente ese temor al fracaso y a quitarle su poder destructivo. Aprenderemos que <strong class="theme-text">aceptar nuestra propia falibilidad no es una derrota</strong>, sino el único camino real para liberar la presión. Cuando dejamos de castigarnos por la posibilidad de fallar, la ansiedad se queda sin argumentos y tú puedes volver a entregarte al placer sin el peso del mundo sobre tus hombros. <strong class="theme-text">Eres falible y eso está bien</strong>. ¡Todos lo somos, bienvenido al club!',
      '<strong class="theme-text font-bold">"El mayor obstáculo para el placer no es el cuerpo, sino la exigencia mental que le imponemos."</strong>'
    ],
    references: [
      'Nobre, P. J., & Pinto-Gouveia, J. (2006). Cognitive processes associated with sexual dysfunction. <a href="https://pubmed.ncbi.nlm.nih.gov/16912384/" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Sex Research</a>.',
      'Mayo Clinic. (2022). <a href="https://www.mayoclinic.org/diseases-conditions/erectile-dysfunction/symptoms-causes/syc-20355776" target="_blank" rel="noopener noreferrer" class="editorial-link">Erectile dysfunction: Psychological causes and performance anxiety</a>.',
      'Metz, M. E., & McCarthy, B. W. (2004). Coping with Erectile Dysfunction: How to Regain Confidence and Enjoy Great Sex. New Harbinger Publications.'
    ]
  },
  {
    id: 5,
    slug: 'comunicacion-sexual',
    title: 'Comunicación Sexual',
    subtitle: 'Conexión desde nuestra humanidad',
    description:
      'Transformamos la visión del sexo: deja de ser una prueba de rendimiento para volver a ser un espacio de encuentro y exploración.',
    moreContent:
      'Fomentamos un lugar seguro para hablar de lo que te pasa sin culpas. Entender y compartir que somos sanos pero falibles alivia la presión y fortalece la conexión real; al compartirlo, el peso se hace más ligero.',
    detailedContent: [
      'Uno de los pesos más grandes que cargan los hombres cuando enfrentan una dificultad sexual es el silencio. Culturalmente nos han enseñado que hablar de nuestras inseguridades es un signo de debilidad. Por eso, la reacción automática suele ser aislarse y <strong class="theme-text">levantar un muro invisible de vergüenza</strong> y distancia con la pareja.',
      'El problema de este silencio es que transforma la sexualidad en un escenario solitario. Dejas de estar verdaderamente con la otra persona para quedarte encerrado en tu propia cabeza. El sexo deja de ser un espacio para compartir y se convierte en una <strong class="theme-text">fría prueba de rendimiento donde toda la responsabilidad recae sobre tus hombros</strong>.',
      'En nuestra terapia, el objetivo es construir un lugar seguro donde sea posible hablar sin tener que sostener esa <strong class="theme-text">pesada armadura de "hombre infalible"</strong>. Aprenderemos que mostrarte vulnerable y expresar lo que sientes no te hace menos hombre, sino simplemente humano.',
      'Cuando logramos verbalizar nuestros miedos, ocurre algo tremendamente liberador: <strong class="theme-text">la presión se desinfla casi de inmediato</strong>. Al soltar el secreto y dejar de intentar resolverlo todo en soledad, el encuentro íntimo vuelve a ser lo que siempre debió ser: un <strong class="theme-text">espacio de exploración, empatía y conexión real</strong>, donde el peso, al compartirse, se hace muchísimo más ligero.',
      '<strong class="theme-text font-bold">"El silencio alimenta la ansiedad; compartir nuestra vulnerabilidad es lo que verdaderamente fortalece la conexión."</strong>'
    ],
    references: [
      'Gottman, J. M., & Silver, N. (2015). The Seven Principles for Making Marriage Work. Harmony. <a href="https://www.gottman.com/" target="_blank" rel="noopener noreferrer" class="editorial-link">The Gottman Institute</a>.',
      'Byers, E. S. (2005). Relationship satisfaction and sexual satisfaction: A longitudinal study of couples. <a href="https://journals.sagepub.com/doi/10.1177/0265407505052441" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Social and Personal Relationships</a>.',
      'Schnarch, D. (1997). Passionate Marriage: Love, Sex, and Intimacy in Emotionally Committed Relationships. Henry Holt and Co.'
    ]
  },
  {
    id: 6,
    slug: 'impacto-pornografia',
    title: 'Impacto de la Pornografía',
    subtitle: 'Una adicción silenciosa',
    description:
      'No hay nada malo en ti si la intimidad compartida ya no se siente como en la pantalla.',
    moreContent:
      'Especialmente cuando el consumo comienza a temprana edad, este hábito puede mutar tus expectativas y desconectarte de tu deseo real, operando como un factor de riesgo silencioso para problemas de erección y ansiedad. Sin juicios morales, exploraremos cómo desarmar esta dependencia para que puedas "reiniciar" tus sentidos y reconectar con una sexualidad auténtica, humana y libre de ficción.',
    detailedContent: [
      'Es muy común que, en el silencio y la privacidad, muchos hombres noten que el sexo en la vida real ya no les genera la misma respuesta física ni el mismo entusiasmo que lo que ven en una pantalla. Cuando tu cuerpo no responde frente a una pareja, pero sí frente al teléfono, <strong class="theme-text">la confusión y la culpa suelen ser abrumadoras</strong>.',
      'Para entender esto sin juzgarte, debemos mirar cómo funciona el cerebro frente a la <strong class="theme-text">hiperestimulación</strong>. Cuando la exposición a la pornografía comienza a temprana edad, esta actúa como una "escuela" distorsionada que nos enseña a asociar la excitación con una novedad infinita y un rendimiento irreal, <strong class="theme-text">sin la vulnerabilidad emocional que exige el contacto humano</strong>.',
      'Con el tiempo, este consumo sostenido provoca una <strong class="theme-text">profunda desconexión con el deseo real</strong>. Al enfrentarte a la intimidad humana —que es naturalmente más pausada e imperfecta— tu sistema nervioso puede sentirse desorientado, porque no encuentra ese nivel extremo de estímulo al que está acostumbrado.',
      'Es justamente por esta descalibración que suelen aparecer los bloqueos: pérdidas de erección inexplicables, dificultad para llegar al clímax, o una <strong class="theme-text">Disfunción Eréctil Inducida por Pornografía (PIED)</strong> (concepto analizado científicamente por <a href="https://pubmed.ncbi.nlm.nih.gov/27845656/" target="_blank" rel="noopener noreferrer" class="editorial-link">Park et al., 2016</a>), o una ansiedad asfixiante por sentir que tienes que "actuar" imitando lo que has visto en la pantalla. No es que tu cuerpo esté dañado; es simplemente que se ha <strong class="theme-text">acostumbrado a un estímulo artificial</strong>.',
      'En nuestro espacio de terapia no hay lugar para los sermones ni los juicios morales. Lo que haremos será "reiniciar" tu sistema nervioso, ayudándote a soltar la presión de la ficción para que puedas reconectar con el placer genuino y descubrir que la intimidad compartida, con toda su humanidad, es profundamente más satisfactoria.',
      '<strong class="theme-text font-bold">"La sexualidad real no compite con una pantalla; desaprender esos estándares irreales es clave para \'reiniciar\' tu deseo."</strong>'
    ],
    references: [
      'Park, B. Y., et al. (2016). Is Internet Pornography Causing Sexual Dysfunctions? A Review with Clinical Reports. <a href="https://pubmed.ncbi.nlm.nih.gov/27845656/" target="_blank" rel="noopener noreferrer" class="editorial-link">Behavioral Sciences</a>.',
      'World Health Organization (WHO). (2019). <a href="https://icd.who.int/browse11/l-m/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1630268601" target="_blank" rel="noopener noreferrer" class="editorial-link">Compulsive Sexual Behavior Disorder (CSBD) in ICD-11</a>.',
      'Gola, M., et al. (2016). Behavioral and neural responses to pornography in men. <a href="https://pubmed.ncbi.nlm.nih.gov/27539958/" target="_blank" rel="noopener noreferrer" class="editorial-link">Journal of Behavioral Addictions</a>.'
    ]
  },
]
export function getSpecializationBySlug(slug: string): Specialization | undefined {
  return SPECIALIZATIONS.find((s) => s.slug === slug);
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'mito-rendimiento-masculino',
    title: 'Más allá del rendimiento',
    date: '12 Mar 2026',
    category: 'Psicoeducación',
    content:
      'No necesitas ser una máquina: Por qué la exigencia de estar siempre listo te está apagando y cómo entenderlo cambiará tu vida sexual...',
    imageUrl: '/fotos_articulo/articulo1/portada.webp',
    datePublished: '2026-03-12',
    seoTitle: 'Más allá del rendimiento: no necesitas ser una máquina',
    seoDescription:
      'La presión de rendir como una máquina apaga el deseo. Un psicólogo y sexólogo clínico explica cómo esa exigencia afecta la erección y cómo salir de la trampa.',
    ogImage: '/og/articulo1.jpg',
  },
  {
    id: 2,
    slug: 'ansiedad-y-deseo',
    title: 'Ansiedad y Deseo',
    date: '05 Mar 2026',
    category: 'Tratamiento',
    content:
      'Cuando sobrevivir bloquea el placer: Entiende cómo tu cerebro prioriza la defensa ante la amenaza y cómo desprogramar el modo de alerta...',
    imageUrl: '/fotos_articulo/articulo2/portada.webp',
    datePublished: '2026-03-05',
    seoTitle: 'Ansiedad y deseo: cuando sobrevivir bloquea el placer',
    seoDescription:
      'Cuando el cerebro está en modo alerta, el placer se bloquea. Entiende cómo la ansiedad afecta el deseo y la respuesta sexual, y cómo volver a sentirte seguro.',
    ogImage: '/og/articulo2.jpg',
  },
  {
    id: 3,
    slug: 'pornografia-y-salud-sexual',
    title: 'La Pornografía y tu Salud Sexual',
    date: '28 Feb 2026',
    category: 'Salud Sexual',
    content:
      'El peligro del acceso y del exceso: Descubre cómo el consumo sistemático impacta el sistema de recompensa del cerebro y cómo recuperarte...',
    imageUrl: '/fotos_articulo/articulo3/portada.webp',
    datePublished: '2026-02-28',
    seoTitle: 'La pornografía y tu salud sexual: acceso y exceso',
    seoDescription:
      'Cómo el consumo sistemático de pornografía impacta el sistema de recompensa del cerebro y tu vida sexual, y qué pasos ayudan a recuperar una sexualidad auténtica.',
    ogImage: '/og/articulo3.jpg',
  },
  {
    id: 4,
    slug: 'el-peso-del-silencio',
    title: 'El Peso del Silencio',
    date: '10 May 2026',
    category: 'Relaciones',
    content:
      'Por qué hablar de sexo salva las relaciones: El silencio en la pareja no es neutro, es un muro que desconecta. Aprende a romperlo...',
    imageUrl: '/fotos_articulo/articulo4/portada.webp',
    datePublished: '2026-05-10',
    seoTitle: 'El peso del silencio: por qué hablar de sexo salva la pareja',
    seoDescription:
      'El silencio sexual en la pareja no es neutro: es un muro que desconecta. Por qué hablar de sexo fortalece la relación y cómo empezar esa conversación.',
    ogImage: '/og/articulo4.jpg',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export const EMPTY_KYC: KycFormState = {
  nombre: '',
  correo: '',
  telefono: '',
}

export const FAQ_DATA: FaqCategory[] = [
  {
    id: 'general',
    title: 'Enfoque y Terapia',
    items: [
      {
        badge: 'Enfoque Clínico',
        question: '¿Cuál es tu enfoque clínico y a quién está dirigida la terapia?',
        answer:
          'Realizo psicoterapia clínica individual para adultos, con un sólido enfoque especializado en sexología clínica. En consulta abordamos disfunciones sexuales de origen psicógeno, el manejo integral de la ansiedad de desempeño, y las problemáticas del ánimo y la ansiedad, comprendiendo cómo todas ellas se relacionan directamente con tu espacio íntimo y vincular.',
        paragraphs: [
          'Realizo <strong>psicoterapia clínica individual para adultos</strong>, con un sólido enfoque especializado en <strong>sexología clínica</strong>. En consulta abordamos disfunciones sexuales de origen psicógeno, el manejo integral de la ansiedad de desempeño, y las problemáticas del ánimo y la ansiedad, comprendiendo cómo todas ellas se relacionan directamente con tu espacio íntimo y vincular.',
          'Mi mirada terapéutica es de carácter <strong>integrador y pragmático</strong>: más allá de ceñirme a una sola escuela dogmática, me sirvo de herramientas basadas en la evidencia (con raíces en lo cognitivo-conductual y otras corrientes clínicas útiles), poniendo el foco en entregarte <strong>recursos prácticos y aplicables para tu día a día</strong>, y en la desmitificación profunda de la autoexigencia.',
        ],
      },
      {
        badge: 'Primera Sesión',
        question: '¿Cómo es la primera sesión?',
        answer:
          'La sesión inicial es un espacio de entrevista y evaluación de 60 minutos (una hora). Es un encuentro conversado, abierto y sin prisas para explorar tu motivo de consulta, comprender qué te está pasando, tus inquietudes, temores y los objetivos que esperas alcanzar en el proceso terapéutico, bajo un marco estricto de confidencialidad, cuidado y privacidad absoluta.',
        paragraphs: [
          'La sesión inicial es un espacio de <strong>entrevista y evaluación de 60 minutos (una hora completa)</strong>. Lejos de ser un interrogatorio frío, es un encuentro conversado, abierto y sin prisas pensado para que te sientas cómodo desde el primer minuto.',
          'En esta primera hora exploraremos juntos tu motivo de consulta para comprender qué te está pasando, cuáles son tus inquietudes, tus temores y qué objetivos esperas alcanzar en el proceso terapéutico. Todo esto se desarrolla siempre bajo un marco estricto de <strong>confidencialidad, cuidado y privacidad absoluta</strong>.',
        ],
      },
    ],
  },
  {
    id: 'sesiones',
    title: 'Valores y Modalidad',
    items: [
      {
        badge: 'Duración y Valores',
        question: '¿Cuánto duran las sesiones y cuáles son los valores?',
        answer:
          'Todas las sesiones duran una hora (60 minutos) y se realizan en formato online. El valor de la sesión inicial de evaluación es de $30.000 pesos; las sesiones de seguimiento siguientes tienen un valor de $35.000 pesos por sesión individual; y puedes optar por un pack de 3 sesiones de seguimiento pagadas al contado por $90.000 pesos ($30.000 cada una).',
        paragraphs: [
          'Todas las sesiones tienen una duración de <strong>una hora (60 minutos)</strong> y se realizan en <strong>formato 100% online</strong>, para que puedas conectarte desde un espacio tranquilo y privado.',
        ],
        highlights: [
          {
            label: 'Sesión Inicial de Evaluación',
            value: '$30.000',
            note: 'Primera sesión · 60 min online',
          },
          {
            label: 'Sesión de Seguimiento',
            value: '$35.000',
            note: 'Tarifa por sesión individual · 60 min',
          },
          {
            label: 'Pack 3 Sesiones de Seguimiento',
            value: '$90.000',
            note: '$30.000 por sesión al contado (ahorras $15.000)',
            featured: true,
          },
        ],
      },
    ],
  },
  {
    id: 'coordinacion',
    title: 'Agenda y Contacto',
    items: [
      {
        badge: 'Coordinación Directa',
        question: '¿Cómo se coordina el agendamiento y las comunicaciones?',
        answer:
          'Tras ingresar tus datos de contacto y firmar el consentimiento informado en la plataforma, el flujo redirige directamente al correo electrónico. A través de ese canal coordinamos los horarios definitivos, mantenemos comunicación continua entre sesiones, te envío los ejercicios o recursos correspondientes, y gestionamos los recordatorios y confirmaciones.',
        paragraphs: [
          'El proceso es muy simple y directo: tras ingresar tus datos de contacto y aceptar el <strong>Consentimiento Informado</strong> aquí en la plataforma, el flujo te conectará directamente vía <strong>correo electrónico</strong>.',
          'A través del correo electrónico coordinamos tus horarios definitivos, mantenemos una <strong>comunicación continua y cercana entre sesiones</strong>, te envío los ejercicios prácticos o lecturas correspondientes a tu proceso, y gestionamos todos los recordatorios y confirmaciones de manera ordenada y privada.',
        ],
      },
    ],
  },
]

export const LEGAL_NAV_LINKS: readonly {
  id: LegalPageId
  label: string
  to: `/${LegalPageId}`
  description: string
}[] = [
  {
    id: 'terminos',
    label: 'Términos',
    to: '/terminos',
    description: 'Alcance informativo y educativo del sitio',
  },
  {
    id: 'privacidad',
    label: 'Privacidad',
    to: '/privacidad',
    description: 'Resguardo de datos y navegación segura',
  },
  {
    id: 'practica-digital',
    label: 'Práctica Digital',
    to: '/practica-digital',
    description: 'Confidencialidad remota y canales formales',
  },
]
