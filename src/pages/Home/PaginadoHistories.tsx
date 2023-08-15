import React, { useState } from 'react';
import History from "./History"
import './PaginadoHistories.css';
import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import imgGrimoldi1 from "./imagenes/grimoldi/imgGrimoldi1.jpg"
import imgGrimoldi2 from "./imagenes/grimoldi/imgGrimoldi2.jpg"
import imgGrimoldi3 from "./imagenes/grimoldi/imgGrimoldi3.jpg"
import imgBagley1 from "./imagenes/bagley/imgBagley1.jpg"
import imgBagley2 from "./imagenes/bagley/imgBagley2.jpg"
import imgBagley3 from "./imagenes/bagley/imgBagley3.png"
import cocacola1 from "./imagenes/cocacola/imgCocaCola3.jpg"
import cocacola2 from "./imagenes/cocacola/imgCocaCola2.webp"
import cocacola3 from "./imagenes/cocacola/imgCocaCola1.webp"
import kfc1 from "./imagenes/kfc/imgKFC1.jpg"
import kfc2 from "./imagenes/kfc/imgKFC2.jpg"
import kfc3 from "./imagenes/kfc/imgKFC3.jpg"
import microsoft1 from "./imagenes/microsoft/imgMicrosoft1.jpg"
import microsoft2 from "./imagenes/microsoft/imgMicrosoft2.jpg"
import microsoft3 from "./imagenes/microsoft/imgMicrosoft3.jpg"
import microsoft4 from "./imagenes/microsoft/imgMicrosoft4.jpg"
import carnegie1 from "./imagenes/carnegie/imgCarnegie1.jpg"
import carnegie2 from "./imagenes/carnegie/imgCarnegie2.jpg"
import carnegie3 from "./imagenes/carnegie/imgCarnegie3.jpg"
import carnegie5 from "./imagenes/carnegie/imgCarnegie5.jpg"
import carnegie6 from "./imagenes/carnegie/imgCarnegie6.jpg"

