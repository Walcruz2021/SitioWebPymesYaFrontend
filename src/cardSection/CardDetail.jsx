import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function CardDetail({ card, onClose }) {
  if (!card) return null;
  const Icon = card.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-card border border-border/50 rounded-lg overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1} />
          </button>

          {/* Image header */}
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <Icon className="w-16 h-16 text-foreground" strokeWidth={0.75} />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10">
            <p className="text-muted-foreground/50 text-[12px] tracking-[0.4em] uppercase mb-2 font-medium">
              {card.subtitle}
            </p>
            <h2 className="text-foreground text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {card.title}
            </h2>
            <div className="w-10 h-px bg-muted-foreground/30 mb-6" />
            <p className="text-muted-foreground text-m leading-relaxed font-light mb-4">
              {card.description}
            </p>
            <p className="text-muted-foreground/70 text-m leading-relaxed font-light mb-8">
              {card.detail}
            </p>

            {/* <Button
              className="bg-foreground text-background hover:bg-foreground/90 rounded-sm px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium h-auto"
            >
              Comenzar ahora
            </Button> */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}