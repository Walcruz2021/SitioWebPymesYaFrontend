import { motion } from "framer-motion";

const techs = [
  { label: "React", category: "Frontend" },
  { label: "TailwindCSS", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "NestJS", category: "Backend" },
  { label: "MongoDB", category: "Base de datos" },
  { label: "n8n", category: "Automatización" },
  { label: "APIs", category: "Integraciones" },
  { label: "Pagos online", category: "Integraciones" },
  { label: "WhatsApp", category: "Integraciones" },
];

export default function TechSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-28 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-500 mb-3 block">
              Stack tecnológico
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              Herramientas<br />
              <span className="text-gray-500 font-light italic">modernas</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-light">
            Elegimos la tecnología adecuada según cada proyecto, no al revés.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ backgroundColor: "#fff", color: "#000" }}
              className="group border border-gray-700 px-5 py-3 transition-colors duration-300 cursor-default"
            >
              <p className="text-white group-hover:text-black text-sm font-semibold transition-colors duration-300">{t.label}</p>
              <p className="text-gray-500 group-hover:text-gray-600 text-[10px] tracking-widest uppercase mt-0.5 transition-colors duration-300">{t.category}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}