const PaginadoHistories = () => {

    const [historiaActual, setHistoriaActual] = useState(0);
    const [buttonBack, setButtonBack] = useState(false)
    const [buttonNext, setButtonNext] = useState(true)

    const historias = [
        {
            titulo: 'GRIMOLDI',
            contenido1: "En el año 1860 arribó al país un joven oriundo de Italia. Tomaso Grimoldi tenía 18 años y en poco tiempo desarrolló su talento como zapatero remendón. Instalado en la calle Piedad 1110 (hoy Bartolomé Mitre) y asociado con Cayetano Rimoldi y Martín Nillergi, también italianos, se ocupó de los zapatos de los vecinos. El negocio iba tan bien, que en 1868 sumaron a un aprendiz de once años: Luis Grisetti.Ese año, Tomaso –ya convertido en Tomás–, se casó con Ángela Rimoldi, hermana de su compañero. Fueron naciendo los ocho hijos y desde chicos, los varones fueron ejercitados en los secretos del oficio. El aprendiz Grisetti también era considerado de la familia. Más aún cuando en 1888, a los 31 años, contrajo matrimonio con Celestina Grimoldi.",
            contenido2: "En 1895, mientras el padre disfrutaba de rentas, luego de años de trabajo de lunes a lunes, los varones (Alberto, Luis y Enrique), más el cuñado Luis, crearon Grisetti y Grimoldi Hnos., que funcionó en un local ubicado en Ombú (Pasteur), entre Piedad y Rivadavia. Más allá de la coyuntura favorable del país, que para ese entonces crecía a un 6% anual, hubo dos factores que fueron determinantes en el desarrollo de la empresa. La promulgación de la Ley 1420 de Educación Común estableció la obligatoriedad de la formación primaria. Los niños comenzaron a asistir masivamente a las escuelas y necesitaron calzado adecuado. Con el tiempo, los zapatos escolares de Grimoldi se convirtieron en un clásico como luego fueron los Kickers y los populares Gomicuer, cuya goma indestructible soportaba horas de picaditos en los recreos. En segundo lugar, los médicos recomendaban los zapatos de la marca Grimoldi para corregir defectos del pie de los chicos. De todas maneras, el envión externo que recibió la compañía no habría servido de mucho sin la fuerte inversión que hizo Alberto Grimoldi en maquinarias para calzados, tecnología de punta para la fabricación de hormas propias y selección de curtiembres a tono con la calidad de los zapatos.",
            imagen1: imgGrimoldi1,
            titulo2: "Un Heroe sin Capa",
            contenido3: "El héroe sin capa, conocido como Grimoldi, brilla en esta inspiradora historia. Lilo, cuyo verdadero nombre es Liselotte Leiser de Nesviginsky, relata sus experiencias a lo largo de los años con gratitud y admiración. A sus 94 años, Lilo nos transporta a su pasado en Berlín, donde su familia judía era propietaria de una cadena de zapaterías de renombre.",
            contenido4: "En aquellos tiempos turbulentos de la Segunda Guerra Mundial, Alberto Enrique Grimoldi, un reconocido fabricante de zapatos argentino, visitó una de las tiendas de la familia Leiser. Alberto buscaba aprender de los negocios de Lilo y su familia, absorbiendo conocimientos sobre atención al cliente, venta de calzado y comercialización. La presencia de el en sus vidas fue un encuentro destinado a cambiarlo todo, aunque en ese momento ninguno de ellos podía anticipar su impacto trascendental.",
            contenido5: "Con el ascenso de la oscura estrella de Hitler, la vida se volvió cada vez más peligrosa y temible para los judíos. En 1933, la cadena Leiser fue arianizada y la familia de Lilo fue despojada cruel y racista de su negocio, siendo obligada a asociarse con una persona no judía para mantenerlo. Los ataques y persecuciones contra los judíos se intensificaron, afectando incluso la educación de Lilo, quien fue expulsada de su liceo por su origen judío.",
            contenido6: "Ante una situación intolerable, los padres de Lilo tomaron la decisión de viajar desde Berlín a Holanda en busca de seguridad. En Amsterdam, también poseían una cadena de zapaterías conocida como Huff, aunque no tan grande como la de Alemania. Sin embargo, la invasión nazi en 1940 puso en riesgo también sus negocios en Holanda. En este momento crítico, Alberto nuevamente intervino de manera milagrosa, haciéndose cargo de la cadena en Holanda en una operación comercial ficticia. Prometió devolver el patrimonio recibido una vez que la guerra terminara, un pacto que demostró los valores y la confianza en un mundo que se derrumbaba.",
            contenido7: "Los horrores no tardaron en llegar para Lilo. Junto a su familia, fue llevada a un campo de concentración llamado Westerbork, donde las condiciones eran inhumanas. Sin embargo, gracias a una prima y a su amistad con el médico judío Dr. Spanier, quien también era obligado a trabajar, Lilo pudo trabajar en el hospital como cocinera, preparando sopa para su familia con cascaras de verduras. La liberación finalmente llegó con la autoridad de la cancillería alemana, que autentificó los pasaportes costarricenses de Lilo y su familia, obtenidos antes de su secuestro los cuales habían salido una fortuna y que por supuesto eran falsos.Fueron trasladados a un campo de refugiados en Francia llamado la Bourboule, donde experimentaron la alegría de la libertad tras el desembarco en Normandía.",
            contenido8: "A pesar de su anhelo de ingresar a Argentina, Lilo y su familia enfrentaron obstáculos políticos y la Argentina de aquel entonces puso trabas a la inmigración judía. En ese momento, Grimoldi hizo su tercera y asombrosa aparición, actuando como garante personal para permitirles la entrada al país persuadiendo al presidente que sus conocimientos y habilidades eran fundamentales para los planes empresariales del gobierno. Grimoldi no solo cumplió su palabra, devolviendo el dinero y el patrimonio de los negocios en Holanda, sino que también mantuvo un vínculo permanente con la familia a lo largo de los años. Aunque el contacto se perdió con el tiempo, Lilo emprendió una búsqueda junto a su gran amiga y asistente, Virginia, para encontrar nuevamente a los Grimoldi ya que se había enterado de que  el hombre que los había ayudado tanto, en momentos de grave riesgo había fallecido.El mensaje electrónico que enviaron reavivó el vínculo y Lilo fue invitada a una reunión en la fábrica con toda la familia. Allí pudo compartir su testimonio y la forma en que Alberto Grimoldi había sido un faro de esperanza en los momentos más difíciles. La emoción llenó el ambiente y se reafirmó el deseo de que todos los hombres actuaran como él lo hizo.",
            imagen2: imgGrimoldi2,
            contenido11: "El legado de Grimoldi continúa a través de su hijo, Alberto Luis, actual presidente y gerente de la empresa. Más allá de su rol en los negocios, Alberto Luis es un amigo eterno de la familia, que nunca los ha olvidado. Esta historia inspiradora nos enseña la importancia de los valores humanos permanentes y cómo un solo individuo puede marcar una diferencia significativa en la vida de otros. Lilo y su familia siempre recordarán a esta maravillosa persona como un verdadero héroe sin capa, cuyo apoyo y generosidad les brindaron una nueva oportunidad de vida.",
            imagen3: imgGrimoldi3
        },
        {
            titulo: 'BAGLEY',
            contenido1: 'Había una vez un joven emprendedor llamado Melville Sewell Bagley, que nació en la ciudad de Bangor, en el Estado de Maine, Estados Unidos. A sus 24 años, en el año 1862, decidió aventurarse y llegó a Buenos Aires, la capital de Argentina.',
            contenido2: 'Melville consiguió trabajo en la droguería La Estrella, propiedad de los hermanos suizos Demarchi. Su dedicación y habilidades destacaron rápidamente, ganándose la confianza de los Demarchi. No solo aprendió el idioma rápidamente, sino que también encontró una oportunidad para desarrollar su potencial emprendedor.',
            imagen1: imgBagley1,
            titulo2: "La Esperidina",
            contenido3: 'Después de dos años de servicio ejemplar, Melville se asoció con sus empleadores y juntos establecieron una innovadora casa de pastas y licores que en esa época era una idea innovadora. Fue durante ese tiempo que, gracias al bioquímico Domingo Parodi, asociado de los suizos, Melville ideó el primer producto de la compañía: la Hesperidina. Esta bebida estimulante y con propiedades curativas fue un verdadero éxito.',
            contenido4: 'El éxito de la bebida curativa fue inmediato. Influyeron las propiedades sanadoras de las naranjas y el sabor que cautivó a los argentinos y a los uruguayos. Pero estos factores se complementaron con una genialidad de Bagley, la original campaña publicitaria del lanzamiento basada en la intriga.',
            contenido5: 'La Hesperidina se convirtió en un enigma para el público. Antes de su lanzamiento, misteriosas pintadas con el nombre "Hesperidina" aparecían en las aceras de la ciudad. Además, se podían ver carteles con mensajes enigmáticos que decían: "Se viene la Hesperidina". Esta intrigante campaña publicitaria generó una gran expectación.',
            contenido6: 'Tuvo, además, una valiosa e inesperada ayuda que le posibilitó multiplicar la difusión del aperitivo. Durante la cruenta Guerra del Paraguay, los jefes argentinos advirtieron una gran cantidad de bajas debidas al paludismo o malaria. Los remedios aportados por los médicos no lograban detener los contagios. Sin embargo, la solución se encontraba al alcance de la mano y en abundancia. Los soldados que masticaban cáscaras de naranjas amargas como una golosina no eran derrotados por el paludismo. Lo mismo ocurría con aquellos que saciaban el hambre cotidiano con esa fruta. Se corrió la voz para que todos se proveyeran en los miles de naranjos que creían naturalmente. ¿El tratamiento puso fin al problema? No en forma completa. Pero el descenso de casos de malaria fue notable.',
            contenido7: 'Mientras las tropas aplicaban la terapia de las naranjas amargas en territorio guaraní, el joven Bagley preparaba en Buenos Aires su bebida curativa, a base de naranjas amargas que revolucionaba el mercado, sin descuidar ninguna arista del negocio.',
            contenido8: 'Dos años después del lanzamiento, Melville decidió rediseñar la botella original. Adoptó la forma clásica de un barril, lo cual causó sensación. Sin embargo, también atrajo a imitadores que intentaron aprovecharse del éxito de la Hesperidina. Melville llevó a los tribunales a aquellos que trataban de copiar su producto, pero el problema persistió.',
            contenido9: 'A pesar de los obstáculos, Melville no se rindió. Buscó la protección de los tribunales y encargó la impresión de etiquetas al prestigioso Bank Note Company de Nueva York. En 1876, logró captar la atención del presidente Nicolás Avellaneda, quien creó la Oficina Nacional de Patentes de Invención. La Hesperidina de Bagley se convirtió en el primer registro de patente el 27 de octubre de ese año.',
            imagen2: imgBagley2,
            contenido10: "Melville continuó diversificando su negocio. En 1875, un año antes de patentar su marca, lanzó las primeras galletitas Bagley: Lola. También introdujo la primera mermelada, hecha con la pulpa de las naranjas amargas utilizadas para la Hesperidina. Estos tres productos se afianzaron en el mercado gracias a la visión publicitaria de Melville, quien creó el eslogan: Las tres cosas buenas de Bagley. A medida que aumentaba la demanda debido a la inmigración y surgía más competencia, Melville comprendió la importancia de diversificar su oferta. En la década de 1870, la empresa se consolidó y aprovechó la expansión del ferrocarril para traspasar las fronteras de Buenos Aires. Melville también se convirtió en un miembro activo de la Unión Industrial Argentina.",
            contenido11: "Desafortunadamente, la vida de Melville llegó a su fin prematuramente en julio de 1880, a los 42 años. Sin embargo, su segunda esposa, Mary Hamilton, y sus socios continuaron el legado de la empresa. La compañía se convirtió en sociedad anónima en 1901 y siguió creciendo y mejorando la calidad de sus productos.",
            contenido12: "La marca Bagley se expandió constantemente, lanzando nuevos productos como las famosas Criollitas en la década de 1940. Durante todo este tiempo, Melville había creado una empresa que trascendió las épocas, sosteniéndose durante más de ciento cincuenta años. Hoy en día, la Hesperidina es solo uno de los muchos productos que forman parte del grupo Cepas. En cuanto a Bagley, en 1996 fue adquirida por la reconocida empresa internacional Danone, pero siempre manteniendo el peso de su historia y formando parte de la vida cotidiana de los argentinos.",
            contenido13: "La historia de Melville Sewell Bagley es un testimonio inspirador de perseverancia y visión empresarial. A pesar de los desafíos y obstáculos que encontró en su camino, Melville supo adaptarse, innovar y diversificar su negocio para mantenerse relevante en el mercado. Su legado continúa inspirando a las nuevas generaciones de emprendedores argentinos a seguir sus sueños y alcanzar el éxito.",
            imagen3: imgBagley3,
        },
        {
            titulo: 'COCA COLA',
            contenido1: 'La historia de Coca-Cola es una inspiración para los futuros empresarios. Comenzó en 1886 cuando el farmacéutico John Pemberton buscaba una cura para el dolor de cabeza y creó una bebida carbonatada con extractos de hojas de coca y nueces de cola, a la que llamó Coca-Cola. Rápidamente, la bebida se convirtió en un éxito en Atlanta. En 1892, Asa Candler compró la compañía y la expandió a nivel nacional e internacional. Durante la Primera Guerra Mundial, Coca-Cola fue elegida por el ejército de los Estados Unidos por su facilidad de transporte y durabilidad, convirtiéndose en una bebida popular entre las tropas.',
            contenido2: 'Después de la Segunda Guerra Mundial, Coca-Cola se convirtió en un símbolo de la cultura estadounidense y se promovió en todo el mundo. La compañía ha sido innovadora en publicidad, utilizando métodos como la publicidad impresa, letreros luminosos y muestras gratis.',
            titulo2: "Formula Secreta",
            contenido3: "La fórmula de la Coca-Cola es considerada un secreto comercial y hay controversia sobre su origen en un pueblo llamado Ayelo de Malferit. Aunque la empresa niega la autenticidad, se han revelado recetas que afirman ser la original. Sin embargo, es poco probable que la receta original contenga extracto de coca debido a su ilegalidad en muchos países. También es improbable que solo dos personas conozcan la receta, como se comenta, debido a la producción masiva necesaria. A pesar de esto, el mito ha tenido un impacto significativo en la cultura popular.",
            contenido4: "Si bien existen mitos alrededor de la fórmula de Coca-Cola, lo importante es reconocer el impacto que ha tenido en el mundo empresarial. Su historia demuestra cómo una idea creativa y un enfoque estratégico pueden llevar al éxito empresarial a nivel global. Para los futuros empresarios, la historia de Coca-Cola es un recordatorio de que la innovación, la perseverancia y el marketing inteligente son fundamentales para construir una marca exitosa y duradera.",
            titulo3: "Entre la Espada y la Pared: New Coke",
            contenido5: "Retrocedamos a mediados de los años 70, cuando Pepsi lanzó el desafiante Pepsi Challenge, poniendo a prueba su gaseosa contra Coca-Cola. Por aquel entonces, Pepsi no solo desafiaba a los clientes de la compañía a, adivinar cuál era su producto, sino que también “regalaba” dos latas de gaseosas en todos los centros comerciales de Estados Unidos como una estrategia de comercialización para atraer al público de la competencia.",
            contenido6: "En medio de su ardua tarea, Coca-Cola comenzó a perder protagonismo en lugares clave. Esta campaña publicitaria global resultó desalentadora para Coca-Cola, ya que reveló que la gente prefería el sabor de Pepsi. Con Pepsi pisándoles los talones, Coca-Cola decidió tomar medidas drásticas.",
            contenido7: "En un intento por frenar a su competidor, Coca-Cola anunció en una conferencia de prensa en Nueva York que estaban cambiando la fórmula de su icónico refresco después de casi 100 años. Así nació la New Coke, un producto creado supuestamente a través de una prueba de sabor propia de Coca-Cola. Pero el 23 de abril de 1985 se convirtió en un día infame en la historia del marketing.",
            contenido8: "El lanzamiento de la New Coke desató el pánico entre los fanáticos de Coca-Cola. Surgieron historias de personas que compraban grandes cantidades de la fórmula tradicional en medio del caos generado en las afueras de las embotelladoras de la compañía. Aunque alrededor de 200.000 consumidores habían probado la nueva fórmula y afirmado que les gustaba más por su mayor dulzura, el público en general no estaba de acuerdo. El producto se parecía demasiado a Pepsi y las protestas se intensificaron, inundando la famosa línea telefónica de Coca-Cola con miles de llamadas diarias y llenando de cartas de desesperación la planta de Georgia, donde los fanáticos pedían desesperadamente que se recuperara la antigua fórmula.",
            contenido9: "Ante el aluvión de protestas, Coca-Cola finalmente cedió. Reconociendo su error, la empresa reintrodujo la antigua fórmula bajo el nombre de Coca-Cola Classic, en un intento de reconquistar la confianza de los consumidores. La New Coke fue eliminada por completo de los estantes.",
            contenido10: "El impacto de este episodio fue duradero. La empresa quedó en el centro de atención de sus fanáticos y la industria en general. A lo largo del tiempo, han surgido imitadores y supuestas revelaciones sobre la verdadera fórmula de Coca-Cola, pero la empresa ha logrado mantenerse como líder en el mercado.",
            contenido11: "Esta historia nos muestra que incluso las marcas más icónicas pueden cometer errores, pero también pueden aprender de ellos y adaptarse. Coca-Cola aprendió la lección y se recuperó, demostrando su capacidad de resistencia y su posición como una de las marcas más queridas y reconocidas del mundo.",
            titulo4: "¿Coca Cola invento a Papa Noel?",
            contenido12: "Aunque pueda parecer lo contrario, Coca-Cola no fue la primera marca de bebidas que contó con Papá Noel para su publicidad navideña. ¡Podemos asegurar que Papá Noel tenía una vida antes de Coca-Cola! ¿De dónde viene entonces esa idea?. La respuesta está en los anuncios de Navidad que empezó a publicar la marca estadounidense en los años 30. El artista Fred Mizen fue el elegido para pintar un anuncio de Navidad en el que se ve al personaje en medio de una multitud bebiendo el refresco. El anuncio se usó en revistas muy populares, entre ellas el Saturday Evening Post.",
            contenido13: "Después de él, Coca-Cola empezó a contar con el ilustrador Haddon Sundblom, que concibió un Papá Noel más realista, con una amplia sonrisa y una figura rotunda. Para hacerlo, se cuenta que se inspiró en un amigo suyo, vendedor jubilado.",
            contenido14: "El artista creó los anuncios navideños de la marca hasta 1964, convirtiéndolos en un icono mundialmente conocido. Sus cuadros, que luego se adaptaban a las necesidades publicitarias de tiendas, calendarios, vallas y establecimientos, han sido expuestos en diferentes ocasiones.",
            contenido15: "De este modo, la leyenda y la marca se fusionaban, creando un tándem mágico en el imaginario colectivo. Y es que, para nosotros, la Navidad es tan mágica como el personaje de Papá Noel.",
            imagen1: cocacola1,
            imagen2: cocacola2,
            imagen3: cocacola3,
        },
        {
            titulo: 'KFC',
            contenido1: '¡Prepárate para una historia cautivadora y emocionante sobre el increíble Coronel Sanders! Harland David Sanders, también conocido como el Coronel Sanders, no fue solo un empresario estadounidense. ¡Fue el visionario que creó el legendario imperio de comida rápida conocido como Kentucky Fried Chicken (KFC)!',
            contenido2: 'La vida de Sanders comenzó en Henryville el 9 de septiembre de 1890, en el seno de una familia humilde de ascendencia irlandesa. Desde temprana edad, se vio obligado a trabajar y aprender a cocinar para ayudar a su familia tras la trágica pérdida de su padre. Pero su pasión y determinación no conocían límites. A los doce años, abandonó la escuela y se mudó a New Albany, escapando de los malos tratos de su padrastro. En un acto audaz, falsificó su certificado de nacimiento a los quince años para unirse al ejército de los Estados Unidos, y su valentía lo llevó a servir en Cuba. Aventurero de corazón, Sanders probó suerte en diferentes empleos, desde ser marino mercante hasta vendedor de seguros, bombero en los ferrocarriles y granjero.',
            titulo2: "Cambio de Vida",
            contenido3: "Pero el destino de Sanders cambiaría para siempre cuando abrió una modesta estación de servicio en Corbin, Kentucky, en 1929. Allí, desplegó su talento culinario y deleitó a los comensales con deliciosos platos, como pollo, jamón campestre y filetes. Su reputación como cocinero excepcional se extendió rápidamente por todo el estado, y en 1935 fue honrado con el título de Coronel de Kentucky por el gobernador. Decidido a llevar su pasión por la comida al siguiente nivel, construyó un restaurante en 1936 con capacidad para 142 comensales. Este lugar se convertiría en el famoso Harland Sanders Café and Museum que conocemos hoy en día.",
            contenido4: "Fue en este punto de su vida cuando Sanders hizo algo verdaderamente revolucionario: creó su propia receta de pollo frito, compuesta por once hierbas y especias. ¡Una auténtica joya culinaria! Patentó esta receta en 1940 y comenzó a cocinar el pollo en una sartén, pero pronto introdujo una freidora a presión para servir más rápido a sus hambrientos clientes. Fue entonces cuando el crítico gastronómico Duncan Hines descubrió su talento y lo incluyó en su prestigiosa guía de restaurantes en 1939. A medida que la demanda de su pollo crecía exponencialmente, Sanders aprovechó su éxito y abrió el primer motel en Kentucky.",
            titulo3: "Nuevo desafio",
            contenido5: "La Segunda Guerra Mundial supuso un desafío para Sanders y su estación de servicio, ya que el racionamiento de gasolina forzó su cierre temporal. Pero la determinación y la visión del Coronel no conocían límites. A la edad de 60 años, vendió su motel y decidió expandir su negocio mediante el establecimiento de franquicias bajo el nombre de Kentucky Fried Chicken. En 1952, el primer restaurante de franquicia abrió sus puertas en Salt Lake City, Utah, y desde allí se propagó rápidamente por todo el país. Sanders demostraba personalmente cómo preparar su icónico pollo y cautivaba a todos con su apariencia distintiva: bigote y perilla canosos, y un elegante traje completamente blanco con una pajarita negra.",
            contenido6: "El éxito de KFC no pasó desapercibido, y en 1964, Sanders vendió su imperio por una cifra asombrosa de 3 millones de dólares a un grupo de inversionistas. Sin embargo, esto no marcó el final de su historia. El Coronel continuó como embajador de la marca, recibiendo un salario vitalicio de 40.000 dólares al año, que más tarde se incrementó a unos impresionantes 200.000 dólares anuales. En 1968, abrió un restaurante familiar en Shelbyville con el nombre de su amada esposa, Claudia Sanders' Dinner House, el cual sigue en funcionamiento en la actualidad. Aunque dejó el consejo de dirección de KFC en 1970, el rostro distintivo del Coronel siguió siendo la imagen de la marca.",
            contenido8: "Lamentablemente, Harland Sanders falleció el 16 de diciembre de 1980, a causa de una leucemia aguda que le habían diagnosticado seis meses antes. Pero su legado perdura hasta nuestros días. Fue enterrado con su atuendo característico en el Cementerio Cave Hill en Louisville, Kentucky. Y si alguna vez te has preguntado quién es el rostro detrás de la marca de KFC, la respuesta es simple: ¡es el inolvidable Coronel Sanders!",
            contenido9: "Esta es la apasionante historia de un hombre que empezó desde abajo, superó innumerables desafíos y creó un imperio de comida rápida reconocido en todo el mundo. La vida de Harland David Sanders es un recordatorio de que con pasión, determinación y una receta secreta única, ¡uno puede alcanzar el éxito y convertirse en una leyenda!",
            contenido10: "",
            contenido11: "",
            titulo4: "Receta Secreta",
            contenido12: "El Coronel Sanders patentó en 1940 la receta de su pollo frito, que se mantiene bajo secreto.",
            contenido13: "Se sabe que se utilizan once especias y aromas distintos mezcladas con la harina, pero se desconocen todos los condimentos empleados. Existe una hoja con la receta original firmada por el propio Sanders que fue custodiada en una caja fuerte de la sede de KFC en Louisville. Solo dos ejecutivos de la empresa tienen acceso a ella, y sus nombres no han sido revelados por razones de seguridad.",
            contenido14: "En 1983, el escritor William Poundstone desveló el método de preparación original del pollo frito en su libro Big Secrets, a partir del documento de la patente de la receta original. Durante el primer minuto el pollo se fríe a más de 200 °C, y después la intensidad se baja a 120 °C. ",
            contenido15: "Posteriormente se conoció que la receta de KFC contenía variaciones en sus ingredientes al llevar azúcar, harina, sal, pimienta negra y glutamato monosódico, algo que según el autor se debe a la necesidad de los propietarios de la cadena en los años 1960 de ahorrar costes, pese a la oposición inicial del Coronel Sanders.",
            imagen1: kfc1,
            imagen2: kfc2,
            imagen3: kfc3,
        },
        {
            titulo: 'MICROSOFT/BILL GATES',
            contenido1: 'Bill Gates, es uno de los empresarios más conocidos que surgieron durante los inicios de los ordenadores personales. Ha sido criticado por sus tácticas de negocios, que han sido consideradas anticompetitivas, una opinión que en algunos casos, ha sido mantenida por numerosas sentencias judiciales.',
            contenido2: 'Su historia comienza como la de cualquier otro joven. Fue un estudiante regular y cursó estudios en la escuela privada de élite de Lakeside, en Seattle, esta escuela tenía ya una computadora en el año 1968, lo que le permitió a Gates tomar contacto con la máquina y aficionarse a la informática. También en Lakeside conoció a Paul Allen, juntos, compartieron su amor por la tecnología y soñaron con un futuro donde los ordenadores personales fueran accesibles para todos. No sabían en ese momento que estaban forjando una asociación que cambiaría el curso de la historia. El 4 de abril de 1975, siendo aún estudiante en la Universidad de Harvard, crea la empresa de software Microsoft. Y ya en 1976, decide abandonar la universidad y dedicar todos sus esfuerzos a su empresa',
            imagen1: microsoft1,
            titulo2: "Contrato del Siglo",
            contenido3: "IBM era el líder mundial de la computación, pero hasta la década de 1980 solo creaba computadoras para empresas. Pero, ante el creciente interés en las computadores personales (PC, por sus siglas en inglés), IBM empezó a desarrollar su propio modelo.",
            contenido4: "A pesar de que IBM solía desarrollar sus propios productos, en este caso, como había ingresado tarde en el mercado de las PC, decidió tercerizar la producción del sistema operativo.",
            titulo3: "",
            contenido5: "En 1980, Bill Gates se reunió con representantes de IBM en Seattle. Ellos querían contar con el sistema operativo CP/M (tener en cuenta este nombre) el cual se trataba del sistema operativo más popular entre las computadoras personales en los años 1970. Y aquí viene la igeniosidad de Bill gates, él les comento de la existencia de una versión adaptada llamada QDOS, comprometiéndose a conseguir una licencia no exclusiva a fin de adaptarla. Con ello, consiguió venderles la idea del sistema operativo MS-DOS, sin contar con ésta. El plan salió perfecto cuando compró 86DOS a muy bajo precio al joven programador Tim Paterson.",
            contenido6: "Incluso contrataron al ingeniero informático que creó dicho sistema operativo, para que lo adaptase a las necesidades de IBM, en base a que por supuesto no se sabía bien cómo se cumpliría dicho contrato, es decir, Microsoft hasta entonces, dedicada a crear programas de computación, no había desarrollado un sistema operativo como el que pedía IBM",
            contenido7: "Microsoft quiso los derechos de licencia, mantenimiento, e incluso la facultad de vender el DOS a otras compañías. IBM aceptó, considerando que lo que produciría dividendos sería el hardware y no el software. Ellos necesitaban ese sistema operativo para competir con Apple, razón por la cual la negociación fue flexible.",
            contenido8: "Posteriormente, Microsoft compra los derechos de autor del QDOS a Tim Paterson por 50.000 dólares, que vendió a IBM como MS-DOS (Microsoft DOS). Lo que llama poderosamente la atención fue que IBM no comprara el MS-DOS sino que decidiera pagar a Microsoft un canon por cada copia que se vendiera. Ese acuerdo cambiaría el futuro de la computación, eventualmente llevando a la empresa creada por Bill Gates y Paul Allen a la cima de la industria, muy por encima de IBM",
            contenido9: "Ahora si esta negociación no te sorprendió, te invito a que prestes atención a la siguiente anécdota. IBM, previamente al juntarse con Bill Gates, se había contactado con la empresa Digital Research, fundada por Gary Kildall, el cual habia creado el sistema operativo CP/M.",
            imagen2: microsoft2,
            contenido10: "¿Y quién es Gary Kildall y qué tiene que ver con el uso de Windows en nuestros ordenadores personales? En 1980, cuando IBM puso en marcha el proyecto de desarrollo del IBM 5150, es decir, el IBM PC, el sistema operativo dominante en el mercado era el CP/M, un sistema operativo que había desarrollado Gary Kildall y que, dada la penetración que tenía en el mercado, era lógico que se usase en el PC.",
            contenido11: "Sin embargo, las negociaciones de IBM con la compañía de Kildall sumadas a un malentendido por parte del equipo encargado del software en el “gigante azul” terminaron llevando a IBM hacia una joven empresa llamada Microsoft, dirigida por un avispado Bill Gates, que terminó haciéndose con el gran contrato.",
            titulo4: "",
            contenido12: "Cuando los representantes de IBM llegaron a las oficinas de Kildall, se reunieron con Dorothy, la esposa de Gary. Se dice que Gary Kildall estaba volando con su avioneta (aunque viajó para ver a un cliente) y tuvo a los representantes de IBM varias horas esperándole, aunque realmente era Dorothy la que gestionaba las operaciones comerciales de la empresa. También se dice que IBM exigió la firma de un acuerdo de confidencialidad, dado lo estratégico de su proyecto, que fue considerado demasiado estricto por los asesores legales de Dorothy Kildall.",
            contenido13: "Hoy en día, Gary Kildall es un nombre desconocido para muchos usuarios, sin embargo, tuvo en sus manos la oportunidad de haberse convertido en Bill Gates y, por tanto, haber estado presente en los ordenadores personales de la mayoría de los usuarios.",
            contenido14: "El fallido acuerdo entre IBM y Digital Research fue una pesada carga para la empresa y para su máximo responsable, Gary Kildall. En los años posteriores siguieron desarrollando versiones del sistema operativo de gran calidad, y tuvieron sus momentos de gloria, pero nunca pudieron luchar contra el imperio Microsoft que crecía en progresión geométrica.",
            contenido15: "Digital Research es una leyenda de la informática por ser pioneros en muchos apartados de esta ciencia. Logró que sus productos superaran en calidad a los de la competencia, pero nunca fue capaz de superar al imperio económico generado por el gigante Microsoft.",
            imagen3: microsoft3,
            titulo5: "Jobs vs Gates",
            contenido16: "Bill gates era conciente de la importancia del uso del mouse y un entorno grafico en ese entonces mostrado por Apple con su ordenador Lisa, por tanto se propuso a conseguir también el entorno grafico y el ratón para operarlo. Mientras, Steve Jobs, fundador de Apple, iniciaba el desarrollo del Macintosh, Bill Gates visitó Apple. Ofrecía mejorar sus hojas de cálculo y otros programas. Amenazaba con vender su material informático a IBM, con lo que obtuvo una alianza Apple-Microsoft",
            contenido17: "A medida que Jobs y su equipo comenzaron a trabajar estrechamente con Microsoft, les preocupó que copiaran la interfaz gráfica de Macintosh e hicieran su propia versión. Tenían razón en preocuparse. Gates creyó que las interfaces gráficas eran el futuro, y que Microsoft tenía tanto derecho como Apple de utilizar la idea de la metáfora del escritorio, originalmente desarrollada por el centro de investigación de Xerox. En su acuerdo original, Jobs había convencido a Gates que Microsoft no crearía software gráfico para nadie más hasta que hubiera transcurrido un año del debut de Macintosh en enero de 1983. Por desgracia para Apple, la compañía no contempló la posibilidad de que el lanzamiento de la Macintosh se demoraría un año. Esto significó que Gates estaba en su derecho de anunciar, en noviembre de 1983, que Microsoft planeaba desarrollar un nuevo sistema operativo para las computadoras IBM llamado Windows, el cual incorporaba una interfaz gráfica con ventanas, íconos y un ratón para navegar. Jobs no se quedó de brazos cruzados y decidió toma medidas para enfrentar a su rival. Apple demandó a Microsoft por infringir sus derechos de autor y de patentes. La demanda alegaba que Microsoft había copiado el diseño y la interfaz gráfica de la Macintosh, que era una creación original.",
            contenido18: "El juicio se prolongó durante años y fue un tema candente en la industria de la tecnología. Aunque Apple argumentó que Microsoft había robado sus ideas, el juez dictaminó que Microsoft no había infringido los derechos de autor y que tenía el derecho de desarrollar un sistema operativo con una interfaz gráfica similar.",
            contenido19: "Microsoft obtuvo legalmente la tecnología del entorno gráfico y del ratón, y sacó al mercado Microsoft Windows, como directo competidor de Macintosh.",
            imagen4: microsoft4
        },
        {
            titulo: 'ANDREW CARNEGIE',
            contenido1: 'En un tiempo donde la pobreza se cernía como una sombra opresiva sobre la vida de los menos afortunados, un niño nació en las tierras escocesas en 1835. Andrew Carnegie, hijo de un desempleado tejedor, creció bajo el peso del hambre y la desesperanza. Pero el destino no fue cruel por mucho tiempo, ya que su familia emigró a Estados Unidos en busca de una vida mejor cuando tenía apenas 13 años.',
            contenido2: 'La semilla de la ambición ya estaba plantada en su corazón gracias a su tierra natal, y fue en las tierras estadounidenses donde esa semilla floreció en un terreno fértil. Carnegie, con su astucia y talento, encontró su lugar en una de las industrias en auge de Estados Unidos.',
            imagen1: carnegie1,
            titulo2: "",
            contenido3: "En las entrañas de la Compañía Ferroviaria de Pensilvania, su ascenso fue meteórico, una historia clásica del sueño americano. De muchacho pobre a hombre rico, su vida resonaba con la melodía del trabajo duro y la inteligencia incansable.",
            contenido4: "La educación y pasión de Carnegie por la lectura tomaron un giro significativo cuando el coronel James Anderson abrió las puertas de su biblioteca privada a los jóvenes trabajadores. Carnegie se alimentó de conocimiento y experiencias, cultivándose no solo en el ámbito económico, sino también en el intelectual y cultural. Pero, como en toda historia atrapante, había otro lado de la moneda.",
            titulo3: "Carrera y evolución en los negocios",
            contenido5: "1860-1865-Guerra de Secesion: Conforme ascendía en la jerarquía empresarial, tejía una red de inversiones que le permitirían forjar su propio camino. La Guerra de Secesión fue el telón de fondo para sus primeras incursiones en el negocio, formando asociaciones y haciendo movimientos estratégicos que harían que su fortuna creciera como el fuego devora la madera seca.",
            contenido6: "Antes de que estallara la Guerra Civil Estadounidense, Carnegie había formado una sociedad con el señor Woodruff, el inventor de un coche cama para los viajes de primera clase. Los coches cama facilitaban los viajes de negocios para distancias de aproximadamente 500 millas (805 km). La inversión demostró ser un éxito y una fuente de beneficios para Woodruff y Carnegie. El joven llegó a ser el superintendente de la Pennsylvania Railroad's Western Division, e introdujo varias mejoras en el servicio.",
            contenido7: "En 1864, Carnegie invirtió $ 40.000  en la granja Storey de Oil Creek en el Condado de Venango (Pensilvania). En un año, la granja produjo alrededor de $ 1.000.000  de dividendos en efectivo, y el petróleo de los pozos se vendió provechosamente. La demanda de productos derivados del hierro, tales como corazas para lanchas cañoneras, cañones y armazones, así como un centenar de otros productos industriales, hicieron de Pittsburgh un centro de producción durante el tiempo de la guerra.",
            contenido8: "",
            contenido9: "Tras la guerra, abandonó los ferrocarriles para dedicar todas sus energías al comercio con las fundiciones de hierro. Trabajó para mejorar varias fundiciones, finalmente formando parte de The Keystone Bridge Works y la Union Ironworks. Siendo superintendente de la Keystone Bridge Company's, se dio cuenta de la debilidad de las estructuras de madera tradicionales. Con el tiempo fueron reemplazadas en gran medida por puentes de hierro hecho en sus fundiciones.",
            titulo6:"1875-1900: El imperio del acero",
            imagen2: carnegie2,
            contenido10: "Carnegie logró amasar una fortuna en la industria del acero, controlando el mayor funcionamiento integrado de acero y hierro. Una de sus dos grandes innovaciones fue la reducción de costos gracias a la producción en masa de raíles de acero para vías férreas. El segundo fue implementar la integración vertical con todos los suministradores de materias primas. A finales de la década 1880, Carnegie Steel era la mayor fábrica de arrabio, raíles de acero y coque del mundo, con una capacidad productiva de aproximadamente 2000 toneladas de metal de arrabio al día. En 1888, compró a la empresa competidora Homestead Steel Works, que contaba con una enorme planta junto con el suministro de carbón y minas de hierro, una larga vía de ferrocarril de unos 685 km y una flota de barcos de vapor. Luego fusionó sus participaciones y las de sus asociados en 1892 al crear la empresa Carnegie Steel Company.",
            contenido11: "Hacia 1889, el excedente de acero de Estados Unidos superaba al de Inglaterra y Carnegie poseía la mayor parte",
            titulo4: "1892: Huelga de Homestead",
            contenido12: "Pero en el camino hacia la grandeza, dejó un rastro de sufrimiento y crueldad. La huelga de Homestead fue un choque sangriento entre el poder y los derechos de los trabajadores. Mientras Carnegie disfrutaba de lujosos viajes a Escocia, su socio Frick llevaba a cabo una lucha sin piedad contra los sindicatos. Las vidas se perdieron, el aire se llenó de humo y el acero de Carnegie se forjó en medio del caos y el dolor",
            contenido13: "La huelga de Homestead fue una sangrienta confrontación laboral que duró 143 días en 1892, una de las más graves en la historia de Estados Unidos. El conflicto se centró en la planta principal de Carnegie Steel en Homestead, y surgió de una disputa laboral entre la Asociación Amalgamada de Trabajadores del Hierro y el Acero (AA) y Carnegie Steel Company",
            contenido14: "Carnegie se fue de viaje a Escocia antes de que los disturbios alcanzaran su punto máximo. Al hacerlo, dejó la mediación de la disputa en manos de su socio Henry Clay Frick. Frick era bien conocido en los círculos industriales por mantener un firme sentimiento antisindical.  Con la industria del acero en desarrollo y los precios más altos, la AA pidió un aumento salarial. Dicho sindicato  representó a unos 800 de los 3.800 trabajadores de la planta. Frick respondió de inmediato con una disminución salarial promedio del 22 % que afectaría a casi la mitad de los miembros del sindicato y eliminaría varios puestos de la unidad de negociación. Aunque en público Carnegie condenó el uso de esquiroles y le dijo a los asociados que ninguna fábrica de acero era digna de derramar ni una sola gota de sangre,  apoyó la idea de Frick de destruir el sindicato y también se expresó a favor de reorganizar todo el asunto",
            contenido15: "El sindicato y la empresa no llegaron a un acuerdo y la dirección bloqueó al sindicato. Los trabajadores consideraron el paro como un cierre patronal de la dirección y no como una huelga de los trabajadores. Como tal, los trabajadores habrían estado dentro de su derecho a protestar, y la acción gubernamental subsecuente habría sido un conjunto de procedimientos criminales diseñados para aplastar lo que fue visto como una demostración fundamental del creciente movimiento de derechos laborales, fuertemente opuesto por la dirección. Frick trajo miles de rompehuelgas para trabajar en las acerías y agentes de Pinkerton (famosos por romper huelgas) para hostigar y atacar a los huelguistas.",
            imagen6: carnegie6,
            contenido16: "El 6 de julio, la llegada de una fuerza de 300 agentes de Pinkerton de la ciudad de Nueva York y Chicago resultó en una pelea en la que diez hombres murieron (siete huelguistas y tres matones de Pinkerton), y cientos resultaron heridos. El gobernador de Pensilvania, Robert Pattison, ordenó a dos brigadas de la milicia estatal que se dirigieran al lugar del ataque. Posteriormente, la empresa reanudó con éxito sus operaciones con empleados inmigrantes no sindicalizados en lugar de los trabajadores de la planta de Homestead, y Carnegie regresó a los Estados Unidos. Sin embargo, su reputacion fue dañada permanentemente por los eventos sucedidos.",
            contenido17: "Sin embargo, ¿qué hizo Carnegie con el dinero que ganó gracias a semejante derramamiento de sangre?",
            contenido18: "Gastó mucho en la construcción de 2.509 bibliotecas públicas gratuitas, con la intención de ayudar a trabajadores comunes a avanzar en la vida, como había hecho él.",
            contenido19: "Es un proyecto que aún continúa a través de instituciones como la Biblioteca Pública de Nueva York, en el corazón de Manhattan, con su red de 62 sucursales, que se construyeron con el dinero de Carnegie.",
            contenido20: "Para sus críticos, era simplemente una hipocresía que alguien como Carnegie se hiciera pasar por un amigo de los trabajadores.",
            contenido21: "En 1889 escribió su famoso ensayo 'El evangelio de la riqueza', donde propuso que los ricos deben ser administradores de la riqueza para beneficio de toda la sociedad, mediante las donaciones.",
            imagen5:carnegie5,
            contenido22:"Allí defiende el capitalismo, afirmando que tanto el empleador como el empleado hoy viven mejor que en el pasado gracias a todas las facilidades que trajo el nuevo sistema económico. Y señala que la riqueza de algunos trae beneficios para todos.",
            contenido23:"Aunque pagaba a sus empleados los bajos salarios típicos de esa época, luego donó la mayor parte de su dinero para financiar diversas bibliotecas, escuelas y universidades en Estados Unidos, el Reino Unido y otros países, así como para crear fondos de pensiones para los empleados de más antigüedad.",
            contenido24:"En un giro irónico, el hombre que abogaba por el evangelio de la riqueza gastó enormes sumas en bibliotecas públicas y obras filantrópicas. Las mismas manos que habían presidido conflictos brutales ahora extendían un manto de educación y apoyo. Sin embargo, su intento de lavar su conciencia dejaba un sabor amargo en los labios de aquellos que veían su caridad como una cortina que ocultaba la verdadera naturaleza de sus acciones.",
            contenido25:"La historia de Andrew Carnegie es un recordatorio crudo de los extremos de la ambición humana. Su ascenso es inspirador, su generosidad es admirable, pero no podemos olvidar las lágrimas y el sufrimiento que también marcaron su camino. En su legado, encontramos un espejo que refleja tanto el poder del éxito como la oscuridad que puede acechar detrás de él.",
        }
    ];

    const siguienteHistoria = () => {

        setHistoriaActual(historiaActual + 1);
        if (historiaActual - 1 !== 0) {
            setButtonBack(true)
        }
        if (historiaActual + 1 >= historias.length - 1) {
            setButtonNext(false)
        }
    };

    const anteriorHistoria = () => {
        setHistoriaActual(historiaActual - 1);
        if (historiaActual - 1 <= 0) {
            setButtonBack(false)
        }
        if (historiaActual + 1 !== 0) {
            setButtonNext(true)
        }
    };

    return (
        <>
            <NavBarBoostrap />
            <div className="containerHistory">
                <History
                    titulo={historias[historiaActual].titulo}
                    contenido1={historias[historiaActual].contenido1}
                    imagen1={historias[historiaActual].imagen1}
                    contenido2={historias[historiaActual].contenido2}
                    imagen2={historias[historiaActual].imagen2}
                    imagen3={historias[historiaActual].imagen3}
                    imagen4={historias[historiaActual].imagen4}
                    imagen5={historias[historiaActual].imagen5}
                    imagen6={historias[historiaActual].imagen6}
                    titulo2={historias[historiaActual].titulo2}
                    titulo3={historias[historiaActual].titulo3}
                    titulo4={historias[historiaActual].titulo4}
                    titulo5={historias[historiaActual].titulo5}
                    titulo6={historias[historiaActual].titulo6}
                    contenido3={historias[historiaActual].contenido3}
                    contenido4={historias[historiaActual].contenido4}
                    contenido5={historias[historiaActual].contenido5}
                    contenido6={historias[historiaActual].contenido6}
                    contenido7={historias[historiaActual].contenido7}
                    contenido8={historias[historiaActual].contenido8}
                    contenido9={historias[historiaActual].contenido9}
                    contenido10={historias[historiaActual].contenido10}
                    contenido11={historias[historiaActual].contenido11}
                    contenido12={historias[historiaActual].contenido12}
                    contenido13={historias[historiaActual].contenido13}
                    contenido14={historias[historiaActual].contenido14}
                    contenido15={historias[historiaActual].contenido15}
                    contenido16={historias[historiaActual].contenido16}
                    contenido17={historias[historiaActual].contenido17}
                    contenido18={historias[historiaActual].contenido18}
                    contenido19={historias[historiaActual].contenido19}
                    contenido20={historias[historiaActual].contenido20}
                    contenido21={historias[historiaActual].contenido21}
                    contenido22={historias[historiaActual].contenido22}
                    contenido23={historias[historiaActual].contenido23}
                    contenido24={historias[historiaActual].contenido24}
                    contenido25={historias[historiaActual].contenido25}
                    siguiente={siguienteHistoria}
                    anterior={anteriorHistoria}
                    buttonBack={buttonBack}
                    buttonNext={buttonNext}
                />
            </div>
            <ButtonBarBoostrap />
        </>
    );
};

export default PaginadoHistories;