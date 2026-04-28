import { motion } from "framer-motion";
import { Globe, Settings, Zap, Link, Wrench } from "lucide-react";

const services = [
  { icon: Globe, label: "Desarrollo de páginas web profesionales" },
  { icon: Settings, label: "Sistemas de gestión (turnos, ventas, inventario)" },
  { icon: Zap, label: "Automatización de procesos con IA" },
  { icon: Link, label: "Integraciones (pagos, WhatsApp, APIs)" },
  { icon: Wrench, label: "Mantenimiento y mejoras de sistemas" },
];

const problems = [
  "Negocios que pierden clientes por no tener presencia online",
  "Sistemas desorganizados (turnos, stock, ventas)",
  "Procesos manuales que hacen perder tiempo",
  "Falta de automatización",
  "Necesidad de vender por internet",
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        {/* Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3 block">
              Nuestros servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
              Lo que<br />
              <span className="text-gray-300 font-light italic">construimos</span>
            </h2>
            <div className="mt-4 w-10 h-0.5 bg-black rounded-full" />
          </motion.div>

          <ul className="space-y-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-sm bg-gray-100 group-hover:bg-black flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{s.label}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Problems we solve */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3 block">
              ¿A quién ayudamos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
              Problemas que<br />
              <span className="text-gray-300 font-light italic">resolvemos</span>
            </h2>
            <div className="mt-4 w-10 h-0.5 bg-black rounded-full" />
          </motion.div>

          <ul className="space-y-3">
            {problems.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="text-black font-bold mt-0.5 text-sm flex-shrink-0">✔</span>
                <span className="text-gray-600 text-sm leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 p-6 border border-gray-100 bg-gray-50 rounded-sm"
          >
            <p className="text-gray-500 text-sm leading-relaxed font-light italic">
              "Somos desarrolladores especializados en crear soluciones digitales que ayudan a negocios reales a crecer. No solo hacemos páginas web: construimos herramientas que automatizan procesos, mejoran la experiencia del cliente y aumentan las ventas."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}