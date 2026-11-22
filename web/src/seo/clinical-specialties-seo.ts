export type ClinicalFaqEntry = {
  question: string
  answer: string
}

export type ClinicalSpecialtySeoEntry = {
  conditionName: string
  alternateName: string
  title: string
  description: string
  keywords: string
  faqs: ClinicalFaqEntry[]
}

/**
 * Fuente única de metadatos SEO y datos estructurados (MedicalWebPage + FAQPage)
 * para los 15 anexos clínicos de especialidades (prerender + navegación cliente).
 */
export const CLINICAL_SPECIALTY_SEO: Record<string, ClinicalSpecialtySeoEntry> = {
  '/sexualidad-masculina/disfuncion-erectil-psicogena': {
    conditionName: 'Disfunción Eréctil Psicógena',
    alternateName: 'Trastorno de la Erección de Origen Psicógeno',
    title:
      'Tratamiento de la Disfunción Eréctil Psicógena en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La disfunción eréctil psicógena no es un fracaso, sino una respuesta neurobiológica frente a la ansiedad de desempeño. Tratamiento sexológico clínico e integrativo en Chile.',
    keywords:
      'disfunción eréctil psicógena Chile, tratamiento psicológico disfunción eréctil, sexólogo clínico Santiago, ansiedad de desempeño erección, CIE-11 DSM-5-TR disfunción eréctil',
    faqs: [
      {
        question: '¿Por qué mantengo la erección al masturbarme, pero la pierdo con mi pareja?',
        answer:
          'Cuando estás a solas, estás en un entorno cien por ciento seguro donde tu cerebro no se siente evaluado; solo hay conexión con tus sensaciones. Al estar con tu pareja, entra a jugar el miedo a "no dar la talla" o a decepcionarla, y esa autoexigencia dispara una alerta de estrés en tu cuerpo que corta la respuesta eréctil. Esto es la prueba física irrefutable de que tu cuerpo está sano y tu capacidad vascular está intacta.',
      },
      {
        question: 'Siento mucha vergüenza y siento que estoy decepcionando a mi pareja, ¿cómo le hablo de esto?',
        answer:
          'En nuestro espacio te damos herramientas para abrir esa conversación desde tu vulnerabilidad, no desde el defecto, pudiendo expresar: "Quiero estar contigo, pero estoy sintiendo mucha presión y ansiedad, y mi cuerpo se está bloqueando". Compartir esta carga trae un alivio inmenso para ambos y transforma la intimidad en un refugio de apoyo mutuo.',
      },
      {
        question: '¿Soy demasiado joven (o demasiado mayor) para que me pase esto?',
        answer:
          'El estrés, la ansiedad, la autoexigencia y el miedo a fallar no discriminan por fecha de nacimiento. Tu valor personal no se mide por una respuesta física puntual; tu cuerpo simplemente está reaccionando de manera natural a tus emociones, tengas la edad que tengas.',
      },
      {
        question: '¿En qué momento debo considerar ir al urólogo?',
        answer:
          'Si tienes antecedentes familiares o personales de hipertensión, diabetes, colesterol alto, o si notas un cambio físico generalizado, siempre es recomendable realizar un chequeo médico. Si durante nuestra evaluación sentimos que tu cuerpo necesita apoyo médico para descartar cualquier factor metabólico u orgánico, te acompañaré y orientaré para realizar esa derivación.',
      },
      {
        question: '¿Cuánto tiempo toma la terapia para que todo vuelva a la normalidad?',
        answer:
          'Cada persona, cada cuerpo y cada historia tiene su propio ritmo. Desde las primeras sesiones empezarás a sentir cómo disminuye la presión asfixiante; al quitar el peso del éxito obligatorio y aprender a reconectar con el placer sin juzgarte, los cambios físicos comienzan a darse por sí solos.',
      },
    ],
  },
  '/sexualidad-masculina/eyaculacion-precoz': {
    conditionName: 'Eyaculación Precoz',
    alternateName: 'Eyaculación Prematura',
    title:
      'Tratamiento de la Eyaculación Precoz en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Abordaje sexológico clínico e integrativo para la eyaculación precoz o prematura en Chile. Reentrenamiento del reflejo eyaculatorio, manejo de la ansiedad de desempeño y técnicas conductuales.',
    keywords:
      'eyaculación precoz Chile, tratamiento eyaculación prematura, sexólogo clínico Santiago, parada-arranque compresión, control eyaculatorio CIE-11 DSM-5-TR',
    faqs: [
      {
        question: '¿Por qué eyaculo tan rápido incluso cuando intento pensar en otra cosa o distraerme?',
        answer:
          'Intentar distraer la mente suele tener el efecto contrario. Al desconectarte de tu cuerpo, pierdes la capacidad de registrar las sensaciones físicas que te avisan que te estás acercando al clímax (el punto de no retorno). Además, el enorme esfuerzo mental que haces para no sentir placer genera estrés y tensión muscular en tu zona pélvica, lo cual acelera biológicamente el reflejo eyaculatorio. En terapia aprendes a conectar con tu cuerpo desde la calma para poder regularlo.',
      },
      {
        question: '¿Sirven las cremas retardantes, los preservativos especiales o las pastillas si no hago terapia?',
        answer:
          'Las cremas anestésicas o preservativos especiales solo adormecen la piel, quitándote el disfrute sin enseñarte el control voluntario. Los fármacos recetados pueden ser un apoyo temporal, pero no resuelven la ansiedad de desempeño ni la falta de registro corporal. La terapia sexológica entrega el control definitivo, devolviéndole a tu sistema nervioso su capacidad de autorregulación.',
      },
      {
        question: 'Siento mucha vergüenza con mi pareja y prefiero evitar tener intimidad. ¿Cómo le explico lo que me pasa?',
        answer:
          'En nuestro espacio terapéutico te ayudamos a encontrar una forma cálida y asertiva de expresarlo, por ejemplo: "Te deseo mucho, pero estoy sintiendo una presión enorme que hace que mi cuerpo se acelere, y me angustia no poder disfrutar juntos como me gustaría". Ponerlo en palabras suele ser el primer gran alivio para tu sistema nervioso.',
      },
      {
        question: 'Si me masturbaba muy rápido cuando era joven por falta de privacidad, ¿arruiné mi cuerpo para siempre?',
        answer:
          'En absoluto. No hay un daño permanente en ti; tu cuerpo está perfectamente sano y solo tiene un hábito muy arraigado. Gracias a la neuroplasticidad, podemos reentrenar ese arco reflejo mediante ejercicios sexológicos específicos para que aprendas a pausar y extender el disfrute.',
      },
      {
        question: '¿Es posible curarse realmente o tendré que vivir cuidándome de esto toda la vida?',
        answer:
          'El pronóstico terapéutico para la eyaculación precoz es sumamente favorable. Con compromiso en los ejercicios de focalización y el abordaje de la ansiedad, llega un punto donde el control se vuelve intuitivo y natural, permitiéndote vivir tu sexualidad de forma espontánea.',
      },
    ],
  },
  '/sexualidad-masculina/eyaculacion-retardada': {
    conditionName: 'Eyaculación Retardada',
    alternateName: 'Aneyaculación o Inhibición Eyaculatoria',
    title:
      'Tratamiento de la Eyaculación Retardada en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Eyaculación Retardada se caracteriza por un retraso significativo o una ausencia recurrente del reflejo eyaculatorio a pesar de la presencia de una estimulación sexual adecuada. Tratamiento sexológico clínico e integrativo en Chile.',
    keywords:
      'eyaculación retardada Chile, tratamiento eyaculación retardada, aneyaculación psicógena, sexólogo clínico Santiago, CIE-11 eyaculación retardada, DSM-5-TR eyaculación retardada, anorgasmia masculina',
    faqs: [
      {
        question: '¿Por qué puedo eyacular solo al masturbarme y no durante la penetración con mi pareja?',
        answer:
          'Esto sucede habitualmente debido a la combinación de dos factores: por un lado, el cerebro se ha habituado a la estimulación táctil e intensidad específica de la propia mano (estilo masturbatorio idiosincrásico); por otro lado, el encuentro en pareja suele activar la ansiedad de desempeño, la necesidad de control y el temor a defraudar, factores que bloquean la respuesta reflexógena que sí fluye en privado.',
      },
      {
        question: '¿Los antidepresivos o tratamientos farmacológicos pueden provocar eyaculación retardada?',
        answer:
          'Sí. Medicamentos como los antidepresivos (especialmente los ISRS como la sertralina, paroxetina o escitalopram) elevan los niveles de serotonina central, lo que eleva significativamente el umbral necesario para desencadenar el orgasmo y la eyaculación. Si este es el caso, en la consulta trabajamos en coordinación interdisciplinaria con el médico tratante o psiquiatra para evaluar opciones sin suspender abruptamente el tratamiento farmacológico.',
      },
    ],
  },
  '/sexualidad-masculina/bajo-deseo-sexual-masculino': {
    conditionName: 'Deseo Sexual Hipoactivo Masculino',
    alternateName: 'Bajo Deseo Sexual Masculino',
    title:
      'Tratamiento del Deseo Sexual Hipoactivo Masculino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Deseo Sexual Hipoactivo Masculino se define como una disminución o ausencia persistente o recurrente de pensamientos, fantasías eróticas y motivación para iniciar o responder a la actividad íntima.',
    keywords:
      'deseo sexual hipoactivo masculino Chile, bajo deseo sexual masculino, tratamiento baja libido hombre, sexólogo clínico Santiago, CIE-11 deseo sexual hipoactivo, DSM-5-TR deseo hipoactivo, deseo reactivo',
    faqs: [
      {
        question: '¿Es normal que el deseo sexual disminuya tras varios años de relación?',
        answer:
          'Sí. Es un proceso natural en el que el deseo espontáneo inicial transiciona hacia el deseo reactivo. La habituación requiere cultivar deliberadamente la complicidad y el juego erótico.',
      },
      {
        question: '¿El bajo deseo sexual significa que mi relación de pareja está rota?',
        answer:
          'No necesariamente. En la gran mayoría de los casos, la disminución de la libido responde a agotamiento físico, estrés crónico, sobrecarga mental o dinámicas de comunicación no resueltas, las cuales pueden abordarse eficazmente en psicoterapia sexológica.',
      },
    ],
  },
  '/sexualidad-masculina/ansiedad-de-desempeno': {
    conditionName: 'Ansiedad de Desempeño Sexual',
    alternateName: 'Espectadorismo Sexual y Ansiedad de Evaluación Erótica',
    title:
      'Tratamiento de la Ansiedad de Desempeño Sexual en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Ansiedad de Desempeño Sexual se define como un estado de aprensión, tensión psicofisiológica y miedo anticipatorio focalizado en la capacidad de obtener, mantener o regular la respuesta sexual.',
    keywords:
      'ansiedad de desempeño sexual Chile, tratamiento ansiedad de desempeño, espectadorismo sexual, sexólogo clínico Santiago, CIE-11 ansiedad sexual, DSM-5-TR ansiedad desempeño, miedo a fallar en la cama',
    faqs: [
      {
        question:
          '¿Cómo saber si mi dificultad de erección o control es causada por ansiedad de desempeño o por un problema orgánico?',
        answer:
          'El indicador más claro es la presencia de erecciones espontáneas e involuntarias al despertar o durante la masturbación solitaria. Si la erección o el control eyaculatorio funcionan adecuadamente en privado pero se dificultan al estar con una pareja, el origen es predominantemente psicógeno y situacional, causado por la activación del sistema nervioso simpático ante la ansiedad de evaluación.',
      },
      {
        question: '¿Tomar fármacos o tranquilizantes ayuda a superar la ansiedad de desempeño sexual?',
        answer:
          'Los ansiolíticos tradicionales (como las benzodiacepinas) o el alcohol suelen empeorar la respuesta sexual, ya que deprimen el sistema nervioso central e inhiben los reflejos vasculares. Por su parte, los fármacos inductores de la erección (como el sildenafil) pueden actuar como una "muleta" temporal, pero no resuelven la causa cognitiva de fondo. La solución definitiva radica en la psicoterapia sexológica para desactivar el espectadorismo y restaurar la autorregulación emocional.',
      },
    ],
  },
  '/sexualidad-masculina/uso-problematico-de-pornografia': {
    conditionName: 'Uso Problemático de Pornografía',
    alternateName: 'Trastorno por Comportamiento Sexual Compulsivo (CSBD / CIE-11 6C72)',
    title:
      'Tratamiento del Uso Problemático de Pornografía en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El uso problemático o compulsivo de pornografía se caracteriza por un patrón persistente de incapacidad para controlar los impulsos o conductas de consumo de material erótico explícito.',
    keywords:
      'uso problemático de pornografía Chile, adicción a la pornografía tratamiento, disfunción eréctil por pornografía EDID PIED, sexólogo clínico Santiago, CIE-11 6C72 CSBD, comportamiento sexual compulsivo',
    faqs: [
      {
        question: '¿El consumo de pornografía destruye permanentemente la capacidad eréctil o el deseo?',
        answer:
          'No. La neuroplasticidad del cerebro permite revertir los efectos de la desensibilización dopaminérgica y el condicionamiento visual. A través de la pautación del consumo, la reestructuración cognitiva y el reentrenamiento de la atención erótica, el sistema de recompensa recupera su sensibilidad natural hacia la estimulación interpersonal y los ritmos orgánicos reales.',
      },
      {
        question: '¿Es necesario el ayuno dopaminérgico o la abstinencia total para recuperarse?',
        answer:
          'Los enfoques extremistas que exigen un "ayuno absoluto" o cero contacto con la sexualidad suelen incrementar la ansiedad, la rumiación obsesiva y el ciclo de recaída por culpa. En la consulta clínica se prioriza un modelo de autorregulación progresiva, donde el objetivo es desarticular el uso compulsivo como mecanismo de fuga emocional y restaurar una sexualidad saludable, consciente y gratificante.',
      },
    ],
  },
  '/sexualidad-femenina/vaginismo-dolor-genitopelvico': {
    conditionName: 'Vaginismo y Dolor Genitopélvico',
    alternateName: 'Trastorno de Dolor Genito-Pélvico/Penetración',
    title:
      'Tratamiento del Vaginismo y Dolor Genitopélvico en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Vaginismo y las condiciones de Dolor Genitopélvico comprenden dificultades caracterizadas por la imposibilidad o dificultad recurrente para permitir la penetración vaginal.',
    keywords:
      'vaginismo Chile, tratamiento vaginismo, dolor genitopélvico, dispareunia, hipertonía suelo pélvico, sexólogo clínico Santiago, CIE-11 vaginismo, DSM-5-TR dolor genitopélvico',
    faqs: [
      {
        question: '¿El vaginismo tiene cura o tendré que vivir con dolor para siempre?',
        answer:
          'El vaginismo sí tiene solución definitiva. No es una malformación anatómica ni una condición irreversible. Al tratarse de una respuesta muscular involuntaria y una memoria defensiva del dolor, el tratamiento combinado de psicoterapia sexológica y kinesiología pélvico permite descondicionar el reflejo de cierre, logrando una penetración completamente placentera y libre de dolor.',
      },
      {
        question: '¿Es necesario usar dilatadores y cómo se complementa la kinesiología pélvica con la terapia?',
        answer:
          'El uso de dilatadores vaginales no es una "fuerza bruta", sino una herramienta de desensibilización sistemática que la paciente maneja a su propio ritmo para que el cerebro y los músculos comprueben que la zona es elástica y segura. La kinesiología pélvica flexibiliza el músculo hipertónico, mientras que la psicoterapia sexológica desarticula la ansiedad, el miedo al dolor y las dinámicas de evitación en la pareja.',
      },
    ],
  },
  '/sexualidad-femenina/dispareunia-dolor-relaciones': {
    conditionName: 'Dispareunia y Dolor durante las Relaciones',
    alternateName: 'Dolor durante las Relaciones Sexuales / Dolor Coital',
    title:
      'Tratamiento de la Dispareunia y Dolor durante las Relaciones en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Dispareunia se define como el dolor genital persistente o recurrente que se experimenta antes, durante o después del coito o de la penetración sexual.',
    keywords:
      'dispareunia Chile, dolor durante las relaciones sexuales, tratamiento dispareunia, dolor coital, sexólogo clínico Santiago, CIE-11 dispareunia, DSM-5-TR dolor genitopélvico',
    faqs: [
      {
        question: '¿Es normal sentir leve molestia o dolor durante las relaciones sexuales?',
        answer:
          'No, el placer nunca debería doler. Cualquier dolor persistente durante la penetración es una señal de que el cuerpo y el sistema nervioso están activando un mecanismo de defensa, por lo que requiere una evaluación médica y sexológica integral para identificar su origen físico o funcional.',
      },
      {
        question: '¿Cómo puedo hablar con mi pareja sobre el dolor sin generar distancia afectiva?',
        answer:
          'La clave radica en desvincular el dolor del afecto hacia la pareja, explicando que se trata de una respuesta física involuntaria del cuerpo ante la cual ambos pueden colaborar modificando las prácticas eróticas y eliminando la presión de la penetración temporalmente.',
      },
    ],
  },
  '/sexualidad-femenina/anorgasmia-dificultad-orgasmo': {
    conditionName: 'Anorgasmia y Dificultad del Orgasmo',
    alternateName: 'Trastorno Orgásmico Femenino',
    title:
      'Tratamiento de la Anorgasmia y Dificultad del Orgasmo en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Anorgasmia y las dificultades en el alcance del clímax comprenden la ausencia o el retraso significativo del orgasmo, así como una reducción marcada en la intensidad de las sensaciones orgásmicas.',
    keywords:
      'anorgasmia Chile, tratamiento anorgasmia femenina, dificultad del orgasmo, trastorno orgásmico femenino, sexólogo clínico Santiago, CIE-11 anorgasmia, DSM-5-TR trastorno orgásmico',
    faqs: [
      {
        question: '¿Es normal no alcanzar el orgasmo solo con la penetración sin estimular el clítoris?',
        answer:
          'Sí, es absolutamente normal. Anatómica e histológicamente, el clítoris es el único órgano del cuerpo humano destinado exclusivamente al placer y cuenta con más de 8.000 terminaciones nerviosas. Solo una minoría de mujeres alcanza el clímax mediante la penetración vaginal aislada (generalmente por la tracción indirecta que el coito ejerce sobre los pilares del clítoris). Requerir estimulación clitoridiana directa es la norma fisiológica y no constituye ningún tipo de disfunción.',
      },
      {
        question: '¿Pueden los antidepresivos o anticonceptivos bloquear la capacidad de tener orgasmos?',
        answer:
          'Sí. Los antidepresivos de la familia ISRS (como la fluoxetina, sertralina o escitalopram) incrementan los niveles de serotonina central, lo que eleva el umbral necesario para desencadenar el clímax. Asimismo, ciertos anticonceptivos hormonales pueden disminuir la testosterona libre y la lubricación. En la consulta trabajamos en coordinación interdisciplinaria con la médica o médico tratante para evaluar ajustes de dosis o alternativas sin comprometer el tratamiento de base.',
      },
    ],
  },
  '/sexualidad-femenina/deseo-sexual-hipoactivo-femenino': {
    conditionName: 'Deseo Sexual Hipoactivo Femenino',
    alternateName: 'Trastorno del Interés/Excitación Sexual Femenino',
    title:
      'Tratamiento del Deseo Sexual Hipoactivo Femenino en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El Deseo Sexual Hipoactivo Femenino se define como una disminución o ausencia persistente o recurrente del interés erótico, pensamientos, fantasías sexuales y motivación íntima.',
    keywords:
      'deseo sexual hipoactivo femenino Chile, bajo deseo sexual femenino, falta de deseo mujer, modelo circular Basson, deseo responsivo, sexólogo clínico Santiago, CIE-11 deseo hipoactivo, DSM-5-TR interés excitación sexual femenino',
    faqs: [
      {
        question: '¿Es normal que no sienta ganas espontáneas de tener sexo aunque ame a mi pareja?',
        answer:
          'Sí, es absolutamente normal. En relaciones estables de mediana o larga duración, el deseo espontáneo suele disminuir de forma natural. Las mujeres experimentan frecuentemente deseo reactivo, lo que significa que las "ganas" no aparecen solas de la nada, sino como respuesta a la estimulación, el afecto, la relajación y el juego erótico adecuado. Sentir bajo deseo espontáneo no significa que hayas dejado de querer a tu pareja.',
      },
      {
        question: '¿Los anticonceptivos hormonales, la lactancia o la menopausia pueden apagar el deseo sexual?',
        answer:
          'Sí. Tanto la píldora anticonceptiva (que puede reducir la testosterona libre) como la prolactina elevada durante la lactancia y la disminución de estrógenos en la menopausia alteran directamente la lubricación y la receptividad neuroquímica del deseo. En la consulta realizamos un trabajo interdisciplinario con ginecología para evaluar alternativas hormonales o complementos locales sin descuidar el abordaje sexológico.',
      },
    ],
  },
  '/sexualidad-femenina/aversion-al-sexo': {
    conditionName: 'Aversión al Sexo',
    alternateName: 'Evitación Fóbica del Contacto Sexual',
    title:
      'Tratamiento de la Aversión al Sexo y Evidencia Fóbica en Chile: Enfoque Sexológico Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'La Aversión al Sexo se caracteriza por una respuesta fóbica, de rechazo persistente o evitación extrema y activa de cualquier tipo de contacto íntimo o cercanía erótica compartida.',
    keywords:
      'aversión al sexo Chile, tratamiento aversión sexual, rechazo al contacto íntimo, fobia sexual, evitación fóbica intimidad, sexólogo clínico Santiago, CIE-11 aversión sexual, DSM-5-TR evitación sexual',
    faqs: [
      {
        question: '¿Cuál es la diferencia entre la aversión al sexo y el deseo sexual hipoactivo?',
        answer:
          'Mientras que en el bajo deseo predomina la indiferencia o la ausencia de motivación, en la aversión sexual existe una respuesta activa de rechazo, miedo, ansiedad intensa o necesidad de evitar el contacto físico e íntimo por temor a que derive en una demanda sexual.',
      },
      {
        question: '¿Cómo se aborda terapéuticamente la aversión al sexo sin presiones?',
        answer:
          'El primer paso en terapia es detener cualquier práctica vivida desde la obligación. Trabajamos en procesar las emociones asociadas, restablecer límites seguros de afecto no demandante y avanzar con desensibilización graduada para recuperar la sensación de control, calma y soberanía corporal.',
      },
    ],
  },
  '/salud-emocional/trastornos-ansiedad-panico': {
    conditionName: 'Trastornos de Ansiedad y Pánico',
    alternateName: 'Trastorno de Ansiedad Generalizada (TAG) y Trastorno de Pánico',
    title:
      'Tratamiento de los Trastornos de Ansiedad y Pánico en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Los Trastornos de Ansiedad y Pánico comprenden un conjunto de condiciones caracterizadas por una activación neurofisiológica desproporcionada, miedo intenso o aprensión anticipatoria.',
    keywords:
      'trastornos de ansiedad Chile, tratamiento crisis de pánico, trastorno de ansiedad generalizada TAG, ansiedad social, psicólogo clínico Santiago, CIE-11 ansiedad, DSM-5-TR trastorno de pánico',
    faqs: [
      {
        question: '¿Un ataque de pánico me puede causar un infarto, la muerte o hacerme enloquecer?',
        answer:
          'Es la pregunta más frecuente en mi consulta, y la respuesta clínica es categórica: no, de ninguna manera. Aunque las sensaciones físicas son aterradoras, una crisis de pánico es una descarga temporal y completamente inofensiva del sistema de supervivencia. El cuerpo está diseñado para soportar esa activación; siempre alcanza un pico y desciende de forma natural por sí sola. Nadie ha muerto ni ha enloquecido por un ataque de pánico.',
      },
      {
        question: '¿Es posible superar los trastornos de ansiedad sin depender de medicamentos de por vida?',
        answer:
          'Sí, absolutamente. Si bien los fármacos pueden ser un apoyo médico válido en momentos de crisis muy severas, la psicoterapia basada en evidencia te otorga herramientas autónomas y definitivas para desactivar el miedo al miedo, modificar los sesgos cognitivos y recuperar la libertad de acción a largo plazo.',
      },
    ],
  },
  '/salud-emocional/cuadros-depresivos-alteraciones-animo': {
    conditionName: 'Cuadros Depresivos y Alteraciones del Ánimo',
    alternateName: 'Trastornos del Estado de Ánimo y Depresión Clínica',
    title:
      'Tratamiento de los Cuadros Depresivos y Trastornos del Ánimo en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Los cuadros depresivos y las alteraciones del estado de ánimo configuran una compleja red de síntomas somáticos, cognitivos y relacionales que erosionan la vitalidad.',
    keywords:
      'cuadros depresivos Chile, tratamiento depresión Santiago, trastornos del ánimo, anhedonia, activación conductual, psicólogo clínico Santiago, CIE-11 depresión, DSM-5-TR episodio depresivo',
    faqs: [
      {
        question: '¿Es normal sentir que ya nada me importa y que he perdido la ilusión por todo?',
        answer:
          'Sí, es uno de los síntomas cardinales de la anhedonia depresiva. Cuando el sistema emocional se sobrecarga o se deprime, apaga temporalmente la capacidad de sentir entusiasmo como un mecanismo de protección ante el desgaste. No significa que hayas perdido tu esencia para siempre; significa que tu capacidad de disfrute está temporalmente adormecida y requiere un espacio clínico seguro para reactivarse.',
      },
      {
        question: '¿Cómo puedo diferenciar un cuadro depresivo de un bajón de ánimo transitorio?',
        answer:
          'Un bajón de ánimo responde a un evento específico del día y suele ceder tras unas horas o días de descanso. Un cuadro depresivo, en cambio, se instala de forma persistente durante semanas o meses, alterando profundamente el sueño, la energía, la concentración y la capacidad de disfrutar de la vida cotidiana, interfiriendo de manera real en tus vínculos y tu bienestar.',
      },
    ],
  },
  '/salud-emocional/estres-cronico-burnout': {
    conditionName: 'Estrés Crónico y Síndrome de Burnout',
    alternateName: 'Síndrome de Desgaste Profesional y Sobrecarga Alostática Crónica',
    title:
      'Tratamiento del Estrés Crónico y Burnout en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'El estrés crónico y el síndrome de burnout se caracterizan por agotamiento extremo, distanciamiento mental y sobrecarga alostática.',
    keywords:
      'estrés crónico Chile, tratamiento síndrome de burnout, estrés laboral psicólogo Santiago, desgaste profesional CIE-11, sobrecarga alostática, psicólogo clínico Santiago',
    faqs: [
      {
        question: '¿Es normal que el cansancio del burnout no se pase ni durmiendo todo el fin de semana?',
        answer:
          'Sí, es completamente característico del estrés crónico severo. Cuando el organismo lleva meses o años operando en modo de supervivencia, las reservas neurobiológicas se agotan a un nivel profundo. El descanso físico convencional (como dormir el fin de semana) es insuficiente porque el sistema nervioso sigue atrapado en la hipervigilancia y no logra activar el descanso reparador. Se requiere un proceso de desaceleración clínica y reestructuración de estilo de vida.',
      },
      {
        question: '¿Cómo puedo saber si lo que tengo es estrés laboral o un cuadro depresivo?',
        answer:
          'Aunque comparten síntomas como la fatiga y la pérdida de interés, el estrés crónico y el burnout suelen estar estrechamente vinculados a contextos de alta demanda y sobrecarga donde la persona experimenta un desgaste por "exceso de esfuerzo". La depresión, en cambio, suele manifestarse con un sentido de desesperanza generalizado y una pérdida de placer que trasciende el ámbito laboral. No obstante, el burnout no tratado puede derivar en un cuadro depresivo secundario, por lo que una evaluación clínica oportuna es clave.',
      },
    ],
  },
  '/salud-emocional/regulacion-emocional-autoestima': {
    conditionName: 'Regulación Emocional y Autoestima',
    alternateName: 'Desregulación Afectiva, Alexitimia y Autoestima Contingente',
    title:
      'Tratamiento de la Regulación Emocional y Autoestima en Chile: Enfoque Clínico e Integrativo | Ps. Andrei Andrusco',
    description:
      'Abordaje psicoterapéutico clínico e integrativo para la regulación emocional, superación de la autocrítica severa, autocompasión y fortalecimiento de la autoestima en Chile.',
    keywords:
      'regulación emocional Chile, fortalecer autoestima psicólogo, autocompasión psicoterapia, desregulación emocional tratamiento, límites y asertividad, psicólogo clínico Santiago',
    faqs: [
      {
        question: '¿Es posible dejar de ser tan duro conmigo mismo cuando cometo un error?',
        answer:
          'Sí, absolutamente. La autocrítica severa suele ser un mecanismo de defensa antiguo que aprendimos en la infancia o adolescencia para intentar encajar o protegernos de la desaprobación. En psicoterapia trabajamos para desmontar ese juez interno punitivo y transformarlo en una voz aliada y compasiva. No se trata de "ser alcahuete" con uno mismo, sino de aprender a tratarse con la misma decencia y firmeza amorosa con la que tratarías a alguien a quien de verdad quieres.',
      },
      {
        question: '¿Por qué me cuesta tanto poner límites sin sentir culpa?',
        answer:
          'La dificultad para poner límites suele estar arraigada en el miedo al rechazo y en la creencia inconsciente de que nuestras necesidades importan menos que las de los demás. A través del trabajo en autoestima y asertividad, aprendemos a soltar la culpa neurótica y a comprender que decir "no" a los demás es, en realidad, decir "sí" a tu propia salud mental y a tu dignidad personal.',
      },
    ],
  },
}
