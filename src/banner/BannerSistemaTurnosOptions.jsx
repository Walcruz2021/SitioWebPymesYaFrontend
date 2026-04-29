import { motion } from "framer-motion";
import { BookOpen, BarChart2, CalendarCheck, Zap, Gift, ArrowRight } from "lucide-react";

const DASHBOARD_IMG = "https://media.base44.com/images/public/69e69deaacc080e2495df610/59ffd9dda_generated_image.png";

const features = [
  {
    icon: BookOpen,
    title: "Acceso a la Información",
    description: "Historial de citas y datos de clientes al instante, para prepararte mejor en cada consulta.",
  },
  {
    icon: BarChart2,
    title: "Informes Detallados",
    description: "Reportes precisos de gastos, ventas e indicadores clave para mejorar tu estrategia.",
  },
  {
    icon: CalendarCheck,
    title: "Organización sin Complicaciones",
    description: "Agendá, editá y eliminá turnos de forma rápida y centralizada. Adiós a los cuadernos.",
  },
  {
    icon: Zap,
    title: "Fluidez en la Gestión de Turnos",
    description: "Programá citas en segundos con una interfaz intuitiva, y enfocate en lo que importa.",
  },
  {
    icon: Gift,
    title: "Totalmente Gratuito",
    description: "Sin tarjetas ni sorpresas. Registrate y mejorá la productividad de tu negocio hoy mismo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function BannerSistemaTurnosOptions({ onAccess }) {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center overflow-hidden mt-0">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="relative z-10 w-full  px-6 sm:px-10 lg:px-16 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT — Features list */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-9"
          >
            <span className="inline-block text-amber-600 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 mt-0">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-tight tracking-tight">
              Todo lo que tu
              <br />
              <span className="text-stone-400 font-light italic">negocio necesita</span>
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-amber-400 rounded-full" />
          </motion.div>

          {/* Features */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="group flex items-start gap-4"
                >
                  {/* Icon box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-stone-100 group-hover:bg-amber-50 border border-stone-200 group-hover:border-amber-200 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-7 h-7 text-stone-500 group-hover:text-amber-600 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-stone-800 font-semibold text-m mb-0.5 tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-stone-500 text-xl leading-relaxed font-light">
                      {f.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onAccess}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-300 shadow-lg shadow-stone-900/20"
            >
              Accedé al sistema
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT — Dashboard image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/60 via-stone-100/40 to-transparent rounded-2xl blur-2xl" />

          {/* Card frame */}
          <div className="relative rounded-2xl border border-stone-200 shadow-2xl shadow-stone-200/60 overflow-hidden bg-stone-50">

            {/* Fake browser bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-stone-100 border-b border-stone-200">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
              <div className="flex-1 ml-3 h-5 rounded bg-white border border-stone-200 flex items-center px-2">
                <span className="text-stone-400 text-[12px] tracking-wide">www.pymesya.com.ar</span>
              </div>
            </div>

            {/* Screenshot */}
            <img
              src={DASHBOARD_IMG}
              alt="Dashboard del sistema"
              className="w-full object-cover"
            />

            {/* Overlay gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-5 -left-5 bg-white border border-stone-200 rounded-xl px-3 py-2 shadow-lg shadow-stone-200/50 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
              <Gift className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-stone-800 text-m font-semibold m-0">100% Gratuito</p>
              <p className="text-stone-400 text-[15px]">Sin tarjeta requerida</p>
            </div>
          </motion.div>

          {/* Floating stats badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -top-5 -right-6 bg-white border border-stone-200 rounded-xl px-3 py-2 shadow-lg shadow-stone-200/50 flex items-center gap-3 min-w-[260px]"
          >
            <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
              <BarChart2 className="w-6 h-6 text-green-600" strokeWidth={1.5} />
            </div>

            <div className="leading-none">
              <p className="text-stone-800 text-sm font-semibold m-1">
                Reportes en tiempo real
              </p>
              <p className="text-stone-400 text-xs">
                Tu Dashboard siempre actualizado y listo
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}