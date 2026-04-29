import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroContact({ onPresupuesto }) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-23 sm:py-24 mt-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-400 text-xs tracking-[0.4em] uppercase mb-12"
        >
          Soluciones digitales · Resultados reales
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.9] tracking-tight mb-20"
        >
          No importa si estás<br />
          <span className="text-gray-400 font-light italic">empezando</span> o querés<br />
          mejorar lo que tenés.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl leading-relaxed mb-10"
        >
          Te ayudamos a crear soluciones digitales que realmente generen resultados.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onPresupuesto}
          className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 text-sm tracking-[0.1em] uppercase hover:bg-gray-100 transition-colors"
        >
          Solicitar presupuesto gratis
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}