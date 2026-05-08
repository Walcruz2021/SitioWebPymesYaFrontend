
import subprime from "../Home/imagenes/bolsaValores/crisisSubprime1.jpg";
import subprime2 from "../Home/imagenes/bolsaValores/crisisSubprime2.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./VariacionesBolsa.css";
import ButtonDonacion from "./ButtonDonacion";
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const VariacionesBolsa = () => {
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

  const FACTORES = [
    {
      num: "01",
      title: "Economía global y nacional",
      desc: "El crecimiento del PIB, la tasa de desempleo, la inflación y la política monetaria impactan directamente en el rendimiento de las bolsas.",
    },
    {
      num: "02",
      title: "Noticias y eventos geopolíticos",
      desc: "Acontecimientos políticos, sociales y económicos nacionales e internacionales generan incertidumbre y afectan las decisiones de los inversores.",
    },
    {
      num: "03",
      title: "Resultados empresariales",
      desc: "Los informes de ganancias trimestrales y anuales influyen en el precio de las acciones. Buenos resultados generan confianza; malos resultados provocan ventas masivas.",
    },
    {
      num: "04",
      title: "Política y regulación",
      desc: "Nuevos impuestos, reformas fiscales o medidas regulatorias pueden afectar la confianza de los inversores y mover los mercados.",
    },
    {
      num: "05",
      title: "Tasas de interés",
      desc: "Tasas bajas hacen más atractivas las acciones frente a los bonos. Tasas altas pueden generar el efecto contrario.",
    },
    {
      num: "06",
      title: "Eventos naturales y desastres",
      desc: "Terremotos, huracanes u otros eventos inesperados generan volatilidad si afectan la capacidad operativa de las empresas.",
    },
  ];

  const CONSECUENCIAS = [
    { title: "Desempleo masivo", desc: "La recesión global resultó en pérdida masiva de empleos. Muchas empresas redujeron plantillas o cerraron. La tasa de desempleo aumentó significativamente en todo el mundo." },
    { title: "Caída de la demanda", desc: "Con el desempleo en alza y la confianza destruida, la demanda de bienes y servicios se desplomó. Industrias como la automotriz, la construcción y el turismo fueron las más golpeadas." },
    { title: "Rescates financieros", desc: "Los gobiernos tuvieron que intervenir con enormes rescates a bancos y financieras. Estos se financiaron con dinero público, disparando la deuda soberana en muchos países." },
    { title: "Caída bursátil global", desc: "Los mercados de valores experimentaron caídas dramáticas en todo el mundo. Los inversores perdieron una cantidad sustancial de dinero en cuestión de semanas." },
    { title: "Reestructuración financiera", desc: "Muchas instituciones se vieron obligadas a fusionarse o cerrar. La crisis expuso la falta de regulación y la asunción de riesgos excesivos del sistema." },
  ];
  return (
    <>

      <div className="min-h-screen bg-white text-gray-900 font-inter">

        {/* ── HERO ── */}
        <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-end">
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
            className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-16 pt-28"
          >
            <p className="text-gray-400 text-[12px] tracking-[0.5em] uppercase mb-6">
              Finanzas · Mercados · Crisis
            </p>
            <h1 className="text-5xl sm:text-8xl font-black tracking-[-0.04em] leading-[1.5] mb-6 mt-20">
              VARIACIONES<br />DE LA BOLSA
            </h1>
            <div className="w-16 h-px bg-gray-500 mb-6" />
            <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed mt-20">
              Qué mueve los mercados y cómo una crisis puede sacudir la economía mundial
            </p>
          </motion.div>
        </section>

        {/* ── INTRODUCCIÓN FACTORES ── */}
        <section className="py-18 sm:py-27 px-6 sm:px-12 bg-white mt-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-14"
            >
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Factores clave</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                ¿Qué mueve<br />
                <span className="text-gray-300 font-light italic">los mercados?</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mb-8" />
              <p className="text-gray-600 text-base leading-relaxed font-light max-w-2xl text-justify">
                Las bolsas de valores son sistemas complejos influenciados por una amplia gama de factores. Estos no actúan de manera aislada y están frecuentemente interconectados, lo que contribuye a la naturaleza impredecible de los mercados.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACTORES.map(({ num, title, desc }) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border border-gray-100 p-8 hover:border-gray-300 transition-colors duration-300"
                >
                  <span className="text-4xl font-black text-gray-300 block mb-4 leading-none">{num}</span>
                  <p className="font-black text-gray-900 tracking-tight mb-3">{title}</p>
                  <p className="text-gray-500 text-sm font-light leading-relaxed text-justify">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIVIDER CRISIS SUBPRIME ── */}
        <section className="bg-black text-white py-20 px-6 sm:px-15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex items-center gap-8"
          >
            <span className="text-7xl sm:text-9xl font-black text-gray-800 leading-none shrink-0">2008</span>
            <div>
              <p className="text-gray-500 text-[12px] tracking-[0.4em] uppercase mb-2">Crisis global</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                Crisis Subprime
              </h3>
              <p className="text-gray-400 font-light text-base leading-relaxed max-w-xl text-justify">
                Una crisis financiera que sacudió la economía mundial. Se originó en los Estados Unidos y rápidamente se contagió al conjunto de economías globales.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── EL EFECTO DOMINÓ ── */}
        <section className="py-27 sm:py-30 px-6 sm:px-12 bg-gray-50 mt-20 mb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">El detonante</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                El efecto<br />
                <span className="text-gray-300 font-light italic">dominó</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mb-8" />
              <p className="text-gray-600 text-base leading-relaxed font-light mb-4 text-justify">
                Algunos bancos comenzaron a prestar dinero a personas con bajo historial crediticio — los llamados préstamos <span className="font-semibold text-gray-800">"subprime"</span>. Al principio todo parecía bien. Pero luego, como en un juego de dominós, cuando una ficha cae, afecta a las demás.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
                Muchas personas no podían pagar sus préstamos. Las casas perdieron valor. Los bancos dejaron de recibir el dinero esperado y comenzaron a colapsar uno tras otro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200" />
              <div className="relative z-10 bg-black text-white p-10 space-y-5">
                {[
                  { step: "1", text: "Bancos otorgan hipotecas de alto riesgo (subprime)" },
                  { step: "2", text: "Personas no pueden pagar sus préstamos" },
                  { step: "3", text: "El valor de las propiedades cae" },
                  { step: "4", text: "Los bancos pierden liquidez y colapsan" },
                  { step: "5", text: "Pánico financiero y crisis global" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="text-2xl font-black text-gray-700 shrink-0 leading-none">{step}</span>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUOTE CREDIT CRUNCH ── */}
        <section className="bg-black text-white py-24 sm:py-22 px-6 sm:px-12 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">— Credit Crunch —</p>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed italic mb-8 ">
              "Menos crédito = Crisis mundial"
            </blockquote>
            <p className="text-gray-400 font-light text-base max-w-2xl mx-auto leading-relaxed">
              La evidencia de que importantes entidades bancarias tenían comprometidos sus activos en hipotecas de alto riesgo provocó una contracción repentina del crédito, una enorme volatilidad bursátil y una espiral de desconfianza y pánico inversor.
            </p>
          </motion.div>
        </section>

        {/* ── CONSECUENCIAS ── */}
        <section className="py-15 sm:py-20 px-6 sm:px-12 bg-white mt-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-14"
            >
              <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Impacto global</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                Consecuencias<br />
                <span className="text-gray-300 font-light italic">de la crisis</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mt-6 mb-8" />
              <p className="text-gray-600 text-base leading-relaxed font-light max-w-2xl text-justify">
                Aunque la crisis comenzó en los Estados Unidos, rápidamente se propagó a nivel global debido a la interconexión de los mercados financieros. La crisis subprime del 2008 tuvo enormes repercusiones a nivel de empleo y economía en todo el mundo.
              </p>
            </motion.div>

            <div className="space-y-0">
              {CONSECUENCIAS.map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="flex gap-8 items-start py-8 border-b border-gray-100 last:border-0"
                >
                  <span className="text-2xl font-black text-gray-300 shrink-0 w-8 leading-none mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-black text-gray-900 tracking-tight mb-2">{title}</p>
                    <p className="text-gray-500 text-base font-light leading-relaxed text-justify">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-0 sm:py-0 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[14px] font-semibold tracking-[0.4em] uppercase text-gray-500 mb-8">— Te puede interesar —</p>
              <a
                href="/winnersPrime"
                className="no-underline group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-black text-white p-8 sm:p-10 hover:bg-gray-900 transition-colors duration-300"
              >
                <div>
                  <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase mb-3">Siguiente artículo</p>
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight mb-2">
                    Ganadores con<br />
                    <span className="text-gray-400 font-light italic">esta Crisis</span>
                  </h3>
                  <p className="text-gray-500 text-base font-light">
                    ¿Quiénes salieron beneficiados de la crisis subprime del 2008?
                  </p>
                </div>
                <span className="text-4xl sm:text-6xl font-black text-gray-700 group-hover:text-gray-500 transition-colors duration-300 shrink-0">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VariacionesBolsa;
