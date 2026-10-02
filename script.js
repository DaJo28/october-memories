/* ============================================================
   OCTUBRE PARA KADIMY — CONFIGURACIÓN
   ============================================================
   MODO DE PRUEBA (oculto en el código):
   - Cambia enabled a true.
   - Cambia day por el día que quieras probar (1–31).
   - Vuelve a dejar enabled: false antes de publicar.
   ============================================================ */
const DEV_MODE = {
  enabled: false,
  day: 26
};

const CONFIG = {
  targetYear: 2026,
  targetMonth: 9, // Octubre = 9 porque JavaScript empieza en 0.
  storageKey: "kadimy_octubre_unlocked_days_v2",
  playlistEmbed: "https://open.spotify.com/embed/playlist/7I3TDcfil4y1tD759pQn5X?utm_source=generator&theme=0&autoplay=1"
};

const romanticWrongAnswers = [
  "Ooooh… esa no era, mi amor 💚",
  "Casi, casi… prueba otra vez, preciosa ✨",
  "La garra dice que esa no es, mi cielo 🌙",
  "Inténtalo una vez más, mi princesa ♡"
];

const days = {
  1: {
    password: "miprincesa",
    title: "Empieza tu mes ✨",
    quote: "Cada día guarda un pedacito de mi corazón para ti.",
    message: `
      <p>Mi amor, oficialmente empieza octubre, pero para mí no es simplemente un mes más. Es tu mes, y por eso quería encontrar una manera distinta de celebrarte, no solamente el día de tu cumpleaños, sino durante cada uno de estos 31 días.</p>
      <p>Quiero que cada vez que abras una de estas pequeñas sorpresas encuentres un pedacito de todo lo que siento por ti: lo mucho que te amo, lo mucho que te admiro y lo agradecido que estoy de tenerte en mi vida.</p>
      <p>Así que bienvenida a tu mes, mi princesa. Espero que disfrutes cada día tanto como yo disfruté pensando en ti mientras preparaba todo esto. ❤️</p>`
  },
  2: {
    password: "mentehermosa",
    title: "Esa mente que admiro 🧠❤️",
    message: `
      <p>Preciosa, una de las cosas que más admiro de ti es tu inteligencia. Y no hablo solamente de cuánto sabes, sino de esa increíble capacidad que tienes para enfrentarte a las situaciones que aparecen en tu día a día y encontrar la manera de resolverlas.</p>
      <p>Me encanta verte pensar, organizarte, buscar soluciones y salir adelante incluso cuando las cosas no son fáciles. Muchas veces probablemente tú solo lo ves como algo que tienes que hacer, pero desde donde yo estoy se ve diferente: se ve admirable.</p>
      <p>Me siento muy orgulloso de la mujer que eres, mi amor. Nunca dudes de todo lo que eres capaz de hacer. ❤️</p>`
  },
  3: {
    password: "laescondida",
    title: "Nuestro picnic en La Escondida 🌿",
    gallery: ["assets/img/dias/dia03_1.jpg", "assets/img/dias/dia03_2.jpg", "assets/img/dias/dia03_3.jpg"],
    message: `
      <p>Mi cielo, todavía recuerdo lo bonito que fue nuestro picnic en Finca La Escondida. Estar rodeados de naturaleza, comer rico, caminar, conversar y simplemente poder desconectarnos de toda la rutina fue exactamente uno de esos momentos que quisiera poder guardar en una cajita.</p>
      <p>No necesitábamos hacer algo extraordinario. Me bastaba estar contigo.</p>
      <p>Ese día me recordó que mis momentos favoritos no necesariamente dependen del lugar, sino de la persona que está conmigo. Y cuando esa persona eres tú, cualquier lugar puede convertirse en uno de mis favoritos.</p>
      <p>Espero que tengamos muchísimos más días como ese: tranquilos, felices, cerquita y disfrutándonos sin preocuparnos por nada más. 🌿❤️</p>`
  },
  4: {
    password: "amoragianna",
    title: "La mamá que eres 💕",
    message: `
      <p>Kadimy, hay una versión de ti que me provoca una admiración completamente diferente: verte siendo mamá de Gianna.</p>
      <p>Me encanta observar ese instinto protector que tienes, la manera en que estás pendiente de ella y cómo, sin importar cuánto cansancio puedas tener encima, siempre buscas su bienestar. Se nota que para ti su tranquilidad y su felicidad están por encima de muchas cosas.</p>
      <p>Y eso dice muchísimo de tu corazón.</p>
      <p>Ver el amor con el que cuidas a Gianna me permite conocer todavía más a la mujer de la que me enamoré. Una mujer fuerte, entregada, cariñosa y con un corazón enorme.</p>
      <p>Admiro muchísimo esa parte de ti, mi amor. ❤️</p>`
  },
  5: {
    password: "cuidarnos",
    title: "Cuidarnos también es amor 🤍",
    message: `
      <p>Amorsote, una de las cosas que más valoro de nosotros es saber que podemos cuidarnos.</p>
      <p>Todavía recuerdo todo lo que hiciste por mí cuando tuve el esguince en el tobillo. Tu paciencia, tu preocupación, tus cuidados y esa forma tan tuya de consentirme me hicieron sentir profundamente querido.</p>
      <p>Quizá parezcan pequeños detalles, pero para mí significaron muchísimo.</p>
      <p>Porque amar también está ahí: en preguntar cómo estás, en preocuparte, en acompañar, en cuidar y en hacerle sentir al otro que no tiene que enfrentarse solo a las cosas difíciles.</p>
      <p>Gracias por cuidarme como lo haces, mi cielo. Y quiero que siempre tengas claro que yo también quiero estar ahí para cuidarte a ti. ❤️</p>`
  },
  6: {
    password: "cosquillitas",
    title: "Mis risas favoritas 😂❤️",
    photo: "assets/img/dias/dia06_1.jpg",
    message: `
      <p>Flaca, hay algo que nunca quiero que nos falte: nuestras tonterías.</p>
      <p>Las bromas, las risas por cualquier cosa, mis intentos de hacerte cosquillas mientras tú haces todo lo posible por escapar, tus caras cuando ya sabes exactamente qué estoy a punto de hacer y todos esos momentos en los que simplemente nos olvidamos del mundo.</p>
      <p>Me encanta poder reír contigo.</p>
      <p>Porque contigo no solamente encontré amor. También encontré una compañera con quien puedo jugar, molestar, hacer tonterías y sentirme completamente cómodo siendo yo.</p>
      <p>Espero seguir robándote muchas risas… y sí, también pienso seguir haciéndote cosquillas aunque protestes. 😂❤️</p>`
  },
  7: {
    password: "11mesescontigo",
    title: "11 meses eligiéndonos ❤️",
    photo: "assets/img/dias/dia07_1.jpg",
    message: `
      <p>Mi amor, hoy cumplimos 11 meses juntos, y mientras escribía esto me puse a pensar en todo lo que tuvo que pasar para que tú y yo llegáramos hasta aquí.</p>
      <p>Es bonito recordar que todo comenzó en un lugar tan cotidiano como nuestro trabajo. Éramos dos personas compartiendo el mismo espacio, viviendo nuestras propias rutinas, sin saber realmente en qué iba a terminar todo aquello que poco a poco se estaba formando entre nosotros. Entre conversaciones, momentos compartidos, risas y esa cercanía que cada vez se sentía diferente, empezaste a ocupar un lugar en mi vida que ya no se sentía solamente como el de una compañera.</p>
      <p>Y todavía me causa ternura pensar en aquel parqueo de McDonald's de zona 15, porque de alguna manera ese lugar terminó siendo testigo de uno de los momentos más importantes de nuestra historia. Ahí nos dimos cuenta de que entre nosotros realmente estaba pasando algo, que aquello ya no era simplemente cariño o una bonita amistad. Había algo más. Y pensar que de ese momento llegamos hasta aquí me hace sonreír muchísimo.</p>
      <p>En estos 11 meses hemos construido tantos recuerdos que a veces parece que llevamos muchísimo más tiempo juntos. Hemos viajado a Xela, descansado juntos lejos de la rutina, tuvimos nuestro picnic en La Escondida, compartimos películas, helados, comidas, cielos, amaneceres, atardeceres, lunas, abrazos, bromas, cosquillas y hasta una misión completa para conseguir diez Crocs de McDonald's. 😂❤️</p>
      <p>Pero también hemos compartido cosas que para mí valen todavía más. Hemos estado presentes cuando el otro lo ha necesitado. Me has cuidado, me has escuchado, me has dado cariño en días pesados y me has permitido conocer poco a poco cada una de las versiones que forman a la mujer de la que me enamoré: Kadimy, la mujer inteligente y fuerte; la que tiene ese sentido del humor que adoro; la que me recibe con muchísimo amor; la mamá que entrega todo por Gianna; y también mi flaca, mi princesa, mi solecito y esa persona con la que simplemente me siento en casa.</p>
      <p>No quiero decir que estos 11 meses hayan sido importantes únicamente por todos los lugares a los que fuimos o por todas las cosas que hicimos. Para mí han sido importantes porque las viví contigo. Porque en medio de todas esas experiencias fui descubriendo que me encanta compartir mi vida contigo, desde algo tan especial como un viaje hasta algo tan sencillo como estar sentados juntos hablando de cualquier cosa.</p>
      <p>Y quizá eso sea una de mis partes favoritas de nosotros: podemos hacer planes, viajar y crear recuerdos increíbles, pero también podemos encontrar felicidad en las cosas más pequeñas.</p>
      <p>Hoy solamente quiero agradecerte por estos 11 meses, mi amor.</p>
      <p>Gracias por cada risa, por cada abrazo, por tus cuidados, por escucharme, por nuestras bromas, por compartir conmigo tus días buenos y también aquellos que no son tan fáciles. Gracias por permitirme formar parte de tu vida y por haber construido conmigo todo lo que hoy podemos llamar <strong>nuestro</strong>.</p>
      <p>Y si algo me emociona de cumplir 11 meses contigo es saber que esto todavía tiene muchísimas páginas en blanco.</p>
      <p>Todavía nos quedan lugares por conocer, películas por ver, comidas por probar, cielos por dedicarnos, fotografías por tomar, viajes por hacer, metas por celebrar y seguramente muchísimas tonterías por las que terminaremos riéndonos.</p>
      <p>Quiero seguir conociéndote, seguir aprendiendo a quererte mejor y seguir construyendo contigo, paso a paso, todo aquello que ambos queramos para nuestra vida.</p>
      <p><strong>Felices 11 meses, Kadimy. ❤️</strong></p>
      <p>Te amo muchísimo, mi cielo.</p>
      <p>Y después de todo lo que hemos vivido hasta ahora, si pudiera volver a aquel inicio sin saber cómo terminaría nuestra historia, volvería a escoger conocerte una vez más.</p>
      <p>Porque estos 11 meses contigo han sido solamente el comienzo de todo lo que todavía quiero vivir a tu lado. ❤️✨</p>`
  },
  8: {
    password: "siemprecontigo",
    title: "Hasta en los días normales 🌷",
    message: `
      <p>Mi cielo, muchas veces hablamos de los momentos especiales, pero también quiero agradecerte por algo mucho más sencillo: estar conmigo en la rutina.</p>
      <p>Porque una relación no está formada solamente por viajes, citas o celebraciones. También está formada por días cansados, trabajo, responsabilidades, conversaciones rápidas y momentos en los que quizá ninguno de los dos tiene demasiada energía.</p>
      <p>Y aun así, ahí estamos.</p>
      <p>Para mí también hay amor en esos días normales. En saber que puedo escribirte, contarte algo, buscarte después de un día pesado o simplemente sentir que estás ahí.</p>
      <p>Gracias por convertir incluso la rutina en algo mucho más bonito, preciosa. ❤️</p>`
  },
  9: {
    password: "nuestrosrecuerdos",
    title: "Todo lo que hemos ido guardando 📸",
    photo: "assets/img/dias/dia09_1.jpg",
    message: `
      <p>Bonita, a veces veo nuestras fotos y me sorprende pensar en la cantidad de recuerdos que hemos construido en relativamente poco tiempo.</p>
      <p>Cada fotografía tiene detrás una historia que solamente nosotros conocemos: qué pasó antes, de qué nos estábamos riendo, qué dijimos después o qué hacía especial ese momento.</p>
      <p>Me gusta pensar que poco a poco hemos ido construyendo nuestro propio álbum de vida.</p>
      <p>Y lo mejor es saber que todavía faltan muchísimas fotografías por tomar, lugares por conocer, comidas por probar, cielos por compartir y momentos que todavía ni siquiera sabemos que van a convertirse en recuerdos importantes.</p>
      <p>Quiero seguir llenando nuestra galería contigo. ❤️</p>`
  },
  10: {
    password: "nuestrocielo",
    title: "Nuestro cielo 🌅🌙",
    photo: "assets/img/dias/dia10_1.jpg",
    message: `
      <p>Solecito, de todas nuestras pequeñas costumbres, hay una que me parece especialmente bonita: dedicarnos el cielo.</p>
      <p>Un atardecer, un amanecer, la luna o simplemente un cielo bonito que alguno de los dos ve y piensa inmediatamente en el otro.</p>
      <p>Puede parecer algo muy sencillo, pero a mí me encanta.</p>
      <p>Porque incluso cuando no estamos físicamente juntos, existe ese momento en el que ambos podemos levantar la mirada y sentirnos un poquito más cerca.</p>
      <p>Me encanta saber que hay cielos que veo y automáticamente quiero compartir contigo.</p>
      <p>Así que cuando veas uno bonito, recuerda que seguramente en algún lugar también hay alguien pensando: “esto le gustaría a mi amor”. 🌙❤️</p>`
  },
  11: {
    password: "palomitasjuntos",
    title: "Nuestra función de cine 🎬🍿",
    gallery: ["assets/img/dias/dia11_1.jpg", "assets/img/dias/dia11_2.jpg"],
    message: `
      <p>Mi princesa, por fin pudimos tener nuestras idas al cine y me encantó compartirlas contigo.</p>
      <p>Me hizo mucha ilusión regalarte <em>La Odisea</em> antes para que conocieras la historia y después poder ir juntos a verla. Y también compartir <em>Spiderman Brand New Day</em>, las palomitas, los comentarios y todo lo que implica una salida sencilla al cine cuando estoy contigo.</p>
      <p>Me gusta porque hasta ese tipo de planes terminan convirtiéndose en algo especial.</p>
      <p>No importa si estamos viendo una película épica, superhéroes o cualquier cosa completamente diferente. Si estás sentada a mi lado, ya tengo la mejor compañía.</p>
      <p>Todavía nos quedan muchísimas películas pendientes. 🍿❤️</p>`
  },
  12: {
    password: "midulzura",
    title: "Tu lado dulce 🌸",
    message: `
      <p>Preciosa, hay una combinación en ti que me encanta: puedes ser increíblemente fuerte y al mismo tiempo muy dulce.</p>
      <p>Puedes resolver problemas, cargar responsabilidades, enfrentarte a días agotadores y aun así encontrar la manera de recibirme con una sonrisa, darme cariño y hacerme sentir amado.</p>
      <p>Eso es algo que admiro muchísimo.</p>
      <p>Porque sé que muchas veces puedes estar cansada y aun así no permites que ese cansancio apague completamente la calidez que llevas dentro.</p>
      <p>Gracias por esa forma tan bonita que tienes de quererme.</p>
      <p>Tu dulzura es uno de esos lugares en los que siempre quiero quedarme un poquito más. ❤️</p>`
  },
  13: {
    password: "xelacontigo",
    title: "Xela y nuestros viajes 🏔️❤️",
    gallery: ["assets/img/dias/dia13_1.jpg", "assets/img/dias/dia13_2.jpg", "assets/img/dias/dia13_3.jpg"],
    message: `
      <p>Mi amor, nuestro viaje a Xela ocupa un lugar muy bonito entre mis recuerdos contigo.</p>
      <p>Fue nuestro primer fin de semana juntos de esa manera, lejos de la rutina, compartiendo más tiempo, descansando y simplemente disfrutando de tenernos cerca.</p>
      <p>Es uno de esos viajes que no recuerdo únicamente por el lugar, sino por cómo me sentí estando contigo.</p>
      <p>Y lo mismo pasa cuando pienso en nuestros paseos y nuestras salidas a la playa: cada lugar adquiere otro significado porque existe una historia nuestra dentro de él.</p>
      <p>Quiero conocer muchos más lugares contigo.</p>
      <p>No importa si es un viaje enorme o una escapada sencilla. Mientras pueda voltear y encontrarte ahí, siempre habrá algo bonito que recordar. ❤️</p>`
  },
  14: {
    password: "micomplice",
    title: "Mi cómplice favorita 😏❤️",
    photo: "assets/img/dias/dia14_1.jpg",
    message: `
      <p>Flaca, me encanta nuestra complicidad.</p>
      <p>Esa capacidad que tenemos de entender una broma con una mirada, molestarnos, inventar tonterías y terminar riéndonos incluso de cosas que probablemente a nadie más le parecerían tan graciosas.</p>
      <p>Hay momentos en los que no necesito explicar demasiado porque sé que tú ya entendiste exactamente lo que estoy pensando.</p>
      <p>Y eso me encanta de nosotros.</p>
      <p>Quiero que nunca perdamos esa parte divertida de nuestra relación. Que aunque pasen los años podamos seguir molestándonos, riéndonos, haciendo bromas y encontrando razones para disfrutar juntos.</p>
      <p>Porque además de ser el amor de mi vida, me encanta que seas mi cómplice. ❤️</p>`
  },
  15: {
    password: "mamapreciosa",
    title: "Tu amor por Gianna 🌷",
    photo: "assets/img/dias/dia15_1.jpg",
    message: `
      <p>Mi cielo, hoy quiero volver a hablar de algo que admiro profundamente de ti: la forma en la que amas a Gianna.</p>
      <p>Tu amor por ella se nota en las pequeñas y grandes decisiones. En tu preocupación, en tu manera de protegerla, en todo lo que haces para que esté bien y en cómo su felicidad siempre ocupa un lugar enorme dentro de tu corazón.</p>
      <p>Para mí ha sido muy especial poder observar esa parte de ti.</p>
      <p>Porque detrás de la mujer divertida, fuerte, inteligente y cariñosa que conozco también hay una mamá increíblemente entregada.</p>
      <p>Espero que nunca olvides el enorme valor de todo lo que haces por ella, incluso esos días en los que quizá sientas que podrías hacer más.</p>
      <p>Desde afuera se ve algo muy claro: Gianna tiene una mamá que la ama profundamente. ❤️</p>`
  },
  16: {
    password: "tienesami",
    title: "También en los días difíciles 🫂",
    message: `
      <p>Amor, quiero que recuerdes algo especialmente en esos días en los que todo parece demasiado pesado: no tienes que poder con absolutamente todo tú sola.</p>
      <p>Sé que eres fuerte. Sé que tienes una capacidad increíble para resolver problemas y levantarte una y otra vez.</p>
      <p>Pero conmigo también puedes cansarte.</p>
      <p>Puedes decirme que tuviste un día horrible, puedes buscar un abrazo, puedes guardar silencio o simplemente necesitar que alguien esté contigo.</p>
      <p>Quiero ser una persona en la que puedas apoyarte cuando las cosas no estén bien.</p>
      <p>Así como tú has estado para mí, quiero estar para ti.</p>
      <p>No solamente quiero compartir tus mejores días. También quiero acompañarte en aquellos en los que necesites recordar cuánto vales. ❤️</p>`
  },
  17: {
    password: "10crocs",
    title: "La misión Crocs 😂🍟",
    photo: "assets/img/dias/dia17_1.jpg",
    message: `
      <p>Mi amor, creo que solamente nosotros podemos entender lo divertido que terminó siendo algo tan sencillo como coleccionar los diez Crocs de McDonald's.</p>
      <p>Y justamente por eso me encanta recordarlo.</p>
      <p>Convertimos una promoción de comida rápida en una pequeña misión juntos, buscando completar la colección y disfrutando muchísimo más de lo que probablemente deberíamos. 😂</p>
      <p>Pero para mí ese recuerdo representa algo que me encanta de nuestra relación: no necesitamos hacer cosas enormes para pasarla bien.</p>
      <p>Podemos emocionarnos por un juguete, una comida, una salida improvisada o cualquier pequeño detalle.</p>
      <p>Mientras lo hagamos juntos, encontramos la manera de disfrutarlo.</p>
      <p>Y sí… misión Crocs completada. ✅❤️</p>`
  },
  18: {
    password: "nuestrofuturo",
    title: "Todo lo que todavía nos falta ✨",
    message: `
      <p>Mi princesa, cuando pienso en nuestro futuro no pienso solamente en grandes planes.</p>
      <p>Pienso también en cosas pequeñas.</p>
      <p>En más viajes, desayunos, películas, domingos tranquilos, comidas compartidas, conversaciones largas, celebraciones, fotografías, abrazos y noches en las que podamos simplemente estar juntos.</p>
      <p>Me emociona pensar en todo lo que todavía podemos construir.</p>
      <p>No sé exactamente dónde vamos a estar dentro de algunos años ni todas las cosas que la vida tendrá preparadas para nosotros. Lo que sí sé es que me gusta muchísimo imaginarte dentro de esos planes.</p>
      <p>Quiero seguir construyendo contigo, paso a paso, sin apresurarnos pero siempre escogiendo caminar juntos. ❤️</p>`
  },
  19: {
    password: "milugarseguro",
    title: "Mi lugar seguro 🏡❤️",
    message: `
      <p>Kadimy, una de las cosas más bonitas que descubrí contigo es lo que significa sentir que una persona puede convertirse en un lugar seguro.</p>
      <p>Lo sentí especialmente durante nuestro viaje a Xela.</p>
      <p>Poder estar contigo, descansar, sentirme querido y simplemente disfrutar de tu cercanía me hizo comprender que esa sensación de hogar no siempre está relacionada con un lugar.</p>
      <p>A veces puede ser una persona.</p>
      <p>Y tú te has convertido muchas veces en eso para mí.</p>
      <p>En esa persona con la que puedo respirar más tranquilo, hablar, reírme, abrazarme y olvidarme un momento de todo lo demás.</p>
      <p>Gracias por ser ese refugio bonito en mi vida, mi cielo. ❤️</p>`
  },
  20: {
    password: "mujerfuerte",
    title: "La fuerza que llevas dentro 💪❤️",
    message: `
      <p>Bonita, sé que probablemente hay momentos en los que tú misma no dimensionas lo fuerte que eres.</p>
      <p>Yo sí lo veo.</p>
      <p>Lo veo en la manera en que enfrentas responsabilidades, en cómo buscas soluciones, en tu forma de levantarte después de días difíciles y en esa resiliencia que tienes incluso cuando estás agotada.</p>
      <p>Pero lo que más admiro es que tu fuerza no ha hecho que pierdas tu calidez.</p>
      <p>Sigues siendo cariñosa, divertida, atenta y capaz de regalar una sonrisa aun cuando llevas muchísimas cosas encima.</p>
      <p>Eso para mí es una verdadera fortaleza.</p>
      <p>Nunca dudes de la mujer tan capaz y valiente que eres.</p>
      <p>Y cuando tú lo olvides un poquito, aquí voy a estar para recordártelo. ❤️</p>`
  },
  21: {
    password: "tusabrazos",
    title: "Tus abrazos 🫂",
    message: `
      <p>Mi amor, creo que hay días en los que un abrazo tuyo puede arreglar muchísimo más de lo que cualquier palabra podría hacer.</p>
      <p>Me encanta abrazarte.</p>
      <p>Sentirte cerquita, tener esos segundos en los que parece que todo lo demás puede esperar y simplemente disfrutar de tenerte conmigo.</p>
      <p>Tus abrazos se han convertido en una de mis cosas favoritas porque en ellos encuentro cariño, tranquilidad y esa sensación de “aquí quiero estar”.</p>
      <p>Así que este mensaje es bastante sencillo:</p>
      <p>Quiero muchísimos abrazos tuyos todavía.</p>
      <p>De los rápidos, de los largos, de los inesperados y especialmente de esos en los que ninguno de los dos tiene prisa por soltarse. ❤️</p>`
  },
  22: {
    password: "heladitosjuntos",
    title: "Nuestros paseos y antojitos 🍦❤️",
    photo: "assets/img/dias/dia22_1.jpg",
    message: `
      <p>Mi cielo, me encanta salir contigo.</p>
      <p>No importa si estamos haciendo un gran plan o simplemente buscando algo rico para comer.</p>
      <p>Todavía me causa ternura recordar nuestra primera cita de helados y descubrir nuestros sabores: queso fresa, ron con pasas y chocolate. Son detalles tan pequeños, pero justamente esas pequeñas cosas terminan quedándose conmigo.</p>
      <p>Me gusta probar lugares contigo, compartir comida, caminar, platicar y convertir una salida cualquiera en otro recuerdo nuestro.</p>
      <p>Tenemos muchísimas cosas pendientes por comer y muchísimos lugares por conocer.</p>
      <p>Así que oficialmente este es también mi compromiso de seguir acompañándote a todos los antojitos posibles. 😂❤️</p>`
  },
  23: {
    password: "teelijosiempre",
    title: "Elegirte con todo ❤️",
    message: `
      <p>Preciosa, amar a alguien no significa querer solamente sus días bonitos.</p>
      <p>Para mí también significa aprender a querer todo lo que viene con esa persona: sus sueños, sus preocupaciones, sus responsabilidades, sus cansancios, sus momentos de silencio, sus risas y hasta esos días en los que quizá nada sale como esperaba.</p>
      <p>Yo quiero conocerte de verdad.</p>
      <p>Seguir descubriendo quién eres, acompañarte mientras cambias y permitir que tú también conozcas cada versión de mí.</p>
      <p>No quiero un amor perfecto.</p>
      <p>Quiero uno real.</p>
      <p>Uno donde podamos seguir escogiendo cuidarnos, respetarnos, escucharnos y querernos incluso cuando la vida no sea tan sencilla.</p>
      <p>Y ese amor, mi princesa, quiero seguir construyéndolo contigo. ❤️</p>`
  },
  24: {
    password: "faltan2",
    title: "Faltan dos días 🎂✨",
    message: `
      <p>Mi amor… ya estamos muy cerca.</p>
      <p>Solo faltan dos días para celebrar oficialmente tu cumpleaños, aunque si dependiera de mí, encontraría razones para celebrarte todo el año.</p>
      <p>Quería que estos días antes del 26 fueran como una pequeña cuenta regresiva para recordarte que tu cumpleaños no significa solamente sumar otro año.</p>
      <p>Significa celebrar que existes.</p>
      <p>Celebrar todas las personas a las que has impactado, todo lo que has superado, la mamá que eres, la mujer en la que te has convertido y todos los momentos bonitos que todavía están esperando por ti.</p>
      <p>Así que prepárate, mi princesa.</p>
      <p>Tu día ya casi llega. ❤️✨</p>`
  },
  25: {
    password: "mananatecelebro",
    title: "Mañana es tu día 🥹🎂",
    gallery: ["assets/img/dias/dia25_1.jpg", "assets/img/dias/dia25_2.jpg", "assets/img/dias/dia25_3.jpg"],
    message: `
      <p>Preciosa, mañana es tu cumpleaños.</p>
      <p>Y no voy a mentirte: me emociona muchísimo poder celebrar otro año de tu vida estando a tu lado.</p>
      <p>Hoy solamente quiero que pienses en todo lo que has recorrido para llegar hasta aquí.</p>
      <p>Las cosas que has aprendido, los momentos difíciles que has superado, las personas que amas, tus sueños y todas esas versiones de ti que poco a poco te han convertido en la mujer que eres hoy.</p>
      <p>Mañana quiero celebrarte muchísimo.</p>
      <p>Pero esta noche quería recordarte algo antes:</p>
      <p>Estoy muy orgulloso de ti.</p>
      <p>De tu fuerza, de tu corazón y de la vida que sigues construyendo.</p>
      <p>Descansa, mi princesa. Mañana celebramos a una de mis personas favoritas en este mundo. ❤️</p>`
  },
  26: {
    password: "felizcumplemiamor",
    title: "Feliz cumpleaños, amor de mi vida 🎂❤️",
    specialPage: true,
    message: ""
  },
  27: {
    password: "seguimoscelebrando",
    title: "Todavía te estamos celebrando 🎈❤️",
    message: `
      <p>Mi princesa, quizá ayer terminó oficialmente tu cumpleaños, pero nadie dijo que teníamos que dejar de celebrarte.</p>
      <p>Después de todo, una persona como tú merece más de un día.</p>
      <p>Espero que ayer hayas sentido mucho cariño, que hayas disfrutado cada detalle y que hayas empezado este nuevo año de tu vida sintiéndote muy querida.</p>
      <p>Hoy simplemente quiero recordarte que mi deseo para ti sigue siendo el mismo: que seas feliz.</p>
      <p>Que encuentres tranquilidad, que cumplas tus metas, que tengas salud, que sigas riéndote muchísimo y que nunca te falten personas que te recuerden cuánto vales.</p>
      <p>Yo pienso seguir haciéndolo.</p>
      <p>Así que feliz día después de tu cumpleaños, cumpleañera preciosa. 😂❤️</p>`
  },
  28: {
    password: "nuestrafamilia",
    title: "Lo que significa familia 🏡❤️",
    gallery: ["assets/img/dias/dia28_1.jpg", "assets/img/dias/dia28_2.jpg", "assets/img/dias/dia28_3.jpg"],
    message: `
      <p>Mi amor, con el tiempo he entendido que cuando quiero compartir mi vida contigo también estoy aprendiendo a conocer y querer todas las partes importantes que existen alrededor de ti.</p>
      <p>Y una de las más importantes es tu familia.</p>
      <p>Especialmente Gianna.</p>
      <p>Sé el lugar enorme que ella ocupa en tu corazón y sé que cualquier futuro en el que tú seas feliz también tiene que respetar y cuidar ese amor.</p>
      <p>Para mí, construir algo bonito contigo significa hacerlo con cariño, paciencia y entendiendo que la familia no es simplemente una palabra.</p>
      <p>Son personas, responsabilidades, historias y muchísimo amor.</p>
      <p>Y me hace ilusión pensar que poco a poco podemos seguir construyendo algo bonito alrededor de todo eso. ❤️</p>`
  },
  29: {
    password: "solecitomio",
    title: "Te dedico el cielo 🌙✨",
    gallery: ["assets/img/dias/dia29_1.jpg", "assets/img/dias/dia29_2.jpg"],
    message: `
      <p>Solecito, hoy quiero volver a una de mis cosas favoritas de nosotros: nuestros cielos.</p>
      <p>Me parece increíble que algo tan simple como mirar hacia arriba pueda hacerme pensar inmediatamente en ti.</p>
      <p>Un amanecer bonito.</p>
      <p>Una luna enorme.</p>
      <p>Un cielo rosado.</p>
      <p>Un atardecer espectacular.</p>
      <p>Y automáticamente aparece esa necesidad de tomar una foto y enviártela.</p>
      <p>Es como nuestra pequeña manera de decirnos “estoy pensando en ti” sin necesidad de escribir demasiadas palabras.</p>
      <p>Espero que nunca perdamos esa costumbre.</p>
      <p>Y si algún día estamos lejos, quiero que recuerdes que siempre podremos mirar hacia arriba y encontrar algo que ambos compartimos.</p>
      <p>Así que este cielo también es para ti, mi princesa. 🌙❤️</p>`
  },
  30: {
    password: "graciasportodo",
    title: "Gracias por lo que estamos construyendo 🤍",
    message: `
      <p>Mi amor, ya casi termina octubre y quiero dedicar este día simplemente a agradecerte.</p>
      <p>Gracias por estos meses.</p>
      <p>Gracias por todas las veces que me has hecho reír, por tus cuidados, tus abrazos, tu paciencia, tus detalles y por todos esos momentos que quizá parecían pequeños en el instante pero que hoy forman parte de nuestra historia.</p>
      <p>Me gusta lo que estamos construyendo.</p>
      <p>No porque todo sea perfecto, sino porque es nuestro.</p>
      <p>Porque poco a poco hemos aprendido más el uno del otro, hemos compartido experiencias nuevas y hemos creado recuerdos que ahora forman parte de nosotros.</p>
      <p>Espero que sigamos construyendo con cariño, respeto, paciencia, comunicación y muchas ganas de escogernos.</p>
      <p>Gracias por compartir este pedacito de vida conmigo, preciosa. ❤️</p>`
  },
  31: {
    password: "miuniverso",
    title: "Y esto apenas comienza ✨❤️",
    quote: "Este calendario termina hoy. Lo que siento por ti no.",
    message: `
      <p>Mi princesa, llegamos al último día.</p>
      <p>Durante 31 días intenté dejarte pequeños recordatorios de todo lo que significas para mí.</p>
      <p>Hablamos de nuestras risas, los viajes, el cine, nuestros cielos, Xela, La Escondida, los Crocs, nuestros paseos, tus abrazos, tu fuerza, tu inteligencia, tu forma de ser mamá, nuestros planes y todos esos pequeños momentos que poco a poco fueron construyendo nuestra historia.</p>
      <p>Pero quiero que entiendas algo:</p>
      <p><strong>Este calendario termina hoy. Lo que siento por ti no.</strong></p>
      <p>Mañana ya no habrá un botón nuevo que desbloquear, pero quiero seguir encontrando otras maneras de recordarte cuánto te amo, cuánto te admiro y lo feliz que me hace compartir mi vida contigo.</p>
      <p>Quiero seguir creando recuerdos que algún día podamos mirar hacia atrás y decir: “¿Te acuerdas de esto?”</p>
      <p>Quiero más viajes. Más cielos. Más películas. Más comidas. Más fotos. Más bromas. Más cosquillas aunque intentes escaparte. Más abrazos de esos que hacen que todo se sienta tranquilo.</p>
      <p>Y, sobre todo, quiero más vida contigo.</p>
      <p>Gracias por permitir que octubre fuera una excusa para celebrarte durante todo un mes.</p>
      <p>Pero quiero que tengas algo claro, mi amor:</p>
      <p>No necesito que sea octubre para pensar que eres especial.</p>
      <p>No necesito que sea tu cumpleaños para celebrar que existes.</p>
      <p>Y no necesito un calendario para recordarme lo afortunado que soy de tenerte en mi vida.</p>
      <p>Te amo, Kadimy.</p>
      <p>Mi cielo, mi princesa, mi solecito, mi todo, mi universo y el amor de mi vida.</p>
      <p>Este fue el último día del calendario… pero espero que sea solamente otro pequeño capítulo de todo lo que todavía nos falta por vivir. ❤️✨</p>`
  }
};

