import "./InversionBolsa.css";
import imgLeliq from "../Home/imagenes/leliqsInformeImg.png";
//import { Helmet } from "react-helmet";
import imgCaputo from "../Home/imagenes/luisCaputo.webp";
import imgLeliqs from "../Home/imagenes/lelics2.jpg";
import "./Leliqs.css";
import ComentaryFace from "../../components/ListNotes/ComentaryFaceHistory";
import ButtonDonacion from "./ButtonDonacion";
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// import { useShare } from 'react-facebook';
const Leliqs = () => {
  // const { share, isLoading, error } = useShare();

  // async function handleShare() {
  //   await share({
  //     href: 'http://www.facebook.com',
  //   });
  // }



  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  const CONCEPTOS = [
    {
      id: "01",
      tag: "Banco Central · Economía",
      title: "¿Qué son las",
      italic: "LELIQs?",
      desc: [
        "Seguramente has escuchado sobre Javier Milei, el presidente electo de Argentina, quien propone resolver primero el problema de las Leliqs antes de liberar el cepo, todo para evitar una hiperinflación. Pero, ¿qué son exactamente las Leliqs y cómo influyen en nuestras vidas?",

        "Las LELIQs se crearon para controlar la cantidad de dinero circulante, gestionadas en este caso por nuestro Banco Central.",

        "Si lo trasladamos a la vida cotidiana, imagina que eres dueño de un juego con varios participantes y decides guardar una cantidad considerable de fichas tuyas y de tus amigos en una caja manejada exclusivamente por ese grupo selecto. Esto implica que habrá menos fichas para los demás.",

        "En este caso, las fichas representan los pesos para el Banco Central, buscando controlar su cantidad. Por eso, ofrece a los bancos más pequeños una suerte de caja donde pueden depositar sus pesos, y a cambio el banco central les paga intereses.",



      ],
      note:
        "Las LELIQs fueron utilizadas como herramienta para absorber pesos del mercado y reducir la circulación monetaria.",
      reverse: false,
      img: imgLeliqs,
      items: [
        {
          label: "Un sistema financiero basado en depósitos e intereses bancarios",
          desc: "Funciona como un plazo fijo, de manera similar a cuando un banco pequeño te paga intereses por depositar ahorros en una cuenta.",

        },
        {
          label: "Circulación del dinero y el crédito",
          desc: "Al tener esos pesos guardados en las LELIQs, los bancos más pequeños disponen de menos dinero para prestar o gastar, lo que reduce la circulación de dinero.",

        },
        {
          label: "Freno de la inflación y regulación de la economía",
          desc: "Esto ayuda al banco grande a controlar la cantidad de dinero disponible en la economía para evitar que los precios (la inflación) se disparen demasiado, y así hacer que todo funcione mejor (aunque en la práctica, esta teoría no funcionó).",

        },
      ],
    },

    {
      id: "02",
      tag: "Economía · Vida cotidiana",
      title: "¿Cómo impactan",
      italic: "en nuestra vida?",
      desc: [
        "Las LELIQs y su influencia en la economía pueden impactar a personas de distintos estratos sociales, incluyendo a los más pobres. Su efecto puede ser indirecto pero significativo.",

        "Si los bancos tienen menos dinero disponible debido a que lo están invirtiendo en LELIQs, puede ser más difícil obtener préstamos para quienes buscan financiamiento, incluidos los emprendedores y personas de bajos ingresos que necesitan crédito para sus negocios o necesidades diarias.",

        "Esto puede impactar de manera negativa en su capacidad de invertir o mejorar su situación financiera.",

        "Si las políticas relacionadas con las LELIQs contribuyen a mantener una economía más estable, puede haber un impacto positivo en la creación de empleo y en la actividad económica en general.",

      ],
      reverse: true,
      items: [
        {
          label: "Créditos y préstamos",
          desc: "La menor disponibilidad de dinero puede dificultar el acceso al financiamiento para personas y pequeños emprendedores.",
        },
        {
          label: "Actividad económica",
          desc: "Una economía con menos circulación monetaria puede desacelerar el consumo y las inversiones. Esto provoca una disminución en las ventas, afecta a los comercios y puede generar una desaceleración general de la actividad económica. Aunque estas medidas buscan controlar la inflación, también pueden frenar el crecimiento económico si se mantienen durante mucho tiempo.",
        },
        {
          label: "Empleo",
          desc: "Si las políticas restringen demasiado el flujo de dinero en la economía, podrían limitar el crecimiento y afectar la generación de empleo, lo que podría impactar a los más pobres, que a menudo dependen más de empleos informales o vulnerables.",
        },
      ],
    },

    {
      id: "03",
      tag: "Sistema financiero · Restricciones",
      title: "¿Quiénes pueden",
      italic: "acceder?",
      desc: [
        "Ninguna persona física o jurídica (EXCEPTO LOS BANCOS) pueden acceder a las mismas.",

        "Las LELIQs fueron creadas en enero de 2018, durante la presidencia de Federico Sturzenegger al frente del Banco Central y con el fin de mantener estable la emisión monetaria.",

        "Tras la devaluación post PASO del 22% que implementó el Gobierno, en agosto, el Banco Central aplicó una suba de tasas de 21 puntos porcentuales y fijó el rendimiento de las Leliq en el 133%.",

        "Pero la de las Leliq no es una deuda cualquiera porque el Banco Central no necesita pesos para nada, de hecho, puede emitir dinero prácticamente al infinito.",
      ],
      note:
        "Las LELIQs son instrumentos exclusivos para entidades bancarias autorizadas.",
      reverse: false,
      items: [
        {
          label: "Acceso exclusivo",
          desc: "Solo los bancos pueden operar directamente con LELIQs emitidas por el Banco Central. Las personas comunes y las empresas no pueden acceder de manera directa, sino únicamente a través de los bancos, que utilizan estos mecanismos para administrar su dinero, liquidez y capacidad de otorgar préstamos.",
        },
        {
          label: "Origen",
          desc: "Fueron creadas en 2018 para intentar controlar la emisión monetaria y estabilizar la economía.",
        },
        {
          label: "Altas tasas",
          desc: "Las tasas de interés extremadamente elevadas provocaron un rápido crecimiento de la deuda remunerada, ya que el Banco Central debía pagar cada vez más intereses sobre estos instrumentos financieros. Con el paso del tiempo, esto generó una acumulación cada vez mayor de deuda, aumentando los costos financieros y la presión sobre la economía.",
        },
      ],
    },

    {
      id: "04",
      tag: "Inflación · Bancos",
      title: "¿Por qué es tan difícil",
      italic: "desarmarlas?",
      desc: [
        "La dificultad para desarmar las LELIQs radica en equilibrar la reducción de estos instrumentos con la estabilidad financiera, evitando impactos negativos en las tasas de interés, la inflación y la salud general del sistema financiero.",

        "Requiere una gestión cuidadosa y gradual para minimizar riesgos y perturbaciones en la economía.",

        "Los bancos suelen utilizar las LELIQs como una forma de invertir sus fondos excedentes y obtener ganancias.",

        "Si se reduce abruptamente la cantidad de LELIQs disponibles, los bancos podrían enfrentar dificultades para obtener rendimientos seguros y estables en sus inversiones.",

      ],
      reverse: true,
      items: [
        {
          label: "Equilibrio financiero",
          desc: "Eliminar las LELIQs demasiado rápido podría generar inestabilidad en el sistema financiero.",
        },
        {
          label: "Riesgo bancario",
          desc: "Los bancos dependen de estos instrumentos para generar rendimientos y administrar liquidez. Además, funcionan como una herramienta segura y de corto plazo para mantener parte de su dinero inmovilizado mientras regulan cuánto capital destinan a préstamos, inversiones o disponibilidad inmediata dentro del sistema financiero.",
        },
        {
          label: "Desconfianza",
          desc: "Implicaría un origen de dificultades a la hora de pagar ganancias a sus ahorristas, provocando que las personas por desconfianza retiren sus ahorros de los bancos en forma masiva.",
        },
      ],
    },

    {
      id: "05",
      tag: "Milei · Caputo · Economía",
      title: "Luis Toto",
      italic: "Caputo",
      desc: [
        "Si bien no era el candidato principal, terminó quedándose con uno de los puestos clave de lo que será la gestión económica de Javier Milei: el ministerio de Economía.",

        "Se trata de Luis 'Toto' Caputo, un nombre ya conocido tras su desempeño durante la gestión de Cambiemos entre 2015 y 2019.",

        "Luis Caputo es economista de la Universidad de Buenos Aires. Sin embargo la mayoría de sus pares, colegas y ex compañeros del gabinete económico del Gobierno de Mauricio Macri, lo definen como un trader, un Lobo de Wall Street y no como un macroeconomista.",

        "“El Messi de las finanzas”, como rotuló una vez Marcos Peña a Caputo en 2016, siempre fue convocado por Macri para tareas puntuales y específicas. Casi como un bombero o un troubleshooter.",

        "La principal tarea de Caputo consistiría en una operación de ingeniería financiera para bajar el stock de las Leliq en poder de los bancos y que según Milei es la precondición para levantar el cepo.",



        "Por otro lado Luis Toto Caputo fue y es muy criticado por su desempeño. Principalmente por el sector Kirchnerista y de la Izquierda.",

        "Lo consideran como un funcionario con un largo recorrido al servicio de los pulpos financieros.",

      ],
      reverse: false,
      img: imgCaputo,
      items: [
        {
          label: "Ingeniería financiera",
          desc: "Caputo estaría pensando en reemplazar esos títulos por un bono en dólares de legislación extranjera.",
        },
         {
          label: "¿Qué significa esto?",
          desc: "Es un cambio de activos: de títulos en pesos a bonos en dólares. Como cuando cambias billetes de una película que ya no te gusta por boletos de una película que te emociona mucho más.",
        },
          {
          label: "Cómo este cambio podría afectar la economía",
          desc: "Esto podría ser útil para los bancos porque los bonos en dólares pueden ser más estables y seguros en algunos casos, especialmente si la moneda local está perdiendo valor. También, este cambio puede ayudar al gobierno a hacer ajustes en sus políticas económicas, como quitar algunas reglas que limitan la compra de dólares.",
        },
        {
          label: "Levantamiento del cepo",
          desc: "Según Milei, resolver las LELIQs sería un paso previo necesario para liberar el mercado cambiario.",
        },
        {
          label: "Críticas",
          desc: "Caputo es cuestionado por sectores políticos que lo vinculan con el endeudamiento argentino y acuerdos con el FMI. Sin ir más lejos fue Caputo quien propuso y llevó adelante el acuerdo con el FMI, que nos endeudó por el monto récord de 45.000 millones de dólares.",
        },
      ],
    },
  ];

  return (
    <>
      {/* <Helmet>
                <title>{titulo}</title>
                <meta property="og:title" content={titulo} />
                <meta property="og:description" content={descripcion} />
                <meta property="og:image" content={imagen} />
                <meta property="og:url" content={url} />
            </Helmet> */}



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
              Argentina · Economía · Banco Central
            </p>

            <h1 className="text-4xl sm:text-7xl font-black tracking-[-0.04em] leading-[1.1] sm:leading-[1.7] mb-7">
              LELIQS
            </h1>

            <div className="w-16 h-px bg-gray-500 mb-6" />

            <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
              El instrumento financiero que marcó el debate económico argentino
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
                El problema financiero<br />
                <span className="text-gray-400 font-light italic">
                  detrás de la inflación
                </span>
              </h2>

              <div className="w-10 h-0.5 bg-black mb-8" />

              <p className="text-gray-600 text-base leading-relaxed font-light text-justify mb-6">
                Seguramente has escuchado hablar sobre las LELIQs en debates políticos y económicos de Argentina. Este instrumento financiero emitido por el Banco Central se convirtió en uno de los temas más discutidos de los últimos años debido a su impacto sobre la inflación, los bancos y la estabilidad económica.
              </p>

              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Aunque su funcionamiento puede parecer complejo, las LELIQs afectan indirectamente la vida cotidiana de millones de personas a través del crédito, el empleo, la inflación y la circulación del dinero.
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
                El Banco Central utiliza las LELIQs como una herramienta para absorber pesos del mercado y disminuir la presión inflacionaria. A cambio, paga altas tasas de interés a los bancos que depositan su dinero en estos instrumentos.
              </p>

              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Sin embargo, con el paso del tiempo, el crecimiento del stock de LELIQs y los intereses acumulados generaron un enorme debate económico y político sobre cómo resolver el problema sin provocar una crisis mayor.
              </p>
            </motion.div>

          </div>
        </section>

  

        {/* ── CONCEPTOS ── */}
        {CONCEPTOS.map(
          (
            {
              id,
              tag,
              title,
              italic,
              desc,
              items,
              note,
              reverse,
              img,
            },
            i
          ) => (
            <div key={id}>

              <section
                className={`py-12 sm:py-20 px-6 sm:px-12 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
              >
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                  {/* ── TEXTO ── */}
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

                    {/* ── PÁRRAFOS ── */}
                    {Array.isArray(desc) ? (
                      <div className="space-y-6">

                        {desc.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-800 text-base leading-relaxed font-light text-justify"
                          >
                            {paragraph}
                          </p>
                        ))}

                      </div>
                    ) : (
                      <p className="text-gray-800 text-base leading-relaxed font-light text-justify">
                        {desc}
                      </p>
                    )}

                    {/* ── NOTE ── */}
                    {note && (
                      <p className="mt-6 text-gray-400 text-base font-light leading-relaxed border-l-2 border-gray-400 pl-4 italic text-justify">
                        {note}
                      </p>
                    )}
                  </motion.div>

                  {/* ── PANEL DERECHO ── */}
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative ${reverse ? "order-2 lg:order-1" : ""
                      }`}
                  >

                    <div className="absolute -top-4 -left-4 w-full h-full border border-gray-100" />

                    <div className="relative z-10 bg-black text-white p-8 space-y-6">

                      <p className="text-gray-500 text-[14px] tracking-[0.4em] uppercase">
                        {id}
                      </p>

                      {items.map(({ label, desc: itemDesc }) => (
                        <div
                          key={label}
                          className="flex gap-4 items-start"
                        >

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
          )
        )}

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
              "Resolver el problema de las LELIQs implica equilibrar inflación, bancos y estabilidad económica."
            </blockquote>

            <p className="text-gray-500 text-base font-light max-w-xl mx-auto">
              Las decisiones financieras tomadas por el Banco Central impactan directamente en el crédito, el empleo, el valor del peso y la vida cotidiana de millones de argentinos.
            </p>

          </motion.div>
        </section>
      </div>

    </>
  );
};

export default Leliqs;
