import { motion } from "framer-motion";

const reasons = [
  { title: "Atención personalizada", desc: "Trabajamos con cada cliente de forma única, entendiendo su negocio y proponiendo soluciones concretas." },
  { title: "Respuestas rápidas", desc: "Te respondemos en menos de 24 horas. Sin burocracia ni esperas innecesarias." },
  { title: "Adaptadas a tu negocio", desc: "No usamos plantillas genéricas. Cada solución está pensada para tu caso específico." },
  { title: "Acompañamiento constante", desc: "No desaparecemos tras entregar el proyecto. Estamos para crecer juntos." },
  { title: "Orientados a resultados", desc: "Creemos en la tecnología como herramienta para simplificar, escalar y transformar negocios." },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-20 sm:py-15 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3 block">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            Razones que
            <span className="text-gray-300 font-light italic"> importan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-gray-100 p-7 hover:border-black transition-colors duration-300"
            >
              <div className="w-6 h-0.5 bg-gray-200 group-hover:bg-black transition-colors duration-300 mb-5" />
              <h3 className="text-gray-900 font-bold text-base mb-2 tracking-tight">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border border-black bg-black p-7 flex flex-col justify-between"
          >
            <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
              💡 Creemos en la tecnología como una herramienta para simplificar, escalar y transformar negocios.
            </p>
            <p className="text-white font-bold text-sm tracking-wide">¿En qué podemos ayudarte?</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}