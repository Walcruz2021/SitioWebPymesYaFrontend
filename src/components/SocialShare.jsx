import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Link2, Check, Share2 } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";

export default function SocialShare({ title, description, url }) {

  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);

  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || "");

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${title}\n\n${description || ""}\n\n${url}`
  )}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar el enlace:", error);
    }
  };

  const buttons = [
    {
      label: "WhatsApp",
      icon: FaWhatsapp,
      href: whatsappUrl,
      hover: "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400",
    },
    {
      label: "Facebook",
      icon: FaFacebookF,
      href: facebookUrl,
      hover: "hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400",
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0a0a0b] border border-white/[0.08] rounded-2xl overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <Share2 className="w-4 h-4 text-white/50" />
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30">
              Interacción
            </p>
            <h3 className="text-base font-black text-white tracking-tight">
              Compartir este artículo
            </h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {buttons.map(({ label, icon: Icon, href, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-xs font-bold tracking-wider text-white/50 transition-all duration-300 ${hover}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}

          {/* Copy button */}
          <button
            type="button"
            onClick={handleCopy}
            className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-xs font-bold tracking-wider text-white/50 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="link"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link2 className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
            {copied ? "¡Copiado!" : "Copiar enlace"}
          </button>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-center text-[11px] font-light tracking-wide text-emerald-400/80 mt-4"
            >
              El enlace fue copiado al portapapeles.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}