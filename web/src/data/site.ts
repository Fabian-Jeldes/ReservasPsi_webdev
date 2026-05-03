import type {
  ArticlePageData,
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
    title: 'El mito del rendimiento masculino',
    date: '12 Mar 2024',
    category: 'Psicoeducación',
    content:
      'Durante décadas, la cultura popular ha vendido la idea de que el hombre debe ser una máquina de placer inagotable. En este artículo exploramos cómo esta presión social es el principal enemigo de una vida sexual plena. La vulnerabilidad no es debilidad, es el camino hacia la conexión real...',
  },
  {
    id: 2,
    slug: 'ansiedad-y-deseo',
    title: 'Ansiedad y deseo: ¿Cómo se relacionan?',
    date: '05 Mar 2024',
    category: 'Tratamiento',
    content:
      "La ansiedad activa el sistema nervioso simpático, el mismo que prepara al cuerpo para huir o pelear. Es fisiológicamente imposible estar en modo 'alerta' y en modo 'placer' al mismo tiempo. Aquí te explicamos cómo desprogramar esa respuesta...",
  },
  {
    id: 3,
    slug: 'hablar-de-sexo-con-tu-pareja',
    title: 'Hablar de sexo con tu pareja',
    date: '28 Feb 2024',
    category: 'Comunicación',
    content:
      'El silencio es el muro donde mueren los deseos. Aprender a comunicar lo que nos gusta y lo que nos asusta no debería ser un tabú. Te damos herramientas prácticas para abrir el diálogo sin sentirte juzgado ni atacar al otro...',
  },
]

