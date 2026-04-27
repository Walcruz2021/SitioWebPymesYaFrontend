import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const BG_IMAGE = "https://media.base44.com/images/public/69e69deaacc080e2495df610/fa823f4f9_generated_image.png";

// Floating particles for ambiance
function Particle({ style }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-amber-300/20"
      animate={{ y: [-20, 20, -20], opacity: [0, 0.6, 0] }}
      transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut" }}
      style={style}
    />
  );
}

export default function BannerSistemaTurnos({ onAccess }) {
  const particles = [
    { top: "20%", left: "10%", animationDelay: "0s" },
    { top: "60%", left: "85%", animationDelay: "1s" },
    { top: "40%", left: "70%", animationDelay: "2s" },
    { top: "75%", left: "25%", animationDelay: "0.5s" },
    { top: "15%", left: "55%", animationDelay: "1.5s" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="background"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.35) saturate(0.8)" }}
        />
        {/* Warm gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-900/70 to-amber-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />
        {/* Warm vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(12,10,8,0.7)_100%)]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ top: p.top, left: p.left, animationDelay: p.animationDelay }} />
      ))}

      {/* Warm accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-10 origin-left"
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8 backdrop-blur-sm"
        >
          <Star className="w-3 h-3 text-gray-400 fill-gray-400" />
          <span className="text-gray-400/90 text-[10px] tracking-[0.3em] uppercase font-medium">
            Sistema para veterinarias y petshops
          </span>
          <Star className="w-3 h-3 text-gray-400 fill-gray-400" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.02em] leading-[0.9] text-white mb-6"
        >
          Gestioná tu
          <br />
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-stone-300">
              negocio
            </span>
          </span>
          <br />
          <span className="text-stone-300 font-light italic">sin caos</span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-stone-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-4"
        >
          Turnos, ventas y gastos en un solo lugar.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-stone-400 text-sm sm:text-base font-light tracking-wide mb-12"
        >
          Simple, rápido y profesional.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onAccess}
            className="group relative inline-flex items-center gap-3 px-8 py-1 rounded-sm overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #c0bdbd, #646363, #2b2a2a)",
              boxShadow: "0 0 30px rgba(235, 232, 228, 0.3), 0 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
            <a
              href="https://frontend-app-peluqueria.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative text-white font-semibold text-sm sm:text-base tracking-[0.1em] uppercase">
                Accedé al sistema
              </span>
            </a>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.div>
          </motion.button>

          {/* <button
            onClick={onAccess}
            className="text-stone-400 hover:text-stone-200 text-sm tracking-[0.15em] uppercase transition-colors duration-300 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-400"
          >
            Ver demo
          </button> */}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "100%", label: "Online" },
            { value: "Totalmente", label: "GRATIS" },
            { value: "Fácil", label: "de usar" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-gray-200/80 text-lg sm:text-xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-stone-300 text-[13px] tracking-[0.2em] uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-amber-400/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}