const refs = {
  welcome: document.getElementById("welcomeScreen"),
  app: document.getElementById("appShell"),
  start: document.getElementById("startButton"),
  welcomeMusic: document.getElementById("welcomeMusicButton"),
  musicButton: document.getElementById("musicButton"),
  musicDock: document.getElementById("musicDock"),
  spotify: document.getElementById("spotifyFrame"),
  hideMusic: document.getElementById("hideMusicButton"),
  grid: document.getElementById("calendarGrid"),
  todayLabel: document.getElementById("todayLabel"),
  statusMessage: document.getElementById("statusMessage"),
  passwordModal: document.getElementById("passwordModal"),
  passwordForm: document.getElementById("passwordForm"),
  passwordInput: document.getElementById("passwordInput"),
  passwordError: document.getElementById("passwordError"),
  passwordDayLabel: document.getElementById("passwordDayLabel"),
  messageModal: document.getElementById("messageModal"),
  messageDayBadge: document.getElementById("messageDayBadge"),
  messageTitle: document.getElementById("messageTitle"),
  messageBody: document.getElementById("messageBody"),
  messageMedia: document.getElementById("messageMedia"),
  specialQuote: document.getElementById("specialQuote"),
  unlockOverlay: document.getElementById("unlockOverlay")
};

let selectedDay = null;
let musicLoaded = false;

