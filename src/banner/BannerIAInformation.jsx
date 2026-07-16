import { motion } from "framer-motion";
import { Sparkles, MessageSquare, TrendingUp, Send, Zap, Package, Users, Lightbulb } from "lucide-react";
import mockupIA from "../icons/mockupIA.png"

const EXAMPLES = [
  { icon: Package, text: "¿Qué productos se vendieron más este mes?" },
  { icon: TrendingUp, text: "¿Qué servicios generan mayores ingresos?" },
  { icon: Users, text: "¿Qué clientes hace tiempo que no regresan?" },
  { icon: Lightbulb, text: "¿Qué puedo hacer para aumentar mis ventas el próximo mes?" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function BannerIAInformation() {
  return (
    <section className="relative w-full bg-black border-t border-white/5  px-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div >

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4 mt-8 lg:m-0">
                <span className="w-6 h-px bg-indigo-400/60" />
                <span className="text-[15px] tracking-[0.4em] uppercase text-indigo-400/80 font-semibold">
                  Inteligencia Artificial
                </span>
              </div>

              <h2 className="text-6xl font-black text-white tracking-tight leading-[0.95] mb-4">
                Tu asistente<br />
                <span className="text-gray-800 font-light italic">del negocio</span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed font-light text-justify">
                Además, la plataforma incorpora Inteligencia Artificial como asistente del negocio. A través de un chat, los usuarios pueden consultar información estratégica en lenguaje natural y ejecutar acciones automáticamente.
              </p>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {EXAMPLES.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 bg-white/[0.02] hover:bg-indigo-500/[0.06] border border-white/5 hover:border-indigo-400/30 rounded-xl px-4 py-3 transition-colors duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-indigo-500/15 border border-white/10 group-hover:border-indigo-400/30 flex items-center justify-center shrink-0 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-300 transition-colors duration-300" strokeWidth={1.6} />
                    </div>
                    <p className="text-ls leading-relaxed font-light text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {text}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Closing note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-500 text-lg leading-relaxed font-light text-justify"
            >
              La IA analiza los datos del negocio y ayuda a tomar mejores decisiones sin necesidad de conocimientos técnicos.
            </motion.p>
          </div>
          <div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}

            >
              <img src={mockupIA} alt="Mockup IA" className="w-full h-auto mt-8 rounded-lg shadow-lg" />
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}