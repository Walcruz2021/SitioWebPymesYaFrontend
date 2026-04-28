import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactSection({ onPresupuesto }) {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3 block">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            Hablemos de<br />
            <span className="text-gray-300 font-light italic">tu proyecto</span>
          </h2>
          <div className="mt-4 w-10 h-0.5 bg-black rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 p-8 hover:border-black transition-colors duration-300 group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-colors duration-300 rounded-sm">
                <Phone className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-900 font-bold text-base tracking-tight">Atención telefónica</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4 font-light leading-relaxed">
              Hablá directamente con nosotros y resolvé tus dudas al instante.
            </p>
            <a
              href="tel:3876153799"
              className="text-2xl font-black text-gray-900 tracking-tight hover:text-gray-500 transition-colors block mb-4"
            >
              387 615 3799
            </a>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              <span>Lunes a Sábados · 9:00 a 21:00 hs</span>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 p-8 hover:border-black transition-colors duration-300 group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-colors duration-300 rounded-sm">
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-900 font-bold text-base tracking-tight">Correo electrónico</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4 font-light leading-relaxed">
              Envianos tu consulta y te respondemos en menos de 24 horas.
            </p>
            <a
              href="mailto:pymestiendavirtual@gmail.com"
              className="text-base font-bold text-gray-900 hover:text-gray-500 transition-colors block mb-4 break-all"
            >
              pymestiendavirtual@gmail.com
            </a>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Clock className="w-3 h-3" strokeWidth={1.5} />
              <span>Lunes a Sábados · 9:00 a 21:00 hs</span>
            </div>
          </motion.div>

        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onPresupuesto}
            className="inline-flex items-center gap-3 bg-black text-white font-bold px-10 py-5 text-sm tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
          >
            Agendá una consulta sin costo
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p className="text-gray-400 text-xs mt-4 tracking-wide">Sin compromiso · Respuesta en menos de 24hs</p>
        </motion.div>

      </div>
    </section>
  );
}