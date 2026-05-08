import "./InversionBolsa.css";
import finviz from "../Home/imagenes/bolsaValores/imgFinViz.png";
import rsi from "../Home/imagenes/bolsaValores/RSI.png";
import sFloat from "../Home/imagenes/bolsaValores/shortFloat.png";
import avgVolume from "../Home/imagenes/bolsaValores/avgVolume.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import ButtonDonacion from "./ButtonDonacion";

import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
// import { useShare } from 'react-facebook';

const CONCEPTOS = [
  {
    id: "SHORT FLOAT",
    tag: "Sentimiento de mercado",
    title: "Short Float",
    italic: "posiciones cortas",
    desc: "Porcentaje de acciones en circulación de una compañía que han sido vendidas en corto por los inversores. Se expresa como porcentaje y puede utilizarse como indicador del sentimiento del mercado. Cuando los inversores venden en corto una acción, están tomando prestados acciónes de un corredor y la venden en el mercado con la esperanza de recomprarlas a un precio más bajo en el futuro. Si tienen éxito, obtendrán una ganancia al devolver las acciones prestadas al corredor",
    items: [
      { label: "Alto Short Float", desc: "Existe un sentimiento negativo generalizado hacia esa compañía." },
      { label: "Bajo Short Float", desc: "Hay menos inversores vendiendo en corto. Sugiere un sentimiento más positivo." },
    ],
    note: "Un short float por encima del 20% se considera relativamente alto, pero siempre debe evaluarse en contexto: industria, situación del mercado y otros factores.",
    reverse: false,
    img: sFloat
  },
  {
    id: "RSI",
    tag: "Fuerza relativa",
    title: "RSI",
    italic: "índice de fuerza",
    desc: "Se utiliza para identificar posibles puntos de inflexión en el precio de un activo y ayudar a los inversores a tomar decisiones informadas sobre la compra o venta de acciones.",
    items: [
      { label: "RSI menor a 30", desc: "Activo sobrevendido. Puede producirse una corrección o reversión al alza." },
      { label: "RSI mayor a 70", desc: "Activo sobrecomprado. Podría producirse una corrección o reversión a la baja." },
    ],
    note: "Generalmente se usa en períodos de índices pero puede adaptarse a períodos más cortos o más largos.",
    reverse: true,
    img: rsi
  },
  {
    id: "TARGET PRICE",
    tag: "Precio objetivo",
    title: "Target Price",
    italic: "estimación futura",
    desc: "Es una estimación utilizada como guía para los inversionistas al tomar decisiones sobre comprar, vender o mantener una acción. Si el TARGET price es mayor que el precio actual de mercado, podría ser una señal de que espera que la acción se aprecie, y sea una buena oportunidad de compra. Por otro lado si TP es menor PAM podría indicar que se espera que la acción se deprecie y ser una señal de venta",
    items: [
      { label: "TP mayor al precio actual", desc: "Se espera que la acción se aprecie. Posible señal de compra." },
      { label: "TP menor al precio actual", desc: "Se espera que la acción se deprecie. Posible señal de venta." },
    ],
    note: null,
    reverse: false
  },
  {
    id: "AVERAGE VOLUME",
    tag: "Liquidez y actividad",
    title: "Average Volume",
    italic: "volumen promedio",
    desc: "Indicador importante que proporciona una idea de la liquidez y la actividad comercial de una acción o valor financiero.",
    items: [
      { label: "Alto", desc: "Mayor liquidez e interés de los participantes del mercado. Señal de mayor actividad y oportunidades." },
      { label: "Bajo", desc: "Menor liquidez e interés. Puede dificultar la compra/venta en grandes cantidades sin afectar el precio." },
    ],
    note: null,
    reverse: true,
    img: avgVolume
  },
  {
    id: "OVERSOLD",
    tag: "Presión de venta",
    title: "Oversold",
    italic: "sobrevendido",
    desc: "Situación en la que el precio de una acción ha caído en exceso y se considera por debajo de su valor intrínseco o fundamental subyacente.",
    items: [
      { label: "¿Qué implica?", desc: "Ha habido una presión excesiva de venta. Puede ser una oportunidad para comprar a precios más bajos antes de una recuperación." },
    ],
    note: null,
    reverse: false
  },
];

