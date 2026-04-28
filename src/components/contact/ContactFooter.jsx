import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">
          © 2026 · Todos los derechos reservados
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:3876153799" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase transition-colors">
            Teléfono
          </a>
          <a href="mailto:pymestiendavirtual@gmail.com" className="text-gray-500 hover:text-white text-xs tracking-widest uppercase transition-colors">
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}