export const ARTICLE_PAGES: ArticlePageData[] = [
  {
    slug: 'mito-rendimiento-masculino',
    heroEyebrow: 'Psicología sexual clínica',
    heroTitle: 'Más allá del',
    heroAccent: 'rendimiento',
    heroSummary:
      'Por qué la exigencia de estar siempre listo te está apagando. Un espacio para hombres que buscan entender su sexualidad desde la humanidad, no desde la máquina.',
    introKicker: 'Consulta especializada',
    introTitle: 'Por qué no eres una máquina (y por qué entenderlo cambiará tu vida sexual)',
    introQuote:
      'Como psicólogo y sexólogo clínico, paso gran parte de mi día escuchando a hombres que, quizás como tú, sienten que cargan con un peso invisible...',
    introParagraph:
      'Hoy quiero que hablemos de esto con calma, de corazón a corazón. Quiero contarte por qué esa idea de ser un hombre máquina no solo es un mito, sino que es la trampa que muchas veces nos apaga y nos aleja de lo que realmente somos: seres humanos con derecho a fallar, a sentir y a conectar de verdad.',
    sections: [
      {
        title: 'El peso invisible de la caja y el mito de la máquina',
        paragraphs: [
          'A menudo, en la consulta, veo que los problemas de erección o de deseo no empiezan en el cuerpo, sino en una educación que nos encierra en lo que los investigadores llaman la caja de la masculinidad. Esta especie de jaula invisible nos impone reglas rígidas desde niños: no llores, no pidas ayuda, sé autosuficiente y, sobre todo, ten siempre el control.',
          'Uno de los pilares más pesados de esta trampa es el mito del hombre máquina. Se nos ha enseñado que nuestro deseo es como un botón de encendido automático: siempre listo, siempre reactivo.',
        ],
      },
      {
        title: 'El modo evaluación',
        paragraphs: [
          'Esta exigencia es peligrosa porque nos convierte en jueces de nuestro propio cuerpo. En psicología llamamos a esto espectadorismo: en lugar de estar presente y disfrutando del momento, estás fuera de ti mismo, evaluando si tu erección es lo suficientemente firme o preocupado por cuánto vas a durar.',
          'Quiero que te quedes con algo importante: el deseo no siempre es espontáneo, y eso es completamente normal. La sexología ha demostrado que muchos hombres experimentamos lo que se conoce como deseo responsivo. Esto significa que las ganas de intimidad pueden surgir después de empezar a conectar, del contacto físico o de sentirnos emocionalmente seguros.',
        ],
        clinicalNote: {
          title: 'Dato clínico',
          content:
            'La ansiedad por rendir activa el sistema nervioso simpático, el cual, irónicamente, bloquea la respuesta sexual física como mecanismo de defensa ante el estrés.',
        },
      },
    ],
    boxedReflection: {
      title: 'El silencio que nos aísla',
      content:
        'Muchos hombres sufren lo que clínicamente llamamos alexitimia masculina normativa. Como nos prohibieron expresar vulnerabilidad, nos cuesta ponerle palabras a lo que sentimos. El cuerpo termina hablando a través del síntoma sexual.',
    },
    closingMessage:
      'Abrirse, compartir lo que te pasa con tu pareja o dar el paso hacia un espacio terapéutico no es una señal de derrota. Al contrario, es un acto de profunda valentía.',
    references: [
      'Bacete, R. (2017). Nuevos hombres buenos: La masculinidad en la era del feminismo. Península.',
      'Barlow, D. H. (1986). Causes of sexual dysfunction: The role of anxiety and cognitive interference. Journal of Consulting and Clinical Psychology, 54(2), 140-148.',
      'Basson, R. (2000). The female sexual response: A different model. Journal of Sex & Marital Therapy, 26(1), 51-65.',
      'Heilman, B., Barker, G., & Harrison, A. (2017). The Man Box: A Study on Being a Young Man in the US, UK, and Mexico. Promundo-US and Unilever.',
      'Levant, R. F. (1992). Toward the reconstruction of masculinity. Journal of Family Psychology, 5(3-4), 379-402.',
      'McCabe, M. P. (2005). The role of performance anxiety in the development and maintenance of sexual dysfunction in men and women. Journal of Sex & Marital Therapy, 31(5), 379-389.',
      'Sanmartín Ortí, A., Kuric Kardelis, S., & Gómez Miguel, A. (2022). La caja de la masculinidad: construcción, actitudes e impacto en la juventud española. Centro Reina Sofía sobre Adolescencia y Juventud.',
    ],
    ctaTitle: '¿Damos el primer paso?',
    ctaSummary:
      'Recuerda: la verdadera fortaleza no está en no tener problemas, sino en tener el coraje de dejar de cargarlos a solas.',
    ctaLabel: 'Contactar para consulta',
  },
  {
    slug: 'ansiedad-y-deseo',
    heroEyebrow: 'Psicoeducación clínica',
    heroTitle: 'Ansiedad y',
    heroAccent: 'deseo',
    heroSummary:
      'Cuando la mente entra en modo alerta, el placer se apaga. Entiende qué pasa en tu sistema nervioso y cómo recuperar seguridad corporal.',
    introKicker: 'Regulación emocional',
    introTitle: 'Ansiedad y deseo: cuando sobrevivir compite con disfrutar',
    introQuote:
      'Si tu cabeza está en la amenaza, tu cuerpo no puede entregarse al placer. No es falla tuya: es neurobiología.',
    introParagraph:
      'La ansiedad no es solo un estado mental. Es una señal corporal de peligro. Cuando aparece, el organismo prioriza defenderse y no vincularse. Por eso muchas personas notan que su deseo baja justo en etapas de estrés intenso, presión laboral o conflictos de pareja.',
    sections: [
      {
        title: 'El cuerpo no distingue entre examen y encuentro íntimo',
        paragraphs: [
          'El sistema nervioso simpático se activa frente a amenazas reales o percibidas: acelera el corazón, sube la tensión muscular y mantiene tu atención en el control. Ese estado es incompatible con la respuesta erótica, que necesita seguridad, presencia y disponibilidad emocional.',
          'Dicho simple: no puedes estar al mismo tiempo en modo alerta y modo conexión profunda. Cuando te exiges rendir, tu cuerpo interpreta evaluación, no intimidad.',
        ],
        clinicalNote: {
          title: 'Dato clínico',
          content:
            'La respiración superficial y el automonitoreo constante aumentan el círculo ansiedad-rendimiento-frustración. Interrumpir ese ciclo es parte central del tratamiento.',
        },
      },
      {
        title: 'Cómo vuelve el deseo',
        paragraphs: [
          'El deseo no siempre aparece antes del contacto. Muchas veces emerge durante la cercanía, la confianza y la reducción de presión. A esto se le llama deseo responsivo: primero hay condiciones de seguridad, luego llega la motivación erótica.',
          'Por eso trabajamos en terapia con regulación fisiológica, lenguaje interno menos castigador y acuerdos concretos con la pareja para sacar el foco del rendimiento y devolverlo a la experiencia compartida.',
        ],
      },
    ],
    boxedReflection: {
      title: 'Una clave práctica',
      content:
        'No pelees contra la ansiedad como si fuera enemiga: léela como una señal. Cuando aprendes a regularla, dejas de sentirte roto y vuelves a habitar tu cuerpo con menos miedo.',
    },
    closingMessage:
      'Recuperar deseo no significa forzarte, sino construir un contexto donde tu cuerpo ya no tenga que defenderse todo el tiempo.',
    references: [
      'Bancroft, J. (2009). Human Sexuality and Its Problems. Churchill Livingstone.',
      'Basson, R. (2000). The female sexual response: A different model. Journal of Sex & Marital Therapy, 26(1), 51-65.',
      'Levine, S. B. (2003). The nature of sexual desire: A clinician perspective. Archives of Sexual Behavior, 32(3), 279-285.',
      'McCabe, M. P. (2005). The role of performance anxiety in sexual dysfunction. Journal of Sex & Marital Therapy, 31(5), 379-389.',
      'Nobre, P., & Pinto-Gouveia, J. (2006). Dysfunctional sexual beliefs and cognitive schemas. Journal of Sex Research, 43(1), 68-75.',
    ],
    ctaTitle: '¿Te pasa seguido?',
    ctaSummary:
      'Podemos trabajar estrategias claras para salir del modo alerta y recuperar conexión contigo y con tu pareja.',
    ctaLabel: 'Agendar acompañamiento',
  },
  {
    slug: 'hablar-de-sexo-con-tu-pareja',
    heroEyebrow: 'Comunicación íntima',
    heroTitle: 'Hablar de sexo con',
    heroAccent: 'tu pareja',
    heroSummary:
      'El silencio protege del conflicto inmediato, pero a largo plazo desconecta. Poner palabras puede ser incómodo, pero también profundamente reparador.',
    introKicker: 'Vínculo y confianza',
    introTitle: 'Cómo conversar de intimidad sin herir ni cerrarte',
    introQuote:
      'No necesitas hablar perfecto: necesitas hablar honesto. La intimidad crece cuando la conversación deja de ser una pelea y se vuelve un puente.',
    introParagraph:
      'Muchas parejas se quieren, pero no saben cómo conversar sobre deseo, límites o frustraciones. Entonces aparecen suposiciones, evitación y distancia. Lo importante no es ganar una discusión, sino crear un espacio seguro para escucharse sin humillación ni defensa automática.',
    sections: [
      {
        title: 'Por qué cuesta tanto decir lo que siento',
        paragraphs: [
          'A muchos hombres nos educaron para resolver, no para expresar. Cuando algo duele en la sexualidad, reaccionamos con silencio, ironía o retirada. El problema no desaparece: se cronifica y se vuelve tema tabú.',
          'Hablar de sexo no debería empezar en la cama ni en medio de un conflicto. Conviene elegir momentos neutros, usar frases en primera persona y explicar necesidades concretas en vez de acusaciones globales.',
        ],
        clinicalNote: {
          title: 'Herramienta breve',
          content:
            'Prueba esta estructura: “Me está pasando..., me gustaría..., ¿podemos intentar...?”. Es simple, pero reduce culpa y abre cooperación.',
        },
      },
      {
        title: 'Conversar para reconectar, no para rendir cuentas',
        paragraphs: [
          'Cuando una conversación íntima se vuelve tribunal, ambos se cierran. En cambio, cuando se valida la experiencia emocional del otro, baja la defensividad y aumenta la posibilidad de acuerdos.',
          'La meta no es que dos personas sientan exactamente lo mismo, sino que puedan construir un lenguaje común para cuidarse. Ese lenguaje también es erotismo: pertenencia, respeto y presencia.',
        ],
      },
    ],
    boxedReflection: {
      title: 'Señal de avance',
      content:
        'Si después de conversar no se resuelve todo, pero ambos se sienten más comprendidos, ya avanzaron. La intimidad se construye por continuidad, no por perfección.',
    },
    closingMessage:
      'Hablar de sexo con tu pareja no es admitir fracaso. Es elegir madurez emocional y responsabilidad afectiva.',
    references: [
      'Gottman, J., & Silver, N. (2015). The Seven Principles for Making Marriage Work. Harmony.',
      'Johnson, S. (2019). Attachment Theory in Practice. Guilford Press.',
      'Mark, K. P., & Jozkowski, K. N. (2013). The impact of sexual communication on sexual satisfaction. Journal of Sex Research, 50(5), 447-455.',
      'Schnarch, D. (2009). Intimacy & Desire. Beaufort Books.',
      'Wheeler, M. J., & Kerpelman, J. L. (2018). Couple communication and sexual well-being. Couple and Family Psychology, 7(3), 149-165.',
    ],
    ctaTitle: '¿Les cuesta hablar de esto?',
    ctaSummary:
      'En terapia puedes aprender una forma de conversar que disminuya la culpa y aumente la conexión real.',
    ctaLabel: 'Quiero orientación',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getArticlePageBySlug(slug: string): ArticlePageData | undefined {
  return ARTICLE_PAGES.find((article) => article.slug === slug)
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