function normalizePassword(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function getUnlockedDays() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    return new Set(parsed.map(Number));
  } catch {
    return new Set();
  }
}

function saveUnlockedDay(day) {
  const unlocked = getUnlockedDays();
  unlocked.add(Number(day));
  localStorage.setItem(CONFIG.storageKey, JSON.stringify([...unlocked].sort((a, b) => a - b)));
}

function getCalendarMoment() {
  if (DEV_MODE.enabled) {
    return { phase: "during", currentDay: Math.max(1, Math.min(31, Number(DEV_MODE.day) || 1)) };
  }

  const now = new Date();
  const start = new Date(CONFIG.targetYear, CONFIG.targetMonth, 1, 0, 0, 0);
  const end = new Date(CONFIG.targetYear, CONFIG.targetMonth + 1, 1, 0, 0, 0);

  if (now < start) return { phase: "before", currentDay: null };
  if (now >= end) return { phase: "after", currentDay: null };
  return { phase: "during", currentDay: now.getDate() };
}

function dayState(day) {
  const unlocked = getUnlockedDays();
  const moment = getCalendarMoment();

  if (unlocked.has(day)) return "opened";
  if (moment.phase === "during" && moment.currentDay === day) return "available";
  return "locked";
}

function renderCalendar() {
  refs.grid.innerHTML = "";
  const moment = getCalendarMoment();

  if (moment.phase === "during") {
    refs.todayLabel.textContent = `Día ${moment.currentDay}`;
    refs.statusMessage.textContent = "Hoy hay una sorpresa esperando por ti. Si ya la abriste, podrás volver a verla cuando quieras.";
  } else if (moment.phase === "before") {
    refs.todayLabel.textContent = "Muy pronto";
    refs.statusMessage.textContent = "El calendario todavía está dormidito. Octubre traerá la primera sorpresa.";
  } else {
    refs.todayLabel.textContent = "Octubre terminó";
    refs.statusMessage.textContent = "Las sorpresas que desbloqueaste siguen guardadas aquí para volver a visitarlas.";
  }

  for (let day = 1; day <= 31; day++) {
    const state = dayState(day);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-card is-${state}${day === 26 ? " is-special" : ""}`;
    button.dataset.day = day;
    button.setAttribute("aria-label", `Día ${day}: ${state === "opened" ? "abierto" : state === "available" ? "disponible hoy" : "bloqueado"}`);

    const stateText = state === "opened" ? "Volver a abrir" : state === "available" ? "Disponible hoy" : "Bloqueado";
    const icon = day === 26 ? "★" : state === "opened" ? "♡" : state === "available" ? "✦" : "🔒";

    button.innerHTML = `
      <span class="day-icon" aria-hidden="true">${icon}</span>
      <span class="day-number">${day}</span>
      <span class="day-state">${stateText}</span>
    `;

    button.addEventListener("click", () => handleDayClick(day));
    refs.grid.appendChild(button);
  }
}

function handleDayClick(day) {
  const state = dayState(day);
  if (state === "locked") {
    const moment = getCalendarMoment();
    if (moment.phase === "during" && day > moment.currentDay) {
      refs.statusMessage.textContent = `Shhh… el día ${day} todavía guarda su secreto. 💌`;
    } else {
      refs.statusMessage.textContent = "Esta sorpresa solo podía desbloquearse en su día. Las que ya abriste siguen disponibles. ♡";
    }
    return;
  }

  selectedDay = day;
  if (state === "opened") {
    openDayContent(day);
  } else {
    openPasswordModal(day);
  }
}

function openPasswordModal(day) {
  selectedDay = day;
  refs.passwordDayLabel.textContent = `Día ${day}`;
  refs.passwordInput.value = "";
  refs.passwordError.textContent = "";
  openModal(refs.passwordModal);
  setTimeout(() => refs.passwordInput.focus(), 280);
}

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal.is-open")) document.body.style.overflow = "";
}

function showUnlockAnimation(callback) {
  refs.unlockOverlay.classList.add("is-active");
  refs.unlockOverlay.setAttribute("aria-hidden", "false");
  setTimeout(() => {
    refs.unlockOverlay.classList.remove("is-active");
    refs.unlockOverlay.setAttribute("aria-hidden", "true");
    callback();
  }, 1150);
}

function renderMedia(data) {
  refs.messageMedia.innerHTML = "";

  if (data.photo) {
    refs.messageMedia.innerHTML = `<button class="media-zoom" type="button" data-full-src="${data.photo}" aria-label="Ver foto completa"><img class="message-photo" src="${data.photo}" alt="Recuerdo de José y Kadimy" loading="lazy"></button>`;
    return;
  }

  if (Array.isArray(data.gallery) && data.gallery.length) {
    refs.messageMedia.innerHTML = `<div class="gallery">${data.gallery.map((src, index) => `<button class="media-zoom" type="button" data-full-src="${src}" aria-label="Ver recuerdo ${index + 1} completo"><img src="${src}" alt="Recuerdo ${index + 1} de José y Kadimy" loading="lazy"></button>`).join("")}</div>`;
  }
}

function openDayContent(day) {
  const data = days[day];
  if (!data) return;

  if (data.specialPage) {
    window.location.href = "cumple.html";
    return;
  }

  refs.messageDayBadge.textContent = `Día ${day}`;
  refs.messageTitle.textContent = data.title;
  refs.messageBody.innerHTML = data.message;
  renderMedia(data);

  if (data.quote) {
    refs.specialQuote.textContent = data.quote;
    refs.specialQuote.hidden = false;
  } else {
    refs.specialQuote.hidden = true;
    refs.specialQuote.textContent = "";
  }

  openModal(refs.messageModal);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".media-zoom");
  if (!trigger) return;
  const src = trigger.dataset.fullSrc;
  if (!src) return;
  const viewer = document.getElementById("photoViewer");
  const image = document.getElementById("photoViewerImage");
  image.src = src;
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

document.querySelectorAll("[data-close-photo]").forEach((element) => {
  element.addEventListener("click", () => {
    const viewer = document.getElementById("photoViewer");
    const image = document.getElementById("photoViewerImage");
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    image.src = "";
    if (!document.querySelector(".modal.is-open")) document.body.style.overflow = "";
  });
});

refs.passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = days[selectedDay];
  if (!data) return;

  const attempt = normalizePassword(refs.passwordInput.value);
  const expected = normalizePassword(data.password);

  if (attempt === expected) {
    saveUnlockedDay(selectedDay);
    closeModal(refs.passwordModal);
    renderCalendar();
    showUnlockAnimation(() => openDayContent(selectedDay));
    return;
  }

  refs.passwordError.textContent = romanticWrongAnswers[Math.floor(Math.random() * romanticWrongAnswers.length)];
  refs.passwordInput.classList.remove("shake");
  void refs.passwordInput.offsetWidth;
  refs.passwordInput.classList.add("shake");
});

function loadMusic() {
  if (!musicLoaded) {
    refs.spotify.src = CONFIG.playlistEmbed;
    musicLoaded = true;
  }
  refs.musicDock.classList.add("is-open");
  refs.musicDock.setAttribute("aria-hidden", "false");
  refs.musicButton.setAttribute("aria-expanded", "true");
}

function hideMusic() {
  refs.musicDock.classList.remove("is-open");
  refs.musicDock.setAttribute("aria-hidden", "true");
  refs.musicButton.setAttribute("aria-expanded", "false");
}

function enterExperience() {
  refs.welcome.classList.add("is-hidden");
  refs.app.classList.add("is-visible");
  refs.app.setAttribute("aria-hidden", "false");
  loadMusic();
  setTimeout(() => refs.welcome.setAttribute("aria-hidden", "true"), 650);
}

refs.start.addEventListener("click", enterExperience);
refs.welcomeMusic.addEventListener("click", loadMusic);
refs.musicButton.addEventListener("click", () => refs.musicDock.classList.contains("is-open") ? hideMusic() : loadMusic());
refs.hideMusic.addEventListener("click", hideMusic);

document.querySelectorAll("[data-close='password']").forEach(el => el.addEventListener("click", () => closeModal(refs.passwordModal)));
document.querySelectorAll("[data-close='message']").forEach(el => el.addEventListener("click", () => closeModal(refs.messageModal)));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (refs.passwordModal.classList.contains("is-open")) closeModal(refs.passwordModal);
  if (refs.messageModal.classList.contains("is-open")) closeModal(refs.messageModal);
  if (refs.musicDock.classList.contains("is-open")) hideMusic();
  const photoViewer = document.getElementById("photoViewer");
  if (photoViewer?.classList.contains("is-open")) {
    photoViewer.classList.remove("is-open");
    photoViewer.setAttribute("aria-hidden", "true");
    document.getElementById("photoViewerImage").src = "";
    if (!document.querySelector(".modal.is-open")) document.body.style.overflow = "";
  }
});

/* Herramientas ocultas de desarrollo. Úsalas desde la consola del navegador. */
window.__octubreDev = {
  resetProgress() {
    localStorage.removeItem(CONFIG.storageKey);
    renderCalendar();
    return "Progreso reiniciado.";
  },
  unlock(day) {
    const n = Math.max(1, Math.min(31, Number(day)));
    saveUnlockedDay(n);
    renderCalendar();
    return `Día ${n} desbloqueado para pruebas.`;
  },
  unlockAll() {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(Array.from({ length: 31 }, (_, i) => i + 1)));
    renderCalendar();
    return "Todos los días desbloqueados para pruebas.";
  }
};

renderCalendar();
