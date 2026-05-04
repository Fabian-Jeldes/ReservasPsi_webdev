import type {

  BlogPost,
  CalendarDay,
  KycFormState,
  Review,
  Specialization,
} from '../types/site'

export const PROFILE_IMAGE_URL =
  'https://s3.sa-east-1.amazonaws.com/doctoralia.cl/doctor/9673f9/9673f974edf112f24dc6a4a14a1e5c18_large.jpg'

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
    title: 'Disfunción Eréctil Psicógena',
    subtitle: 'Reconceptualizando la erección',
    description:
      "No estás enfermo ni tu cuerpo está 'roto'. Entenderemos que la pérdida de erección es una respuesta natural ante la presión y la ansiedad. Aprenderemos a soltar la exigencia.",
    moreContent:
      'En sesión trabajamos la ansiedad anticipatoria, el foco en el rendimiento y las creencias sobre la masculinidad. El objetivo no es “forzar” una respuesta corporal, sino reducir la amenaza percibida para que el cuerpo recupere espacio de seguridad.',
  },
  {
    id: 2,
    title: 'Eyaculación Precoz',
    subtitle: "Soltando el 'deber ser'",
    description:
      'El problema no eres tú, sino el peso de creer que debes rendir bajo un estándar irreal. Exploraremos tus mecanismos para quitarle a la intimidad el carácter de obligación.',
    moreContent:
      'Abordamos el ciclo ansiedad–urgencia–autocrítica, ejercicios de atención plena y comunicación con la pareja cuando aplica. Se prioriza una mirada clínica sin culpa y con pasos graduales.',
  },
  {
    id: 3,
    title: 'Eyaculación Retardada',
    subtitle: 'Sexualidad libre de presiones',
    description:
      "Abordamos la trampa del automonitoreo y la angustia por 'tener que llegar'. Trabajaremos en desarmar esa exigencia mental para reconectar con el placer genuino.",
    moreContent:
      'Exploramos el automonitoreo, el uso de estímulos, la ansiedad de desempeño y los significados personales del orgasmo. La clave suele ser bajar el listón cognitivo, no “esforzarse más”.',
  },
  {
    id: 4,
    title: 'Cambios en el Deseo Sexual',
    subtitle: 'Normalizando tu experiencia',
    description:
      "Desmitificamos la idea de que el hombre debe 'estar siempre listo'. Exploramos presiones y estresores que apagan tu interés para reincorporar la sexualidad de forma amable.",
    moreContent:
      'El deseo fluctúa por estrés, sueño, salud mental y contexto relacional. En terapia diferenciamos causas médicas (derivación si corresponde) de factores psicológicos y revisamos narrativas que bloquean el interés.',
  },
  {
    id: 5,
    title: 'Ansiedad de Desempeño',
    subtitle: 'Rompiendo la trampa mental',
    description:
      "Tratarte como 'el problema' alimenta la ansiedad. Entenderemos cómo el temor a fallar bloquea tu cuerpo. Aceptar nuestra falibilidad es el primer paso al placer.",
    moreContent:
      'Usamos técnicas de exposición gradual, reestructuración cognitiva y mindfulness aplicado a la intimidad. Buscamos que la sexualidad deje de sentirse como una evaluación continua.',
  },
  {
    id: 6,
    title: 'Comunicación Sexual',
    subtitle: 'Conexión desde nuestra humanidad',
    description:
      'Transformamos la visión del sexo: de prueba de rendimiento a espacio de encuentro. Fomentamos un lugar seguro para hablar sin culpas ni juicios.',
    moreContent:
      'Practicamos cómo expresar límites, deseos y miedos sin ataques ni silencios. Cuando hay pareja, se puede incluir enfoque en acuerdos, expectativas y escucha activa.',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'mito-rendimiento-masculino',
    title: 'Más allá del rendimiento',
    date: '12 Mar 2026',
    category: 'Psicoeducación',
    content:
      'Durante décadas, la cultura popular ha vendido la idea de que el hombre debe ser una máquina de placer inagotable. En este artículo exploramos cómo esta presión social es el principal enemigo de una vida sexual plena. La vulnerabilidad no es debilidad, es el camino hacia la conexión real...',
    imageUrl: '/fotos_articulo/cover1.png',
  },
  {
    id: 2,
    slug: 'ansiedad-y-deseo',
    title: 'Ansiedad y deseo',
    date: '05 Mar 2026',
    category: 'Tratamiento',
    content:
      "La ansiedad activa el sistema nervioso simpático, el mismo que prepara al cuerpo para huir o pelear. Es fisiológicamente imposible estar en modo 'alerta' y en modo 'placer' al mismo tiempo. Aquí te explicamos cómo desprogramar esa respuesta...",
    imageUrl: '/fotos_articulo/cover2.png',
  },
  {
    id: 3,
    slug: 'hablar-de-sexo-con-tu-pareja',
    title: 'La Pornografía y tu Salud Sexual',
    date: '28 Feb 2026',
    category: 'Comunicación',
    content:
      'El silencio es el muro donde mueren los deseos. Aprender a comunicar lo que nos gusta y lo que nos asusta no debería ser un tabú. Te damos herramientas prácticas para abrir el diálogo sin sentirte juzgado ni atacar al otro...',
    imageUrl: '/fotos_articulo/cover3.png',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}


export function generateCalendarDays(): CalendarDay[] {
  const days: CalendarDay[] = []
  for (let i = 1; i <= 31; i++) {
    days.push({
      day: i,
      available: Math.random() > 0.4,
      status: Math.random() > 0.4 ? 'Disponible' : 'Ocupado',
    })
  }
  return days
}

export const EMPTY_KYC: KycFormState = {
  nombre: '',
  rut: '',
  correo: '',
  telefono: '',
  direccion: '',
  ciudad: '',
  region: '',
}
