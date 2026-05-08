import "./Finanzas.css";
import ButtonDonacion from "./ButtonDonacion";
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const vtaAcciones = require("./imagenes/vtaAcciones.jpg");
const panaderia2 = require("./imagenes/panaderiaBeto2.jpg");
const pepe = require("./imagenes/Pepe.png");


const Finanzas = () => {
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

  return (
    <>
      {/* <ButtonDonacion /> */}
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
          className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-16 pt-32"
        >
          <p className="text-gray-400 text-[12px] tracking-[0.5em] uppercase mb-4">
            Finanzas · Inversión · Mercados
          </p>
          <h1 className="text-5xl sm:text-8xl font-black tracking-[-0.04em] leading-[0.85] mb-6">
            BOLSA DE<br />VALORES
          </h1>
          <div className="w-16 h-px bg-gray-500 mb-6" />
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
            Todo lo que necesitás saber para entender cómo funciona el mercado financiero
          </p>
        </motion.div>
      </section>

      {/* ── QUÉ ES LA BOLSA ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Introducción</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              ¿Qué es<br />
              <span className="text-gray-300 font-light italic">la bolsa?</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Quizá al leer "bolsa de valores" pienses en un gran edificio con gente corriendo y gritando. Es por eso que mucha gente huye de ella sin conocer todos sus beneficios, creyendo que es algo hecho solo para unos pocos.
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
              El mercado de valores es donde un inversor puede comprar las acciones que pone en venta una institución o incluso una persona. Las negociaciones se llevan a cabo de manera indirecta, a través de agentes intermediarios llamados <span className="font-semibold text-gray-800">"corredores de bolsa"</span> o brokers.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Estos actúan como un puente que vincula a las personas con dinero disponible para invertir y las empresas que necesitan capital para llevar adelante sus proyectos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIVIDER QUOTE ── */}
      <section className="bg-black text-white py-16 sm:py-20 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-500 text-xl tracking-widest uppercase mb-6">— Concepto clave —</p>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed italic">
            "Las bolsas de valores son reguladas, supervisadas y controladas por los Estados Nacionales."
          </blockquote>
        </motion.div>
      </section>

      {/* ── VENTA DE ACCIONES ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200" />
            <div className="relative z-10 bg-black h-64 flex flex-col items-center justify-center p-10 gap-4">
              <span className="text-6xl sm:text-7xl font-black text-white tracking-tight leading-none">DON<br />BETO</span>
              <span className="text-gray-500 text-[12px] tracking-[0.4em] uppercase">Panadería · S.A.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[12px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Venta de acciones</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              ¿Por qué una empresa<br />
              <span className="text-gray-300 font-light italic">cotiza en bolsa?</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed font-light mb-4 text-justify">
              Para seguir proyectándose y expandirse, una empresa necesita capital. Al cotizar en la bolsa, permite que cualquier persona —un abuelito, un policía, sin distinción de religión ni nivel social— pueda invertir sus ahorros en ella.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Así, la <span className="font-semibold text-gray-800">Panadería Don Beto</span> contará con el capital necesario para seguir creciendo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFICIOS DE COTIZAR ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Para la empresa</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
              Beneficios de<br />
              <span className="text-gray-300 font-light italic">cotizar en bolsa</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Publicidad diaria", desc: "Estar cotizando en bolsa implica aparecer diariamente en noticias económicas: TV, diarios, revistas. Publicidad constante, positiva o negativa según el desempeño." },
              { num: "02", title: "Transparencia obligatoria", desc: "Para cotizar en bolsa la empresa debe hacer públicos sus estados financieros. Sus contabilidades deben ser transparentes y ordenadas, sometiéndose a auditorías continuas." },
              { num: "03", title: "Motivación laboral", desc: "Muchos empleados son pagados con acciones. Esto provoca un incentivo real: el empleado trabaja mejor para que la acción suba. Las acciones motivan, incentivan y premian al trabajador." },
            ].map(({ num, title, desc }) => (
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

      {/* ── BENEFICIOS INVERSOR ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Para el inversor</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              La historia<br />
              <span className="text-gray-300 font-light italic">Tito</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed font-light mb-4 text-justify">
              Tito decidió dejar de guardar su dinero en el colchón y tomó la decisión de invertir su capital en la <span className="font-semibold text-gray-800">Panadería Don Beto</span>. Al comprar una acción, adquirió una pequeña parte de esa empresa.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Si la empresa crece, Tito gana. Además, algunas empresas pagan <span className="font-semibold text-gray-800">dividendos</span> a sus accionistas como forma de compartir las ganancias, generando un flujo de ingresos adicional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-200" />
            <div className="relative z-10 bg-black text-white p-10 space-y-6">
              {[
                { label: "Ganancia por valorización", desc: "Si la empresa crece, el valor de tu acción sube y podés venderla con ganancia." },
                { label: "Dividendos", desc: "Ingresos adicionales periódicos que la empresa distribuye entre sus accionistas." },
                { label: "Crecimiento sectorial", desc: "Si la industria crece, todas sus empresas se benefician, incluida tu inversión." },
              ].map(({ label, desc }) => (
                <div key={label} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <div>
                    <p className="text-white text-base font-bold mb-1">{label}</p>
                    <p className="text-gray-500 text-base font-light leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
      {/* <ButtonDonacion /> */}


    </>
  );
};

export default Finanzas;
