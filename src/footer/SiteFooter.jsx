import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
const REDES = [
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
];

const LEGALES = [
    { label: "Términos y condiciones", href: "#" },
    { label: "Política de privacidad", href: "#" },
];

export default function SiteFooter() {
    return (
        <footer className="relative bg-[#050506] text-white border-t border-white/[0.06] overflow-hidden">
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-3 sm:py-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">

                    {/* ── Creador ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-white/30 mb-4 text-center md:text-left">
                            Creador
                        </p>
                        <h3 className="text-lg font-black text-white tracking-tight mb-2 text-left md:text-left">
                            Walter Cruz - Full Stack Developer
                        </h3>
                        <p className="text-white/40 text-base font-light leading-relaxed max-w-xs text-justify">
                            Enfocado en crear soluciones digitales para pymes y emprendedores. Desarrollo aplicaciones, automatizaciones y herramientas pensadas para simplificar procesos, mejorar la gestión y aprovechar la tecnología para hacer crecer los negocios.
                        </p>
                        {/* <div className="w-8 h-px bg-white/20 mt-5" /> */}
                    </motion.div>

                    {/* ── Legales ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-white/30 mb-4 text-center md:text-left">
                            Legales
                        </p>
                        {/* <ul classname="text-right">
                            {LEGALES.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="no-underline group inline-flex items-center gap-1.5 text-white/50 text-sm font-light hover:text-white transition-colors duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul> */}
                    </motion.div>

                    {/* ── PYMES YA + Redes ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-[13px] font-semibold tracking-[0.4em] uppercase text-white/30 mb-4 text-center md:text-left">
                            Marca
                        </p>
                        <h3 className="text-3xl font-black text-white tracking-[-0.02em] mb-3 " >
                            PYMES YA
                        </h3>
               

                        <div className="flex gap-3 justify-center items-center">
                            <a href="https://x.com/pymesyasalta" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/gestion-py/home/?viewAsMember=true" target="_blank" rel="noopener noreferrer">

                            <FaLinkedinIn className="w-5 h-5 text-white" />
                            </a>
                            <a href="https://www.instagram.com/pymesyasalta/" target="_blank" rel="noopener noreferrer">

                            <FaInstagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom bar */}
                <div className="mt-2 pt-2 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="mt-2">

                        <p className="text-white/30 text-sm tracking-[0.2em] uppercase font-light">
                            © {new Date().getFullYear()} PYMES YA
                        </p>
                    </div>
                    <div className="mt-2">

                        <p className="text-white/20 text-[13px] tracking-[0.3em] uppercase font-light">
                            Finanzas · Tecnología · Educación
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}