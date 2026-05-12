import type {
  BlogPost,
  KycFormState,
  Review,
  Specialization,
  ArticlePageData,
} from '../types/site'

export const PROFILE_IMAGE_URL = '/foto-perfil.jpg'

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
      'No estás enfermo ni tu cuerpo está "roto". A través de la terapia, entenderemos que la pérdida de erección es una respuesta humana natural ante la presión y la ansiedad por rendir.',
    moreContent:
      'Aprenderemos a soltar la exigencia y el miedo a fallar, permitiéndote disfrutar sin que un contratiempo se sienta como una fatalidad, sino solo como un momento pasajero.',
    detailedContent: [
      "Es muy común que cuando un hombre pierde la erección, o le empieza a pasar de forma recurrente, sienta que algo se \"rompió\" dentro de él. Nos han hecho creer que el cuerpo masculino tiene que estar siempre listo, como si fuera un interruptor que simplemente se enciende a voluntad. Pero la realidad humana es mucho más compleja y, a la vez, mucho más lógica.",
      "Para que una erección ocurra y se mantenga, tu cuerpo necesita sentirse en un <strong class=\"text-white\">espacio de confianza, disfrute y relajación</strong>. Sin embargo, ¿qué pasa cuando entras a la intimidad pensando \"ojalá no me falle hoy\", \"tengo que cumplir\" o \"¿y si me vuelve a pasar?\"? En ese momento, tu cerebro detecta una amenaza. Se encienden las alarmas, el <strong class=\"text-white\">miedo al fracaso toma el control</strong> y tu sistema nervioso reacciona preparándote para \"huir o pelear\" ante ese peligro.",
      "En ese estado de alerta máxima, la <strong class=\"text-white\">excitación es biológicamente imposible</strong>. Tu cuerpo, literalmente, desconecta la respuesta sexual porque toda su energía está puesta en defenderte de esa angustia mental.",
      "Por eso es tan importante entender que <strong class=\"text-white\">no estás enfermo ni defectuoso</strong>. ¡Al contrario! Tu cuerpo está funcionando a la perfección, respondiendo de manera completamente congruente a las señales de estrés intenso que tu mente le está enviando. Estás reaccionando a una <strong class=\"text-white\">falsa alarma creada por la autoexigencia</strong>.",
      "En nuestro trabajo en terapia no buscaremos \"soluciones mágicas\" para obligar a tu cuerpo a rendir, porque <strong class=\"text-white\">intentar forzar una erección es justamente lo que más la aleja</strong>. Lo que haremos será desarmar esa presión asfixiante. Te ayudaré a entender cómo operan tus propios bloqueos, a aceptar que somos falibles y a perderle el miedo a que la respuesta física fluctúe. Cuando dejamos de tratar a la intimidad como un examen que hay que aprobar, la ansiedad baja, el bloqueo simplemente pasa y tu cuerpo <strong class=\"text-white\">vuelve a conectarse con el placer de forma natural</strong>.",
      "<strong class=\"text-white font-bold\">\"La erección no es un interruptor que se enciende a voluntad, sino una respuesta natural que florece cuando apagamos el miedo a fallar.\"</strong>"
    ]
  },
  {
    id: 2,
    title: 'Control Eyaculatorio (Precoz y Retardado)',
    subtitle: 'Tu sexualidad, a tu propio ritmo',
    description:
      'Ya sea que sientas presión por "durar más" o angustia por "tener que llegar", el problema no eres tú, sino la exigencia de rendir bajo un estándar irreal.',
    moreContent:
      'Desarmaremos la trampa del automonitoreo y la obligación, explorando tus propios mecanismos para que puedas reconectar con el placer genuino y dejar que tu respuesta sexual fluya naturalmente a tu propio ritmo.',
    detailedContent: [
      "A los hombres se les ha enseñado a ver su cuerpo como un reloj que debe estar perfectamente sincronizado. Si terminas muy rápido, sientes que fallaste. Si te demoras demasiado o simplemente no logras llegar, también sientes que fallaste. Esta exigencia constante de tener que \"durar lo exacto\" o \"llegar a la meta\" convierte un espacio que debería ser de conexión y disfrute en un <strong class=\"text-white\">agotador examen de rendimiento</strong>.",
      "Aunque parezcan problemas opuestos, llegar antes de tiempo o no poder llegar por más que te esfuerces comparten exactamente la misma raíz: <strong class=\"text-white\">la ansiedad, la presión por el \"deber ser\" y el automonitoreo constante</strong>.",
      "Cuando entras a la intimidad hipervigilante, pensando cosas como \"tengo que aguantar\", \"ojalá no me pase de nuevo\" o \"¿por qué no estoy terminando?\", tu mente deja de estar en el momento presente y <strong class=\"text-white\">se convierte en un juez</strong>. Este exceso de control mental y angustia hace que tu sistema nervioso entre en estado de alerta.",
      "En algunos hombres, esta alarma producida por la ansiedad acelera drásticamente el proceso... En otros, produce el efecto de <strong class=\"text-white\">\"espectador\"</strong>: la sobre-observación te desconecta tanto de las sensaciones físicas que tu cuerpo se bloquea, impidiendo alcanzar el clímax a pesar del esfuerzo.",
      "En ninguno de los dos casos tu cuerpo está dañado o enfermo. Tu cuerpo está sano y está respondiendo de manera completamente lógica a la <strong class=\"text-white\">presión de una obligación irreal</strong>.",
      "En nuestro espacio de terapia no vamos a buscar \"trucos\" mecánicos para que te distraigas o intentes forzar a tu cuerpo a comportarse como una máquina. Eso solo aumenta la desconexión. Lo que haremos será <strong class=\"text-white\">desarmar esa autoexigencia asfixiante</strong>. Te acompañaré a entender cómo funcionan tus propios mecanismos de alerta, a perdonarte la exigencia de ser infalible y a dejar de evaluar tu desempeño. Cuando le quitamos a la intimidad el carácter de obligación, puedes <strong class=\"text-white\">volver a habitar tu cuerpo</strong>, reconectar con el placer genuino y dejar que tu respuesta sexual, finalmente, fluya a su propio ritmo.",
      "<strong class=\"text-white font-bold\">\"Tu cuerpo no es un cronómetro; el placer solo encuentra su verdadero ritmo cuando dejas de evaluar tu rendimiento.\"</strong>"
    ]
  },
  {
    id: 3,
    title: 'Cambios en el Deseo Sexual',
    subtitle: 'Normalizando tu experiencia',
    description:
      'Desmitificamos la idea tóxica de que el hombre debe "estar siempre listo" o "siempre con ganas". Exploramos sin juicios las presiones, rutinas y estresores que apagan tu interés.',
    moreContent:
      'Te acompaño a entender que estas fluctuaciones son reacciones normales y no una enfermedad, para reincorporar la sexualidad a tu vida de forma más amable y compasiva.',
    detailedContent: [
      "Existe un mito cultural muy pesado y silencioso: la idea tóxica de que el hombre debe estar \"siempre listo\" y con ganas, como si el deseo masculino fuera un motor inagotable que no se apaga jamás. Por eso, cuando notas que tu interés por la intimidad disminuye o simplemente desaparece, es muy fácil caer en la culpa, sentir que estás perdiendo tu masculinidad o pensar que algo dentro de ti se \"rompió\".",
      "Pero la realidad humana es muy distinta. El deseo sexual no es un interruptor automático, sino un <strong class=\"text-white\">sistema altamente sensible a tu entorno, a tus emociones y a tus niveles de energía</strong>. Imagina que tu respuesta sexual tiene un acelerador y un freno. Las presiones del trabajo, el cansancio crónico o las tensiones no resueltas actúan como un <strong class=\"text-white\">freno de mano puesto a fondo</strong>.",
      "Fisiológicamente, cuando estás sobrecargado por la rutina o las preocupaciones, tu cerebro interpreta que estás en <strong class=\"text-white\">modo de \"supervivencia\"</strong>. Y biológicamente, cuando el sistema nervioso está intentando sobrevivir al estrés diario, <strong class=\"text-white\">la reproducción y el placer pasan a ser la última prioridad</strong>. Tu cuerpo, literalmente, apaga el deseo para ahorrar energía.",
      "Por lo tanto, una baja en tu libido no significa que estés enfermo, que seas defectuoso o que tu relación esté arruinada. Al contrario, tu cuerpo está teniendo una <strong class=\"text-white\">reacción completamente normal, lógica y sana</strong> frente a un nivel de agotamiento o presión que tu mente ya no puede procesar.",
      "En nuestra terapia no vamos a juzgarte, ni mucho menos a forzarte a \"tener ganas\"... Obligarse a desear solo genera más riesgo y frustración. Lo que haremos será <strong class=\"text-white\">quitarle a la intimidad el peso de ser \"otra obligación más\"</strong> en tu lista de tareas, para que puedas reencontrarte con tu sexualidad de una forma mucho más <strong class=\"text-white\">amable, compasiva y humana</strong>.",
      "<strong class=\"text-white font-bold\">\"No existe el deber de 'estar siempre listo'; tu deseo no se apagó, solo está reaccionando al peso y al estrés de tu rutina.\"</strong>"
    ]
  },
  {
    id: 4,
    title: 'Ansiedad de Desempeño y Miedo a Fallar',
    subtitle: 'Rompiendo la trampa mental',
    description:
      'Tratarte a ti mismo como "el problema" es justamente lo que alimenta la ansiedad. Entenderemos cómo el temor a que "vuelva a pasar" bloquea tu cuerpo y mente.',
    moreContent:
      'Aprenderemos a aceptar nuestra falibilidad como algo absolutamente humano, soltando las consecuencias catastróficas imaginarias para que el bloqueo simplemente pase y vuelvas al placer.',
    detailedContent: [
      "La mente tiene una capacidad asombrosa para arruinar un buen momento, especialmente cuando asume el rol de un juez crítico. Cuando un encuentro íntimo deja de ser un espacio de disfrute y se transforma en un <strong class=\"text-white\">examen que sientes que \"debes aprobar\"</strong>, el miedo toma el control. Empiezan los ecos anticipatorios: \"¿Y si me vuelve a pasar?\", \"hoy no puedo fallar\", \"tengo que demostrar que todo está bien\".",
      "Esa es exactamente la trampa mental. Tratarte a ti mismo como \"el problema\" o convencerte de que estás dañado es el <strong class=\"text-white\">combustible principal de la ansiedad</strong>. Al entrar a la intimidad con una lupa, vigilando cada una de tus reacciones y evaluando tu rendimiento en tiempo real, tu cerebro deja de registrar el placer y comienza a registrar una amenaza.",
      "Ante una amenaza, tu sistema nervioso reacciona. Tu cuerpo, en un intento por protegerte de esa enorme angustia psicológica, entra en estado de alerta y <strong class=\"text-white\">simplemente bloquea la respuesta sexual</strong>. No es que tu cuerpo haya olvidado cómo funcionar; es que está literalmente <strong class=\"text-white\">paralizado por el miedo a equivocarse</strong>.",
      "Es vital que entiendas que este bloqueo no te hace menos hombre ni significa que estés enfermo. Eres una persona sana atrapada en un <strong class=\"text-white\">ciclo de autoexigencia asfixiante</strong>. Tu cuerpo está reaccionando perfectamente al terror que le provoca imaginar las consecuencias catastróficas de \"no rendir\" bajo ese estándar irreal.",
      "En nuestro espacio de terapia, el objetivo no será darte herramientas para que te conviertas en una máquina infalible, porque eso es una fantasía inhumana. Lo que haremos será desarmar ese ciclo. Te acompañaré a mirar de frente ese temor al fracaso y a quitarle su poder destructivo. Aprenderemos que <strong class=\"text-white\">aceptar nuestra propia falibilidad no es una derrota</strong>, sino el único camino real para liberar la presión. Cuando dejamos de castigarnos por la posibilidad de fallar, la ansiedad se queda sin argumentos y tú puedes volver a entregarte al placer sin el peso del mundo sobre tus hombros. <strong class=\"text-white\">Eres falible y eso está bien</strong>. ¡Todos lo somos, bienvenido al club!",
      "<strong class=\"text-white font-bold\">\"El mayor obstáculo para el placer no es el cuerpo, sino la exigencia mental que le imponemos.\"</strong>"
    ]
  },
  {
    id: 5,
    title: 'Comunicación Sexual',
    subtitle: 'Conexión desde nuestra humanidad',
    description:
      'Transformamos la visión del sexo: deja de ser una prueba de rendimiento para volver a ser un espacio de encuentro y exploración.',
    moreContent:
      'Fomentamos un lugar seguro para hablar de lo que te pasa sin culpas. Entender y compartir que somos sanos pero falibles alivia la presión y fortalece la conexión real; al compartirlo, el peso se hace más ligero.',
    detailedContent: [
      "Uno de los pesos más grandes que cargan los hombres cuando enfrentan una dificultad sexual es el silencio. Culturalmente nos han enseñado que hablar de nuestras inseguridades es un signo de debilidad. Por eso, la reacción automática suele ser aislarse y <strong class=\"text-white\">levantar un muro invisible de vergüenza</strong> y distancia con la pareja.",
      "El problema de este silencio es que transforma la sexualidad en un escenario solitario. Dejas de estar verdaderamente con la otra persona para quedarte encerrado en tu propia cabeza. El sexo deja de ser un espacio para compartir y se convierte en una <strong class=\"text-white\">fría prueba de rendimiento donde toda la responsabilidad recae sobre tus hombros</strong>.",
      "En nuestra terapia, el objetivo es construir un lugar seguro donde sea posible hablar sin tener que sostener esa <strong class=\"text-white\">pesada armadura de \"hombre infalible\"</strong>. Aprenderemos que mostrarte vulnerable y expresar lo que sientes no te hace menos hombre, sino simplemente humano.",
      "Cuando logramos verbalizar nuestros miedos, ocurre algo tremendamente liberador: <strong class=\"text-white\">la presión se desinfla casi de inmediato</strong>. Al soltar el secreto y dejar de intentar resolverlo todo en soledad, el encuentro íntimo vuelve a ser lo que siempre debió ser: un <strong class=\"text-white\">espacio de exploración, empatía y conexión real</strong>, donde el peso, al compartirse, se hace muchísimo más ligero.",
      "<strong class=\"text-white font-bold\">\"El silencio alimenta la ansiedad; compartir nuestra vulnerabilidad es lo que verdaderamente fortalece la conexión.\"</strong>"
    ]
  },
  {
    id: 6,
    title: 'Impacto de la Pornografía',
    subtitle: 'Una adicción silenciosa',
    description:
      'No hay nada malo en ti si la intimidad compartida ya no se siente como en la pantalla.',
    moreContent:
      'Especialmente cuando el consumo comienza a temprana edad, este hábito puede mutar tus expectativas y desconectarte de tu deseo real, operando como un factor de riesgo silencioso para problemas de erección y ansiedad. Sin juicios morales, exploraremos cómo desarmar esta dependencia para que puedas "reiniciar" tus sentidos y reconectar con una sexualidad auténtica, humana y libre de ficción.',
    detailedContent: [
      "Es muy común que, en el silencio y la privacidad, muchos hombres noten que el sexo en la vida real ya no les genera la misma respuesta física ni el mismo entusiasmo que lo que ven en una pantalla. Cuando tu cuerpo no responde frente a una pareja, pero sí frente al teléfono, <strong class=\"text-white\">la confusión y la culpa suelen ser abrumadoras</strong>.",
      "Para entender esto sin juzgarte, debemos mirar cómo funciona el cerebro frente a la <strong class=\"text-white\">hiperestimulación</strong>. Cuando la exposición a la pornografía comienza a temprana edad, esta actúa como una \"escuela\" distorsionada que nos enseña a asociar la excitación con una novedad infinita y un rendimiento irreal, <strong class=\"text-white\">sin la vulnerabilidad emocional que exige el contacto humano</strong>.",
      "Con el tiempo, este consumo sostenido provoca una <strong class=\"text-white\">profunda desconexión con el deseo real</strong>. Al enfrentarte a la intimidad humana —que es naturalmente más pausada e imperfecta— tu sistema nervioso puede sentirse desorientado, porque no encuentra ese nivel extremo de estímulo al que está acostumbrado.",
      "Es justamente por esta descalibración que suelen aparecer los bloqueos: pérdidas de erección inexplicables, dificultad para llegar al clímax, o una <strong class=\"text-white\">ansiedad asfixiante por sentir que tienes que \"actuar\"</strong> imitando lo que has visto en la pantalla. No es que tu cuerpo esté dañado; es simplemente que se ha <strong class=\"text-white\">acostumbrado a un estímulo artificial</strong>.",
      "En nuestro espacio de terapia no hay lugar para los sermones ni los juicios morales. Lo que haremos será <strong class=\"text-white\">\"reiniciar\" tu sistema nervioso</strong>, ayudándote a soltar la presión de la ficción para que puedas reconectar con el placer genuino y descubrir que la intimidad compartida, con toda su humanidad, es profundamente más satisfactoria.",
      "<strong class=\"text-white font-bold\">\"La sexualidad real no compite con una pantalla; desaprender esos estándares irreales es clave para 'reiniciar' tu deseo.\"</strong>"
    ]
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
      'No necesitas ser una máquina: Por qué la exigencia de estar siempre listo te está apagando y cómo entenderlo cambiará tu vida sexual...',
    imageUrl: '/fotos_articulo/articulo1/portada.png',
  },
  {
    id: 2,
    slug: 'ansiedad-y-deseo',
    title: 'Ansiedad y Deseo',
    date: '05 Mar 2026',
    category: 'Tratamiento',
    content:
      'Cuando sobrevivir bloquea el placer: Entiende cómo tu cerebro prioriza la defensa ante la amenaza y cómo desprogramar el modo de alerta...',
    imageUrl: '/fotos_articulo/articulo2/portada.png',
  },
  {
    id: 3,
    slug: 'pornografia-y-salud-sexual',
    title: 'La Pornografía y tu Salud Sexual',
    date: '28 Feb 2026',
    category: 'Salud Sexual',
    content:
      'El peligro del acceso y del exceso: Descubre cómo el consumo sistemático impacta el sistema de recompensa del cerebro y cómo recuperarte...',
    imageUrl: '/fotos_articulo/articulo3/portada.png',
  },
  {
    id: 4,
    slug: 'el-peso-del-silencio',
    title: 'El Peso del Silencio',
    date: '10 May 2026',
    category: 'Relaciones',
    content:
      'Por qué hablar de sexo salva las relaciones: El silencio en la pareja no es neutro, es un muro que desconecta. Aprende a romperlo...',
    imageUrl: '/fotos_articulo/articulo4/portada.png',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export const ARTICLE_PAGES_DATA: ArticlePageData[] = [
  {
    slug: 'mito-rendimiento-masculino',
    heroEyebrow: 'Consulta especializada',
    heroTitle: 'Más allá del rendimiento ',
    heroAccent: 'No necesitas ser una máquina',
    heroSummary: 'Y por qué entenderlo cambiará tu vida sexual',
    heroImage: '/fotos_articulo/articulo1/portada.png',
    introKicker: 'Rompiendo mitos',
    introTitle: '',
    introQuote: '',
    introParagraph: 'Como psicólogo y sexólogo clínico, paso gran parte de mi día escuchando a hombres que, quizás como tú, sienten que cargan con un peso invisible. Es una presión constante que nos susurra al oído que debemos ser infalibles, que nuestras emociones son una "falla en el sistema" y que, en la intimidad, debemos funcionar con la precisión de un cronómetro.<br><br>Hoy quiero que hablemos de esto con calma. Quiero contarte por qué esa idea de ser un <strong class="text-white">"Hombre Máquina"</strong> no solo es un mandato tóxico de alta presión, sino que es la trampa que muchas veces nos apaga y nos aleja de lo que realmente somos: seres humanos con derecho a fallar, a sentir y a conectar de verdad.',
    sections: [
      {
        title: 'El peso invisible de la "Caja" y de la "Máquina"',
        paragraphs: [
          'A menudo, en la consulta, veo que los problemas de erección o de deseo no empiezan en el cuerpo, sino en una educación que nos encierra en lo que los investigadores llaman la <strong class="text-white">"Caja de la Masculinidad"</strong>. Bajo la presión de tener que ser <strong class="text-white">"máquinas"</strong>, aprendemos a entender nuestra sexualidad como un <strong class="text-white">proceso puramente mecánico</strong>. Se nos enseña que el cuerpo del hombre debe operar como un dispositivo de <strong class="text-white">alto rendimiento</strong>: siempre disponible, siempre reactivo y, sobre todo, predecible. En esta lógica, nuestras emociones, el cansancio o las dudas no son parte de nuestra humanidad, sino que son vistas como una "falla en el sistema" que debe ser reparada para que la máquina siga produciendo.',
          'Esta jaula invisible impone reglas rígidas desde la infancia:'
        ],
        lists: [
          {
            items: [
              '<strong class="text-white">No llores:</strong> La vulnerabilidad es vista como debilidad.',
              '<strong class="text-white">Sé autosuficiente:</strong> No pidas ayuda, resuelve solo.',
              '<strong class="text-white">Mantén el control:</strong> Debes ser el pilar inquebrantable en todo momento.'
            ]
          }
        ]
      },
      {
        paragraphs: [
          'Quienes intentan con más fuerza <strong class="text-white">\'encajar\'</strong> en estas normas terminan sufriendo un <strong class="text-white">agotamiento profundo</strong> y viven en un <strong class="text-white">estado de alerta constante</strong> que desgasta su salud mental y sexual. Bajo esta lógica, aprendemos a entender el sexo no como un encuentro de placer, sino como un <strong class="text-white">\'rendimiento atlético\'</strong> donde hay que cumplir metas, donde hay que rendir. Pero ser hombre no es seguir un manual de reglas rígidas; es la <strong class="text-white">oportunidad de construirte a ti mismo</strong> como un ser humano que <strong class="text-white">siente, experimenta y disfruta a su propio ritmo</strong>, invitando al resto a entrar a un <strong class="text-white">lugar íntimo que te pertenece</strong> y que estás queriendo compartir.',
          'Al final, lo que te da <strong class="text-white">bienestar</strong> y te hace <strong class="text-white">feliz</strong> a ti es único; por eso, el camino es dejar de mirar hacia afuera para empezar a <strong class="text-white">escuchar lo que realmente pasa en tu interior</strong>. Cuando ignoramos ese interior y nos enfocamos solo en la exigencia externa, entramos inevitablemente en un estado de juicio constante.'
        ],
        images: [
          { url: '/fotos_articulo/articulo1/imagen1.png' }
        ]
      },
      {
        title: 'El modo evaluación: Cuando la mente apaga al cuerpo',
        paragraphs: [
          'Esta exigencia es peligrosa porque nos convierte en jueces de nuestro propio cuerpo. En psicología llamamos a esto <strong class="text-white">"espectadorismo"</strong>: en lugar de estar presente disfrutando del momento, estás fuera de ti mismo, evaluando si tu erección es lo suficientemente firme o preocupado por cuánto vas a durar.',
          'Irónicamente, esa misma ansiedad por <strong class="text-white">"rendir"</strong> es interpretada por tu cerebro como una <strong class="text-white">amenaza</strong>. Ante el miedo, se activa tu sistema nervioso simpático (el modo de lucha o huida) y, como mecanismo de defensa, termina bloqueando la respuesta sexual física. <strong class="text-white">Tu cuerpo no está fallando, simplemente está reaccionando a un estrés abrumador.</strong>'
        ]
      },
      {
        title: 'No eres un botón de encendido',
        paragraphs: [
          'Quiero que te quedes con algo muy importante: <strong class="text-white">el deseo no siempre es espontáneo, y eso es completamente normal.</strong> La sexología ha demostrado que muchos hombres experimentamos lo que se conoce como <strong class="text-white">"deseo responsivo"</strong>.',
          'Esto significa que las ganas de intimidad no siempre llegan <strong class="text-white">"de la nada"</strong>. A menudo surgen tras empezar a <strong class="text-white">conectar emocionalmente</strong>, a través del contacto físico suave y sin presiones, o al sentirnos en un ambiente de <strong class="text-white">seguridad y confianza</strong>. Cuando te obligas a sentir un deseo fulminante y automático, y no sucede, aparece la frustración. Piensas que estás "roto", cuando en realidad solo eres un humano reaccionando al cansancio, a las preocupaciones del trabajo o a un momento en el que, simplemente, necesitas otro ritmo.'
        ]
      },
      {
        title: 'El silencio que nos aísla',
        paragraphs: [
          'Quizás lo más doloroso de esta dinámica es el <strong class="text-white">silencio</strong>. Muchos hombres transitan lo que clínicamente llamamos <strong class="text-white">"Alexitimia Masculina Normativa"</strong>. Este término describe una dificultad aprendida para identificar y expresar emociones, fruto de una <strong class="text-white">socialización masculina prototípica</strong> que nos enseña, desde niños, que ser hombre es sinónimo de ser inquebrantable.',
          'Si bien cada historia es única y no buscamos sobregeneralizar, es innegable que esta <strong class="text-white">"normalidad" estereotipada</strong> impone estándares donde expresar vulnerabilidad es visto como una falla. Al prohibirnos el lenguaje de las emociones, nos cuesta horre ponerle palabras a lo que sentimos, incluso a nosotros mismos. Cuando no tenemos permiso para nombrar el miedo o la carga, <strong class="text-white">el cuerpo termina hablando a través del síntoma sexual</strong>. El síntoma aparece como una <strong class="text-white">comunicación inconsciente</strong> de lo que no nos permitimos verbalizar. Vivir esto desde la <strong class="text-white">soledad y la vergüenza</strong> solo alimenta el fuego de la ansiedad y nos desconecta de nuestra propia experiencia.',
          'Entender qué nos pasa es el primer paso, pero el segundo es aprender a <strong class="text-white">romper ese silencio</strong> para que la relación vuelva a ser un refugio de seguridad y no un espacio de evaluación constante.',
          '<strong class="text-white">Lectura recomendada:</strong> Si sientes que el silencio está ganando terreno en tu relación y quieres herramientas para cambiar esta dinámica, te invito a leer mi artículo: <strong class="text-white font-bold">[El peso del silencio: Por qué hablar de sexo salva las relaciones]</strong>'
        ],
        images: [
          { url: '/fotos_articulo/articulo1/imagen2.png' }
        ]
      }
    ],
    boxedReflection: {
      title: 'Un espacio para volver a ser humanos',
      content: 'No eres una máquina de producción sexual; eres un hombre con una historia, con estrés y con miedos. Los desafíos que puedas estar experimentando no son un signo de <strong class="text-white">"falta de hombría"</strong>, sino un grito de tu sistema pidiendo permiso para ser <strong class="text-white">simplemente humano</strong>. <br> <br> Abrirse, compartir lo que te pasa o dar el paso hacia un espacio terapéutico es un <strong class="text-white">acto de profunda valentía</strong>. Es el primer paso para redescubrir una sexualidad basada en el disfrute y el encuentro, y no en la angustia de un examen. Recuerda: la verdadera fortaleza no está en no tener problemas, sino en tener el coraje de <strong class="text-white">dejar de cargarlos a solas</strong>. Cuando estés listo para hablar, aquí estoy para acompañarte.'
    },
    closingMessage: '',
    references: [
      'Bacete, R. (2017). Nuevos hombres buenos: La masculinidad en la era del feminismo. Península.',
      'Barlow, D. H. (1986). Causes of sexual dysfunction: The role of anxiety and cognitive interference.',
      'Basson, R. (2000). The female sexual response: A different model.',
      'Heilman, B., et al. (2017). The Man Box: A Study on Being a Young Man.',
      'Jack, D. C., & Dill, D. (1992). The Silencing the Self Scale.',
      'Levant, R. F. (1992). Toward the reconstruction of masculinity.',
      'McCabe, M. P. (2005). The role of performance anxiety in sexual dysfunction.',
      'Sanmartín Ortí, A., et al. (2022). La caja de la masculinidad: impacto en la juventud.'
    ],
    ctaTitle: '¿Damos el primer paso?',
    ctaSummary: '¡Agenda tu hora aquí!',
    ctaLabel: 'Contactar para consulta'
  },
  {
    slug: 'ansiedad-y-deseo',
    heroEyebrow: 'Neurobiología del placer',
    heroTitle: 'Ansiedad y Deseo: ',
    heroAccent: 'Cuando sobrevivir bloquea el placer',
    heroSummary: '',
    heroImage: '/fotos_articulo/articulo2/portada.png',
    introKicker: 'Neurobiología',
    introTitle: '',
    introQuote: '',
    introParagraph: 'Como <strong class="text-white">psicólogo y sexólogo clínico</strong>, hay una frase que suelo repetir harto en consulta y que quiero que te la grabes.<strong class="text-white italic">"Si tu cabeza está en la amenaza, tu cuerpo no puede entregarse al placer. No es una falla tuya: es pura neurobiología"</strong>  En el fondo, tu cabeza te está jugando chueco, como lo ha hecho antes y como probablemente lo volverá a hacer, a menos que le enseñemos a salir de ese modo de alerta. <br><br>A menudo, pensamos que la ansiedad es solo un estado mental, un exceso de pensamientos rumiantes o de "pasarse mil rollos". Pero la realidad es que la ansiedad es una <strong class="text-white">señal corporal de peligro</strong>. Cuando aparece, tu organismo prioriza defenderse, no vincularse. Históricamente nos vendieron la pomada de que el hombre es una "máquina” siempre lista y puramente física. Sin embargo, la investigación moderna en sexología demuestra todo lo contrario: los factores emocionales y el estrés son los principales responsables de que nuestro deseo o nuestra respuesta física se apague. Hoy quiero explicarte por qué ocurre esto y cómo puedes volver a habitar tu cuerpo desde la seguridad.',
    sections: [
      {
        title: 'El acelerador y el freno: Tu cuerpo ante la amenaza',
        paragraphs: [
          'Para entender qué nos pasa, la sexología actual utiliza lo que se conoce como el <strong class="text-white">Modelo de Control Dual</strong>. Imagina que tu respuesta sexual en el cerebro funciona con dos pedales: un <strong class="text-white">acelerador</strong> (que capta los estímulos eróticos) y un <strong class="text-white">freno</strong> (que escanea el entorno en busca de amenazas).',
          'Cuando sientes la presión, el estrés o la exigencia de tener que "rendir" en la cama, se activa tu <strong class="text-white">sistema nervioso simpático</strong>. Este sistema pisa el freno a fondo, acelerando tu corazón, tensando tus músculos y preparando a tu cuerpo para la lucha o la huida.',
          'Biológicamente, si tu cerebro cree que estás frente a un peligro de muerte o dando un examen demasiado importante, <strong class="text-white">no va a priorizar el placer</strong>. Ese estado de alerta es <strong class="text-white">fisiológicamente incompatible con la respuesta erótica</strong>, la cual necesita del sistema parasimpático: el encargado del descanso y la disponibilidad emocional. Es decir: no puedes estar al mismo tiempo en <strong class="text-white">modo alerta</strong> y en <strong class="text-white">modo de conexión</strong>.'
        ]
      },
      {
        title: 'La hipervigilancia del espectador',
        paragraphs: [
          'Como tu cerebro cree que hay un peligro, entra en un estado de alerta máxima. En la cama, esta hipervigilancia se traduce en un <strong class="text-white">automonitoreo constante</strong>. En sexología llamamos a esto <strong class="text-white">"espectadorismo"</strong>.',
          'En lugar de estar presente conectando con tu pareja, tu mente se sale de tu cuerpo y se sienta en primera fila para <strong class="text-white">evaluarte</strong>: "¿Está funcionando?", "¿Voy a durar lo suficiente?", "¿Se estará dando cuenta de que estoy nervioso?". Los estudios cognitivos más recientes confirman que este <strong class="text-white">miedo a fallar</strong> es el inhibidor del deseo más potente en los hombres.',
          'Este círculo vicioso de ansiedad genera un daño colateral inmenso: <strong class="text-white">la evitación</strong>. Para no enfrentar la angustia del "examen", empezamos a hacerle el quite al contacto. Nos acostamos más tarde, evitamos los regaloneos o nos volvemos distantes. Nuestra pareja suele interpretar esto como rechazo o falta de amor, cuando en realidad es puro miedo. Pucha que duele ver cómo <strong class="text-white">el silencio y la distancia terminan lastimando la relación mucho más que la pérdida de la erección</strong>.'
        ],
        images: [
          { url: '/fotos_articulo/articulo2/imagen1.png' }
        ]
      },
      {
        title: 'El retorno del deseo',
        paragraphs: [
          'Pisando el freno a fondo, es lógico que las ganas desaparezcan. Muchos pacientes llegan sintiendo que su deseo "desapareció" para siempre, pero aquí viene el gran alivio clínico: <strong class="text-white">el deseo no siempre aparece antes del contacto</strong>.',
          'La ciencia lo llama <strong class="text-white">deseo responsivo</strong>: primero necesitamos crear condiciones de <strong class="text-white">seguridad sin exigencias</strong>, y recién entonces, al <strong class="text-white">relajar el freno</strong>, llega la motivación erótica. No tienes que forzarte a tener ganas "de la nada"; tienes que permitirte conectar primero para que el cuerpo despierte después.',
          'Para que esto ocurra, necesitamos <strong class="text-white">descentrar la erección</strong> y <strong class="text-white">quitar el foco del control eyaculatorio</strong>. Nos han hecho creer que el sexo es una línea recta hacia la penetración, pero si la erección se va, <strong class="text-white">no significa que el encuentro haya fracasado</strong>. Y si eyaculas, <strong class="text-white">no pasa nada</strong>; tu cuerpo volverá a responder después de un rato (un tiempo que varía de hombre a hombre). Lo importante es entender que la intimidad no se acaba ahí: pueden quedarse en el juego, en la piel y en la cercanía. Cuando quitas la obligación de \'funcionar\', el cuerpo se relaja y responde.',
          'Y aquí hay que dejar algo muy claro: muchas veces <strong class="text-white">el verdadero problema no es la pérdida de la erección</strong>, ni haber eyaculado antes de tiempo, ni no estar pudiendo llegar al clímax. El verdadero problema es la <strong class="text-white">reacción que tenemos frente a esos eventos</strong>. Lo que realmente apaga todo es esa <strong class="text-white">respuesta automática de desconectarnos</strong>, de "irnos para adentro", de frustrarnos, avergonzarnos o enrabiarnos con nosotros mismos.',
          'Lo físico es <strong class="text-white">transitorio</strong>, es pasajero; es algo que <strong class="text-white">va a volver a funcionar</strong>. Pero si acompañamos esa pausa temporal del cuerpo con una reacción explosiva o de encierro que nos desconecta del placer y de la intimidad con la otra persona, es ahí donde recién aparece <strong class="text-white">el problema real</strong>.'
        ]
      },
      {
        paragraphs: [],
        images: [
          { url: '/fotos_articulo/articulo2/imagen2.png' }
        ]
      }
    ],
    boxedReflection: {
      title: 'De la alerta a la "Conciencia Plena"',
      content: 'No pelees contra la ansiedad como si fuera tu enemiga: <strong class="text-white">léela como la alarma de un auto que se quedó pegada por error</strong>. Tu sistema te está diciendo que no se siente seguro. Para desactivar esa alarma, el tratamiento sexológico actual se apoya fuertemente en la <strong class="text-white">conciencia plena (mindfulness)</strong>. Es el entrenamiento para salir de la cabeza —de los juicios y las evaluaciones— y <strong class="text-white">volver a las sensaciones del cuerpo aquí y ahora</strong>. En terapia trabajamos en esta regulación fisiológica y en establecer <strong class="text-white">acuerdos concretos con la pareja</strong> (como pausar y respirar juntos sin presiones). El objetivo no es convertirte en un robot infalible, sino lograr que tu cama deje de sentirse como un juicio de evaluación y vuelva a ser un <strong class="text-white">refugio seguro</strong> para ambos.'
    },
    closingMessage: '',
    references: [
      'Basson, R. (2001). Human sex-response cycles. Journal of Sex & Marital Therapy.',
      'Bossio, J. A., et al. (2014). Mindfulness-Based Group Therapy for Men with Situational Erectile Dysfunction. The Journal of Sexual Medicine.',
      'Carvalho, J., & Nobre, P. J. (2010). Predictors of men\'s sexual desire. The Journal of Sexual Medicine.',
      'Janssen, E., & Bancroft, J. (2013). The Dual Control Model. En J. R. Bancroft (Ed.), The Kinsey Institute Series.',
      'McCabe, M. P. (2005). The role of performance anxiety in sexual dysfunction. Journal of Sex & Marital Therapy.',
      'Nagoski, E. (2015). Come as You Are. Simon & Schuster.'
    ],
    ctaTitle: '¿La ansiedad no te deja disfrutar?',
    ctaSummary: 'Agenda una sesión aquí',
    ctaLabel: 'Agendar cita ahora'
  },
  {
    slug: 'pornografia-y-salud-sexual',
    heroEyebrow: 'Salud Sexual Digital',
    heroTitle: 'La Pornografía y tu Salud Sexual',
    heroAccent: 'El peligro del acceso y del exceso',
    heroSummary: 'Explora cómo el bombardeo de dopamina artificial impacta tu sistema de recompensa y cómo recuperarte para vivir una sexualidad humana y auténtica.',
    heroImage: '/fotos_articulo/articulo3/portada.png',
    introKicker: 'Impacto digital',
    introTitle: '',
    introQuote: '',
    introParagraph: 'En el día a día de la consulta clínica, veo cómo el acceso a internet las 24 horas del día ha cambiado por completo la forma de vivir nuestra sexualidad. Pucha, muchos pacientes se van de espaldas cuando descubren que ver pornografía —algo tan normalizado hoy en día— puede estar directamente ligado a disfunciones sexuales, a que se apague el deseo y a tener problemas profundos con sus parejas.<br><br>La idea de este artículo es explicarte en simple, pero con evidencia científica en mano, cómo este hábito impacta nuestro cerebro y, de paso, nuestra vida íntima. Para entender la teoría, lo mejor es mirar cómo se manifiesta en una historia real.',
    sections: [
      {
        title: 'El caso real: Cuando el problema no era la pareja',
        paragraphs: [
          'Hace un tiempo llegó a la consulta un paciente muy aproblemado por lo que él describía como un <strong class="text-white">"problema de fuerza"</strong>: básicamente, no lograba mantener la erección. Él estaba convencido de que su relación estaba desgastada o que ya no había química con su señora.',
          'Sin embargo, al escarbar en su historia clínica, descubrimos que la raíz no estaba en el vínculo, sino en un <strong class="text-white">consumo de pornografía precoz y sistemático</strong>. Este hábito, mantenido por años, fue mutando por completo su <strong class="text-white">concepción del deseo</strong> y de lo que él entendía como "normalidad" dentro del espacio íntimo. El cerebro se había acostumbrado a un ritmo que la realidad no puede seguir.'
        ]
      },
      {
        title: 'Un cerebro a exceso de velocidad: Sobrecargando el sistema de recompensa',
        paragraphs: [
          'Para entender qué pasó, hay que mirar el cerebro. La pornografía funciona como un <strong class="text-white">"estímulo supranormal"</strong>. Nuestro sistema nervioso está diseñado por la evolución para liberar dopamina (la hormona del placer) frente a encuentros reales, pero el bombardeo de las pantallas sobrecarga estas vías neuronales con una intensidad artificial.',
          'Con el tiempo, tanta dopamina genera <strong class="text-white">tolerancia</strong>. En buen chileno, el cerebro se acostumbra y empieza a necesitar material cada vez más extremo o novedoso para lograr el mismo nivel de excitación. Es aquí donde aparece el <strong class="text-white">"Efecto Coolidge"</strong>: ese instinto biológico de buscar novedad sexual que el internet secuestra al ofrecerte un catálogo infinito a un solo clic. Tu pareja de carne y hueso no cambia físicamente cada cinco segundos, y ante un sistema nervioso <strong class="text-white">malacostumbrado a la hiperestimulación</strong>, la realidad empieza a parecerle insuficiente.'
        ],
        images: [
          { url: '/fotos_articulo/articulo3/imagen1.png' }
        ]
      },
      {
        title: 'Deseo natural vs. Deseo a control remoto',
        paragraphs: [
          'En la consulta siempre explico que existen dos formas en que se enciende nuestro motor:'
        ],
        lists: [
          {
            items: [
              '<strong class="text-white">El deseo espontáneo:</strong> Ese que nace de forma natural por ganas, amor o conexión emocional.',
              '<strong class="text-white">El deseo reactivo:</strong> El que aparece solo cuando hay un estímulo muy fuerte desde afuera.'
            ]
          }
        ]
      },
      {
        paragraphs: [
          'El consumo problemático acostumbra a la mente a depender casi al 100% de ese <strong class="text-white">deseo reactivo y artificial</strong>. El porno nos entrega saciación inmediata, <strong class="text-white">pero nula satisfacción</strong>. Es como alimentarse de comida chatarra emocional: te quita el hambre un momento, pero te deja desnutrido. Al final, el sistema de recompensa se agota y, aunque "hayas cumplido", te sientes más solo y desconectado que al principio. En vez de acercar, la pantalla termina <strong class="text-white">aislando</strong>, lo que explica por qué la intimidad se va a pique a pesar de que el hombre sienta que tiene "más ganas" de sexo en general.'
        ]
      },
      {
        title: 'Cuando el cuerpo no responde: Los riesgos del consumo',
        paragraphs: [
          'Toda esta desregulación mental termina notándose en el cuerpo físico. Hoy vemos <strong class="text-white">problemas de erección</strong> en hombres jóvenes y sanos con una frecuencia que antes no existía. A esto se le llama <strong class="text-white">Disfunción Eréctil Inducida por Pornografía (PIED)</strong>. El cerebro se vuelve un experto en reaccionar a los píxeles, pero <strong class="text-white">"da la hora"</strong> frente al contacto físico y el ritmo natural.',
          'Pero la erección no es lo único que se ve afectado. El consumo excesivo suele estar ligado a una <strong class="text-white">masturbación apresurada</strong>. Ya sea por miedo a ser descubierto o por la búsqueda de dopamina rápida, <strong class="text-white">terminamos entrenando a nuestro cuerpo a eyacular lo más rápido posible</strong>. Con el tiempo, este condicionamiento se convierte en un factor de riesgo para la <strong class="text-white">eyaculación precoz</strong>.',
          'Además, este contenido actúa como una "escuela" de expectativas imposibles. Nos malacostumbra a comparar a nuestra pareja con estándares estéticos irreales, lo que nos pone una <strong class="text-white">lupa crítica</strong> en los ojos. Dejamos de mirar a la persona que amamos para buscar en ella el encuadre o el cuerpo de una pantalla, lo que mata la conexión espontánea.'
        ]
      },
      {
        paragraphs: [],
        images: [
          { url: '/fotos_articulo/articulo3/imagen2.png' }
        ]
      }
    ],
    boxedReflection: {
      title: 'El camino a la recuperación',
      content: 'Si estás leyendo esto y te sientes identificado, tengo una muy buena noticia: <strong class="text-white">no está todo perdido</strong>. Nuestro cerebro tiene <strong class="text-white">neuroplasticidad</strong>, lo que significa que puede sanar y readaptarse si le damos el espacio correcto. La experiencia clínica demuestra que parar el consumo —lo que muchas veces requiere apoyo terapéutico— funciona. Esta <strong class="text-white">"desintoxicación"</strong> permite que el sistema de recompensa se vuelva a calibrar. Es importante saber que, al principio de este camino, el cerebro puede pasar por un <strong class="text-white">periodo de silencio o "reset"</strong>. Es normal sentir que el deseo baja incluso más antes de volver a subir; no te asustes, es solo tu sistema nervioso preparándose para volver a sentir con estímulos reales. Toma tiempo y paciencia, pero es absolutamente posible recuperar tu <strong class="text-white">salud sexual</strong>, que vuelva el deseo natural y, sobre todo, volver a disfrutar de una intimidad rica, genuina y real.'
    },
    closingMessage: '',
    references: [
      'Llobat Rodríguez, L. A. (2023). Impacto del consumo de pornografía en la satisfacción sexual.',
      'Nolin, M., et al. (2024). Associations Between Contents of Pornography and Sexual Satisfaction.',
      'Park, B. Y., et al. (2016). Is Internet Pornography Causing Sexual Dysfunctions?',
      'Paslakis, G., et al. (2020). Associations between pornography exposure and body image.',
      'Steele, V. R., et al. (2013). Sexual desire and neurophysiological responses.',
      'Vaillancourt-Morel, M.-P., et al. (2020). Pornography use and romantic relationships.',
      'Zillmann, D., & Bryant, J. (1988). Pornography\'s Impact on Sexual Satisfaction.'
    ],
    ctaTitle: '¿Sientes que el porno está afectando tu vida?',
    ctaSummary: 'Agenda una sesión aquí',
    ctaLabel: 'Agendar cita ahora'
  },
  {
    slug: 'el-peso-del-silencio',
    heroEyebrow: 'Relaciones de Pareja',
    heroTitle: 'El Peso del Silencio: ',
    heroAccent: 'Por qué hablar de sexo salva las relaciones',
    heroSummary: '',
    heroImage: '/fotos_articulo/articulo4/portada.png',
    introKicker: '',
    introTitle: '',
    introQuote: '',
    introParagraph: 'En mi práctica clínica, a menudo me encuentro con parejas que se sientan frente a mí envueltas en un silencio que pesa. Llegan con la sensación de que la chispa se apagó o que el espacio íntimo se volvió un terreno minado de suposiciones e incomodidades. Es profundamente doloroso sentir que estás lejos de la persona que amas, incluso compartiendo la misma cama.<br><br>Culturalmente, nos han vendido la idea de que el deseo debería fluir solo, sin esfuerzo. Pero la realidad es otra: sostener una sexualidad viva requiere de una <strong class="text-white">comunicación sexual transparente, honesta y abierta</strong>. No se trata de hablar solo cuando hay crisis, sino de usar la palabra para mantener la llama viva antes de que los roces se vuelvan heridas irreparables.',
    sections: [
      {
        title: 'La presión por la <strong class="text-white font-bold">"compatibilidad natural"</strong>',
        paragraphs: [
          'Muchas veces creemos que si somos "el uno para el otro", el sexo simplemente debería funcionar por arte de magia. Sin embargo, la investigación sobre las <strong class="text-white">"creencias de crecimiento sexual"</strong> demuestra que las parejas que asumen que la satisfacción requiere un <strong class="text-white">esfuerzo continuo y comunicación</strong>, experimentan una calidad de relación mucho mayor a largo plazo.',
          'Por el contrario, quienes creen que todo depende de la mera "compatibilidad natural" suelen frustrarse y rendirse ante la primera dificultad. Un tropiezo en la intimidad no es una sentencia de muerte para la relación; es, simplemente, una <strong class="text-white">invitación a hablar, aprender y cultivar el vínculo</strong>. Al dejar de esperar que el sexo "suceda" solo, nos damos permiso para entender cómo funciona realmente nuestro motor del deseo.'
        ]
      },
      {
        title: 'Cuando el deseo pareciera esconderse',
        paragraphs: [
          '¿Te ha pasado que a veces simplemente "no tienes ganas" al principio, pero si hay cariño y conexión, de a poco vas entrando en sintonía? Esto es completamente normal. El <strong class="text-white">Modelo Circular de la respuesta sexual</strong> nos ayuda a desmitificar la tiranía del deseo espontáneo.',
          'Este modelo clínico explica cómo muchas veces partimos desde una <strong class="text-white">"neutralidad sexual"</strong> y es precisamente a través de la comunicación y la intimidad emocional que logramos transitar hacia un <strong class="text-white">deseo responsivo</strong>. Hablar de lo que sentimos y quitar la presión del rendimiento es, con frecuencia, el verdadero motor que termina encendiendo el deseo.'
        ],
        images: [
          { url: '/fotos_articulo/articulo4/imagen1.png' }
        ]
      },
      {
        title: 'El muro de la Alexitimia en la pareja',
        paragraphs: [
          'Para que esta comunicación fluya, debemos enfrentar un obstáculo que mencioné en mi artículo anterior: la <strong class="text-white">Alexitimia Masculina Normativa</strong>. Esta dificultad aprendida para identificar y verbalizar emociones no solo afecta al hombre en soledad, sino que levanta un muro invisible en la relación.',
          'Cuando uno de los miembros de la pareja no puede ponerle palabras a su sentir —ya sea por miedo, vergüenza o por una socialización que le enseñó a callar—, la otra persona suele llenar ese vacío con <strong class="text-white">suposiciones</strong>. El silencio del hombre puede ser interpretado por su pareja como falta de interés o rechazo, cuando en realidad es una incapacidad de traducir su mundo interno. <strong class="text-white">Romper la alexitimia no es solo hablar de sentimientos; es permitir que tu pareja te conozca y te acompañe en lo que te sucede.</strong>'
        ]
      },
      {
        title: 'El termómetro preventivo: Los "Chequeos" Sexuales',
        paragraphs: [
          'En la clínica siempre enfatizo algo crucial: no tenemos que esperar a estar en medio de una crisis para hablar. Basándonos en el célebre <strong class="text-white">Método Gottman</strong>, la clave es realizar <strong class="text-white">revisiones periódicas o "check-ins"</strong> para evitar que los pequeños problemas se calcifiquen y se conviertan en resentimiento.',
          'Preguntarse de vez en cuando, en un ambiente relajado y seguro: <strong class="text-white">"¿Cómo nos estamos sintiendo en nuestra intimidad?"</strong> o <strong class="text-white">"¿Qué te gustaría que hiciéramos diferente?"</strong> marca toda la diferencia. Los datos confirman que estas estrategias preventivas mejoran significativamente la cercanía y el ajuste de la pareja a largo plazo.'
        ],
        images: [
          { url: '/fotos_articulo/articulo4/imagen2.png' }
        ]
      },
      {
        title: 'Navegando los cambios de la vida y los "Guiones Sexuales"',
        paragraphs: [
          'Nuestros cuerpos envejecen y nuestras rutinas se alteran; por lo tanto, nuestra sexualidad debe transformarse con nosotros. Es crucial aprender a abordar estas diferencias desde el afecto y la vulnerabilidad compartida, especialmente cuando nuestros antiguos <strong class="text-white">"guiones sexuales"</strong> (esos mapas mentales sobre cómo debe ser el sexo) ya no nos sirven.',
          'La clave está en la <strong class="text-white">renegociación</strong> de estos guiones, desarrollando la flexibilidad para adaptar nuestras prácticas íntimas a lo que nuestros cuerpos y mentes necesitan hoy. Adaptarnos juntos es mucho más llevadero cuando podemos confesar nuestros miedos y nuevas necesidades sin sentirnos juzgados.'
        ]
      }
    ],
    boxedReflection: {
      title: 'La empatía como el mejor afrodisíaco',
      content: 'Finalmente, es vital comprender que la comunicación sexual no se trata solo de hablar de técnica. La evidencia clínica indica que la <strong class="text-white">calidad de la comunicación</strong> tiene una asociación positiva mucho mayor con la satisfacción general que la simple frecuencia con la que se habla. Aprender a hablar de nuestra propia sexualidad es como <strong class="text-white">aprender un idioma nuevo</strong>: al principio da vergüenza y sentimos que balbuceamos. Pero con paciencia, <strong class="text-white">empatía</strong> y disposición mutua, esa transparencia se convierte en la herramienta más hermosa para sostener el amor a lo largo del tiempo. Si sientes que en tu relación hace falta este espacio, no te asustes; es el primer paso para redescubrir un <strong class="text-white">vínculo basado en el disfrute y el cuidado genuino</strong>. Atrévanse a hablar.'
    },
    closingMessage: '',
    references: [
      'Basson, R. (2001). Human sex-response cycles. Journal of Sex & Marital Therapy.',
      'Gottman, J. M., & Silver, N. (1999). The seven principles for making marriage work. Crown.',
      'Johnson, S. M. (2004). The practice of emotionally focused couple therapy.',
      'Maxwell, J. A., et al. (2017). How implicit theories of sexuality shape sexual well-being.',
      'Sánchez-Fuentes, M. M., et al. (2014). A systematic review of sexual satisfaction.'
    ],
    ctaTitle: '¿Sientes que el silencio ha ganado espacio?',
    ctaSummary: 'Agenda una sesión aquí',
    ctaLabel: 'Agendar cita ahora'
  }
]

export function getArticleDataBySlug(slug: string): ArticlePageData | undefined {
  return ARTICLE_PAGES_DATA.find((a) => a.slug === slug)
}

export const EMPTY_KYC: KycFormState = {
  nombre: '',
  correo: '',
  telefono: '',
}