const OTROS = [
  { label: "BOOK/SH", desc: "Valor Contable (Activo - Pasivo) por acción." },
  { label: "CASH/SH", desc: "Dinero disponible por cada acción." },
  { label: "DIVIDENDO", desc: "Retorno que otorgará la empresa por cada acción de forma anual." },
  { label: "DIVIDENDO %", desc: "Porcentaje de dólares: Dividendo / Precio actual de la acción." },
  { label: "PAYOUT %", desc: "Porcentaje de beneficios que se destina al pago de dividendos." },
];

const InversionBolsa = () => {
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

  const titulo = "Inversion en Bolsa";
  const descripcion = "Consejos a la hora de Invertir";
  const imagen = "URL-de-la-imagen-del-producto";
  const url = "www.pymesya.com/inversionBolsa";

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
        <section className="relative bg-black text-white overflow-hidden min-h-[35vh] flex items-end">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-10 sm:pb-16 pt-10 sm:pt-10"
          >
            <p className="text-gray-400 text-[12px] tracking-[0.5em] uppercase mb-7">
              Finanzas · Inversión · Educación
            </p>
            <h1 className="text-4xl sm:text-7xl font-black tracking-[-0.04em] leading-[1.1] sm:leading-[2] mb-7">
              INVERSIÓN<br />EN BOLSA
            </h1>
            <div className="w-16 h-px bg-gray-500 mb-6" />
            <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
              Conceptos clave que debés conocer antes de invertir
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
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Introducción</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                El primer paso:<br />
                <span className="text-gray-400 font-light italic">educarse</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mb-8" />
              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Para tener éxito a la hora de invertir en la bolsa, es importante hacer una investigación exhaustiva y tomar decisiones informadas. El consejo principal es la <span className="font-semibold text-gray-800">educación y el conocimiento</span>.
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
                Antes de invertir, dedicá tiempo a aprender cómo funciona el mercado de valores, los tipos de inversiones disponibles y las estrategias existentes.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Familiarizarse con los conceptos es clave. Además, es importante saber <span className="font-semibold text-gray-800">dónde observar estos datos</span> al investigar una empresa. Para eso, la herramienta recomendada es <span className="font-semibold text-gray-800">FinViz</span>.
              </p>
              <a
                href="https://finviz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-block border border-black text-black text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-black hover:!text-white transition-colors duration-500"
              >
                Visitar FinViz →
              </a>
            </motion.div>
          </div>
        </section>



        {/* ── FINVIZ HIGHLIGHT ── */}
        <section className="bg-black text-white py-14 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex items-center gap-8"
          >
            <span className="text-6xl sm:text-8xl font-black text-gray-800 leading-none shrink-0">FV</span>
            <div>
              <p className="text-gray-500 text-[12px] tracking-[0.4em] uppercase mb-2">Herramienta recomendada</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3 mt-10">FinViz</h3>
              <p className="text-gray-400 font-light text-base leading-relaxed max-w-xl">
                Proporciona toda la información necesaria a la hora de invertir. Buscá la compañía por su etiqueta (ticker). Por ejemplo, para Microsoft:  <span className="text-white font-bold ml-1"> MSFT y podrás visualizar la siguiente tabla</span>.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="py-6 sm:py-10 px-2 sm:px-8 bg-white flex justify-center">

          <div
            className="
      relative
      w-[98vw]
      sm:w-full
      max-w-7xl

      h-[260px]
      sm:h-[400px]
      md:h-[400px]
      lg:h-[450px]

      overflow-hidden
      rounded-2xl
      sm:rounded-3xl
      border
      border-zinc-200
      bg-zinc-900
      p-1
      sm:p-2
      shadow-2xl
    "
          >

            {/* Efecto de luz */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-10" />

            {/* Imagen */}
            <img
              src={finviz}
              alt="Preview"
              className="
        w-full
        h-full
        object-cover
        rounded-xl
        sm:rounded-2xl

        grayscale
        contrast-125
        brightness-95

        transition-all
        duration-500
        hover:scale-[1.02]
        hover:grayscale-0
        hover:brightness-110
      "
            />
          </div>
        </section>

        {/* ── CONCEPTOS ── */}
        {CONCEPTOS.map(({ id, tag, title, italic, desc, items, note, reverse, img }, i) => (
          <div>
          

            <section
              key={id}
              className={`py-12 sm:py-20 px-6 sm:px-12 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={reverse ? "order-1 lg:order-2" : ""}
                >
                  <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">{tag}</p>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                    {title}<br />
                    <span className="text-gray-400 font-light italic">{italic}</span>
                  </h2>
                  <div className="w-10 h-0.5 bg-black mb-8" />
                  <p className="text-gray-800 text-base leading-relaxed font-light text-justify">{desc}</p>
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
                    <p className="text-gray-500 text-[12px] tracking-[0.4em] uppercase">{id}</p>
                    {items.map(({ label, desc: itemDesc }) => (
                      <div>

                        <div key={label} className="flex gap-4 items-start">

                          <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                          <div>
                            <p className="text-white text-sm font-bold mb-1">{label}</p>
                            <p className="text-gray-400 text-base font-light leading-relaxed">{itemDesc}</p>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </section>
              {img ? (
              <section className="py-2 sm:py-10 px-2 sm:px-8 bg-white flex justify-center">

                <div
                  className="
        relative

        w-full
        max-w-[300px]

        overflow-hidden
        rounded-2xl
        sm:rounded-3xl

        border
        border-zinc-200

        bg-zinc-900

        p-1
        sm:p-2

        shadow-2xl
      "
                >

                  {/* Efecto de luz */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-10" />

                  {/* Imagen */}
                  <img
                    src={img}
                    alt="Preview"
                    className="
          block

          w-full
          h-auto

          object-contain

          rounded-xl
          sm:rounded-2xl

          grayscale
          contrast-125
          brightness-95

          transition-all
          duration-500

          hover:scale-[1.01]
          hover:grayscale-0
          hover:brightness-105
        "
                  />
                </div>
              </section>
            ) : null}
          </div>
        ))}

        {/* ── OTROS CONCEPTOS ── */}
        <section className="py-15 sm:py-17 px-6 sm:px-12 bg-white border-t border-gray-100 mb-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-14"
            >
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Glosario</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                Otros conceptos<br />
                <span className="text-gray-400 font-light italic">a tener en cuenta</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mt-6" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OTROS.map(({ label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="border border-gray-100 p-8 hover:border-gray-300 transition-colors duration-300"
                >
                  <p className="font-black text-gray-900 tracking-tight mb-3 text-sm">{label}</p>
                  <p className="text-gray-500 text-base font-light leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE CIERRE ── */}
        <section className="bg-black text-white py-16 sm:py-20 px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">— Reflexión final —</p>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed italic mb-6">
              "La diversificación y la educación financiera son claves para tomar decisiones informadas."
            </blockquote>
            <p className="text-gray-500 text-base font-light max-w-xl mx-auto">
              La inversión en bolsa implica riesgos y no hay garantía de ganancias. Es importante tener una estrategia bien pensada y ser paciente a lo largo del tiempo.
            </p>
          </motion.div>
        </section>

        {/* ── MÁS CONSEJOS ── */}
        <section className="py-16 sm:py-20 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-8">— Te puede interesar —</p>
              <Link
                to="/consejos-sitio-web"
                className="no-underline group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-black text-white p-8 sm:p-10 hover:bg-gray-900 transition-colors duration-300"
              >
                <div>
                  <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase mb-3">Más contenido</p>
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-2">
                    Click aquí para<br />
                    <span className="text-gray-400 font-light italic">más consejos</span>
                  </h3>
                  <p className="text-gray-500 text-base font-light">
                    Explorá más guías y recursos para hacer crecer tu negocio.
                  </p>
                </div>
                <span className="text-4xl sm:text-6xl font-black text-gray-700 group-hover:text-gray-500 transition-colors duration-300 shrink-0">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}

      </div>

    </>
  );
};

export default InversionBolsa;
