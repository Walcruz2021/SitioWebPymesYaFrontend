import "./InversionBolsa.css";
import imgCrisis from "../Home/imagenes/crisisMexico/crisisTequila.jpg";
import imgPresidente from "../Home/imagenes/crisisMexico/CambioMando.jpg";
import imgFobaproa from "../Home/imagenes/crisisMexico/fobaproa.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./Leliqs.css";
import ComentaryFaceTequila from "../../components/ListNotes/ComentaryFaceTequila";
import ButtonDonacion from "./ButtonDonacion";

// import { useShare } from 'react-facebook';
const CrisisTequila = () => {
  // const { share, isLoading, error } = useShare();

  // async function handleShare() {
  //   await share({
  //     href: 'http://www.facebook.com',
  //   });
  // }

  const titulo = "Crisis de Tequila";
  const descripcion = "Informacion Crisis Tequila";
  const imagen = "URL-de-la-imagen-del-producto";
  const url = "www.pymesya.com/crisisMexico";

  const CONCEPTOS = [
    {
      id: "01",
      tag: "México · Economía",
      title: "El origen de la",
      italic: "Crisis del Tequila",
      desc: [
        "La crisis económica de México en 1994 se produjo por una combinación de deuda externa, devaluación del peso y pérdida de confianza de los inversores.",
        "La 'crisis del tequila' se llama así porque tuvo un gran impacto en México, que es famoso por su producción y exportación de tequila. La crisis afectó a muchas áreas de la economía mexicana, incluida la industria del tequila, y por eso se le dio ese nombre.",

      ],
      note:
        "La caída del peso mexicano generó una reacción financiera que impactó en toda América Latina.",
      reverse: false,
      items: [
        {
          label: "Deuda en dólares",
          desc: "México había tomado grandes préstamos en moneda extranjera.",
        },
        {
          label: "Caída del peso",
          desc: "La moneda mexicana perdió rápidamente su valor frente al dólar.",
        },
        {
          label: "Fuga de capitales",
          desc: "Los inversores retiraron sus fondos provocando una crisis financiera.",
        },
      ],
    },

    {
      id: "02",
      tag: "Política · Devaluación",
      title: "El error de",
      italic: "diciembre",
      desc: [

        "El cambio presidencial entre Salinas de Gortari y Ernesto Zedillo desencadenó decisiones económicas que agravaron la crisis. Unos cuantos días después, tuvo una reunión con varios empresarios mexicanos y extranjeros, comentando sobre la devaluación que vendría, con el objetivo primordial de detener la fuga de dólares de las reservas internacionales.",
        "Los críticos del gobierno de Zedillo argumentan que, aunque la devaluación era necesaria y económicamente coherente, se manejó incorrectamente en términos políticos: al haber anunciado sus planes de devaluación, muchos extranjeros retiraron sus inversiones, agravando los efectos de la devaluación. Sin poder mantener la nueva banda de la tasa de cambio, a principios de 1995, la administración del nuevo mandatario decidió establecer el sistema de libre flotación del peso, el cual llegaría a 7.20 pesos por dólar en tan solo una semana."
      ],
      reverse: true,
      img: imgPresidente,
      items: [
        {
          label: "Anuncio devaluación",
          desc: "El gobierno informó anticipadamente la devaluación a empresarios e inversores. Las decisiones de Zedillo, principalmente la de anunciar la devaluación a los inversionistas y el establecer el sistema de libre flotación, fueron el 'error de diciembre' de acuerdo con el expresidente Salinas de Gortari.",
        },
        {
          label: "Libre flotación",
          desc: "Cuando el dólar dejó de ser controlado por el gobierno el peso perdió la mitad de su valor, hecho que ocasionó que las deudas en dólares no pudieran ser pagadas.",
        },
        {
          label: "Impacto",
          desc: "Las deudas en dólares se volvieron impagables para empresas y ciudadanos.",
        },
      ],
    },

    {
      id: "03",
      tag: "Bonos · Finanzas",
      title: "Los polémicos",
      italic: "TESOBONOS",
      desc:
        [

          "Los Tesobonos fueron bonos emitidos por el gobierno mexicano y denominados en dólares para atraer inversores extranjeros.",
          "Fueron un tipo específico de bonos del gobierno mexicano emitidos durante la década de 1990. Su nombre proviene de la combinación de 'tesoro' y 'bonos'. Estos bonos fueron instrumentos de deuda utilizados por el gobierno mexicano para financiar su deuda pública y para obtener fondos en momentos de necesidad financiera.",
          "Lo que hizo que los Tesobonos fueran únicos y a veces controvertidos fue que estaban denominados en moneda extranjera, generalmente en dólares estadounidenses. Esto significa que el gobierno mexicano se comprometía a pagar intereses en dólares en lugar de pesos mexicanos. Esto se hizo para atraer a inversionistas extranjeros y para evitar la volatilidad de la moneda local.",
          "Sin embargo, cuando ocurrió la devaluación del peso mexicano en 1994 durante la llamada 'Crisis del Tequila', el gobierno mexicano enfrentó dificultades para pagar los intereses y el principal de los Tesobonos en dólares, ya que ahora estos pagos se volvieron mucho más caros en términos de pesos mexicanos. Esta situación contribuyó significativamente a la crisis financiera que enfrentó México en ese momento.",
        ],
      note:
        "La devaluación hizo extremadamente costoso pagar estos bonos.",
      reverse: false,
      items: [
        {
          label: "Crisis política y financiera en México (1994)",
          desc: "El candidato presidencial del Partido Revolucionario Institucional (en el gobierno desde 1929), favorito para las elecciones, Luis Donaldo Colosio, fue asesinado el 23 de marzo de ese año. Esto provocó que el saldo de los tesobonos se situara en 7,049 millones de pesos, esto fue un incremento del 83% respecto al de diciembre del año anterior. Unos meses después, José Francisco Ruiz Massieu, secretario general del PRI, también fué asesinado el 28 de septiembre.",
        },
        {
          label: "La guerra como conflicto político",
          desc: "El EZLN, una rebelión insurgente de Chiapas, le declaró la guerra al gobierno el 1 de enero de 1994. Aunque el conflicto armado terminó 2 semanas después, las inconformidades y peticiones de los insurgentes eran causa de preocupación, especialmente para los inversionistas.",
        },
        {
          label: "Pérdida de confianza y caída de reservas internacionales en México",
          desc: "Todos estos aspectos alarmaron a los inversionistas que habían adquirido los TESOBONOS, tanto mexicanos como algunos extranjeros, llevándolos a vender rápidamente y agotando así las reservas internacionales del Banco de México, que ya se encontraban en niveles muy bajos.",
        },
      ],
    },

    {
      id: "04",
      tag: "Bancos · Rescate financiero",
      title: "FOBAPROA:",
      italic: "Una deuda por décadas que las pagan los Probres",
      desc:
        [

          "El Fondo Bancario de Protección al Ahorro (Fobaproa) fue una dependencia de ahorro con el fin de ser un plan de contingencia a los bancos. Fue creado en 1990, en el sexenio de Salinas de Gortari, quien en conjunto con su partido de procedencia, el Partido Revolucionario Institucional (PRI), propusieron la estrategia. Sin embargo, fue el presidente sucesor, Ernesto Zedillo, quien llevó a cabo su implementación y desarrollo hasta 1995.",
          "El desarrollo del Fobaproa estuvo delimitado por la crisis económica que azotaba el país, donde diversos factores como la baja en las reservas de la nación, la inversión extranjera y la volatilidad de los precios, provocaron que las tasas de intereses se dispararán lo que resultó que empresas y la ciudadanía en general dejaran de pagar a los bancos, quienes tenía un mal manejo de gestión de deudas y cuotas, lo que provocó su caída.",
          "El caso Fobrapoa y la acumulación del hartazgo social por la inestabilidad política del partido hegemónico (PRI) fueron factores decisivos para que en las elecciones del año 2000 perdieran por primera vez, después de 30 años, el poder de gobernar el país",
          "Durante la crisis económica en México de 1994 y los años siguientes, el Fobaproa, su concepción, implementación y principales beneficiarios se convirtieron en uno de los temas más polémicos de la política mexicana, debido al endeudamiento estatal a largo plazo y donde se especuló que los ahorradores beneficiados eran allegados a la cúpula política del país y estában ligadas a polémicas de corrupción. El 55% de la deuda cubierta por el fondo estuvo destinada a empresarios y banqueros prominentes, que salieron de la crisis amasando grandes fortunas. Las más importantes controversias que se produjeron en torno al Fobaproa ocurrieron cuando personajes de las cúpulas empresariales ingresaron deudas de sus negocios a la cartera vencida que rescató el gobierno para que fuera éste quien las liquidara.",
          "El argumento principal de los defensores del Fobaproa es que los costos totales de no haber rescatado a la banca hubieran sido mayores debido al pánico que se pudo haber generado en los mercados financieros, profundizando la crisis iniciada en diciembre de 1994."

        ],
      reverse: true,
      img: imgFobaproa,
      items: [
        {
          label: "Rescate bancario",
          desc: "Ante esta crisis el Fobaproa salió al rescate de los bancos, sin embargo, la escena bancaria estaba envuelta en distintas polémicas como fraudes, evasiones fiscales y malas prácticas de empresarios.",
        },
        {
          label: "Deuda pública",
          desc: " Gracias a estas acciones, más el incremento inimaginable de la deuda, hicieron que el gobierno tomara la decisión de pasar el adeudo como un tema en el que toda la ciudadanía tenía que participar y la liquidez pasó a ser un problema estatal.",
        },
        {
          label: "Corrupción y deuda eterna",
          desc: "Esta práctica fue considerada como un caso de corrupción por parte de los bancos en conjunto del gobierno quienes pasaron las deudas de las instituciones como un deber público en 1999, el cual sigue siendo cobrado a través de los impuesto de la ciudadanía dejando limitada la infraestructura de otras áreas como salud, educación, seguridad, movilidad , entre muchas otras.",
        },
        {
          label: "Impacto y prolongación de la deuda del Fobaproa en México",
          desc: "El mismo año que el Fobaproa se asumió como deuda pública, se estimó que las obligaciones se pagarían en 30 años, pero un cálculo hecho por los economistas Fausto Hernández Trillo y Marcos Ávalos en 2006 (publicado por las Naciones Unidas, a través de la CEPAL) pronosticó que serían 70 años, asumiendo que el país tuviera un crecimiento económico anual de 4%. El nivel de endeudamiento generado, por concepto de intereses, se ha valuado en dos billones de pesos, lo que representa que aunque cada año se destinen entre 30 y 50 mil millones de pesos, dicha cantidad alcanzaría solo para cubrir los intereses generados.",
        }
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{titulo}</title>
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={imagen} />
        <meta property="og:url" content={url} />
      </Helmet>

      <div className="min-h-screen bg-white text-gray-900 font-inter">

        {/* ── HERO ── */}
        <section className="relative bg-black text-white overflow-hidden min-h-[40vh] sm:min-h-[60vh] flex items-end">

      

          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-10 sm:pb-16 pt-10"
          >
            <p className="text-gray-400 text-[12px] tracking-[0.5em] uppercase mb-7">
              México · Crisis · Economía
            </p>

            <h1 className="text-4xl sm:text-7xl font-black tracking-[-0.04em] leading-[1.7] mb-7">
              CRISIS<br />DEL TEQUILA
            </h1>

            <div className="w-16 h-px bg-gray-500 mb-6" />

            <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
              El colapso financiero que sacudió México en 1994
            </p>
          </motion.div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">
                Introducción
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                El terremoto financiero<br />
                <span className="text-gray-400 font-light italic">de México</span>
              </h2>

              <div className="w-10 h-0.5 bg-black mb-8" />

              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                En la década de 1990, un terremoto económico sacudió los cimientos de México, dejando a su paso una estela de incertidumbre y desafíos. Pero, ¿qué tiene que ver el agave, la planta emblemática del tequila mexicano, con esta devastadora crisis financiera?. Sorprendentemente, la respuesta no reside en las áridas tierras donde florecen los campos de agave, sino en las complejidades del sistema financiero internacional y las decisiones políticas internas. La "Crisis del Tequila" trascendió las fronteras de la industria tequilera para transformarse en un símbolo de las vulnerabilidades económicas de un país en desarrollo en un mundo globalizado.</p>
              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Imagina que eres dueño de una fábrica de juguetes y decides pedir un préstamo al banco para comprar materiales y expandir tu negocio. Al principio, todo va bien y estás produciendo muchos juguetes. Pero luego, resulta que hay un problema en la fábrica que hace que los juguetes no sean tan buenos como esperabas. Como resultado, la gente deja de comprar tus juguetes y tus ingresos comienzan a disminuir.

                En el caso de la "crisis del tequila", México había pedido prestado mucho dinero en dólares estadounidenses, pero luego el valor del peso mexicano comenzó a caer y como si esto fuera poco el dolar estaba fortalecido.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 pt-2"
            >


              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Esto hizo que fuera más difícil pagar esos préstamos, especialmente porque el gobierno mexicano tenía menos dinero debido a la caída en el precio del petróleo, que era una gran fuente de ingresos para el país.

              </p>


              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Esta crisis se presentó en el cambio de administración presidencial entre el ex presidente Carlos Salinas de Gortari y Ernesto Zedillo.

              </p>

<p className="text-gray-600 text-base leading-relaxed font-light text-justify">
Durante los primeros días del sexenio la devaluación del peso mexicano alcanzó las cifras más bajas en la historia incrementando el valor del dólar casi un 300% y desencadenando altas tasas de inflación, falta de capital en los bancos, interés muy altos y crisis en la actividad comercial forzando a miles de empresas a realizar recortes de personal o incluso el cierre completo de estas mismas
</p>
              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Como resultado, México enfrentó problemas económicos graves y tuvo que recibir ayuda financiera de otros países para recuperarse.

              </p>



            </motion.div>

          </div>
        </section>

        {/* ── IMAGEN PRINCIPAL ── */}
        <section className="py-0 sm:py-4 px-2 sm:px-8 bg-white flex justify-center">

          <div
            className="
          relative
          w-[98vw]
          sm:w-full
          max-w-7xl
          h-[260px]
          sm:h-[500px]
          overflow-hidden
          rounded-2xl
          sm:rounded-3xl
          border
          border-zinc-200
          bg-black
          p-0
          sm:p-2
          shadow-2xl
        "
          >

            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-10" />

            <img
              src={imgCrisis}
              alt="Crisis Tequila"
              className="
            w-full
            h-full
            object-cover
            rounded-xl
            sm:rounded-2xl
            grayscale
          "
            />
          </div>
        </section>

        {/* ── CONCEPTOS ── */}
        {CONCEPTOS.map(({ id, tag, title, italic, desc, items, note, reverse, img }, i) => (
          <div key={id}>

            <section
              className={`py-12 sm:py-20 px-6 sm:px-12 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
            >
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={reverse ? "order-1 lg:order-2" : ""}
                >
                  <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4 text-justify">
                    {tag}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6 text-justify">
                    {title}
                    <br />
                    <span className="text-gray-400 font-light italic">
                      {italic}
                    </span>
                  </h2>

                  <div className="w-10 h-0.5 bg-black mb-8" />

                  {/* ── DESC ── */}
                  {Array.isArray(desc) ? (
                    <div className="space-y-6">
                      {desc.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-gray-800 text-base leading-relaxed font-light text-justify text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-800 text-base leading-relaxed font-light text-justify text-justify">
                      {desc}
                    </p>
                  )}

                  {/* ── NOTE ── */}
                  {note && (
                    <p className="mt-6 text-gray-400 text-base font-light leading-relaxed border-l-2 border-gray-200 pl-4 italic text-justify">
                      {note}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${reverse ? "order-2 lg:order-1" : ""}`}
                >
                  <div className="absolute -top-4 -left-4 w-full h-full border border-gray-100" />

                  <div className="relative z-10 bg-black text-white p-8 space-y-6">

                    <p className="text-gray-500 text-[12px] tracking-[0.4em] uppercase">
                      {id}
                    </p>

                    {items.map(({ label, desc: itemDesc }) => (
                      <div key={label} className="flex gap-4 items-start">

                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />

                        <div>
                          <p className="text-white text-sm font-bold mb-1 text-justify">
                            {label}
                          </p>

                          <p className="text-gray-400 text-base font-light leading-relaxed text-justify">
                            {itemDesc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </section>

            {/* ── IMAGEN ── */}
            {img && (
              <section className="py-2 sm:py-10 px-2 sm:px-8 bg-white flex justify-center mb-4">

                <div
                  className="
            relative
            w-full
            max-w-5xl
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
            border
            border-zinc-200
            bg-black
            p-1
            sm:p-2
            shadow-2xl
          "
                >

                  <img
                    src={img}
                    alt="preview"
                    className="
              block
              w-full
              h-auto
              object-contain
              rounded-xl
              sm:rounded-2xl
              grayscale
            "
                  />
                </div>
              </section>
            )}
          </div>
        ))}

        {/* ── CIERRE ── */}
        <section className="bg-black text-white py-16 sm:py-20 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">
              — Reflexión final —
            </p>

            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed italic mb-6">
              "Las crisis económicas dejan marcas que pueden afectar generaciones enteras."
            </blockquote>

            <p className="text-gray-500 text-base font-light max-w-xl mx-auto">
              El caso mexicano continúa siendo estudiado como ejemplo de cómo las decisiones financieras y políticas pueden desencadenar enormes consecuencias sociales.
            </p>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default CrisisTequila;
