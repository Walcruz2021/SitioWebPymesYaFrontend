import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-20 py-16 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <p className="text-muted-foreground/40 text-xs tracking-[0.2em] uppercase">
          © 2026 · Todos los derechos reservados
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-muted-foreground/40 hover:text-foreground text-xs tracking-[0.15em] uppercase transition-colors duration-300">
            Privacidad
          </a>
          <a href="#" className="text-muted-foreground/40 hover:text-foreground text-xs tracking-[0.15em] uppercase transition-colors duration-300">
            Términos
          </a>
          <a href="#" className="text-muted-foreground/40 hover:text-foreground text-xs tracking-[0.15em] uppercase transition-colors duration-300">
            Contacto
          </a>
        </div>
      </motion.div>
    </footer>
  );
}