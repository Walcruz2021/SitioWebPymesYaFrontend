import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Zap } from 'lucide-react';

const NewHistory = ({ title, subtitle, onClick, onDismiss }) => {
 
const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setVisible(false);
    onDismiss?.();
  };


  return (
 <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] cursor-pointer select-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
        >
          {/* Glow background */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.4 }}
            className="absolute -inset-[1px] rounded-sm bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-sm"
          />

          {/* Card */}
          <div className="relative overflow-hidden rounded-sm border border-white/20 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.05)]">

            {/* Animated top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-white to-transparent origin-left"
            />

            {/* Scanline shimmer */}
            <motion.div
              animate={{ x: hovered ? ['−100%', '200%'] : '−100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="p-5 pr-10">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-white"
                />
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-medium flex items-center gap-1.5">
                  <Zap className="w-2.5 h-2.5" />
                  Nuevo artículo
                </span>
              </div>

              {/* Title */}
              <h3 className="font-editorial text-white text-xl sm:text-2xl leading-tight tracking-[-0.02em] mb-1.5">
                {title || '¡Nuevo Artículo Disponible!'}
              </h3>

              {/* Subtitle */}
              <p className="text-white/50 text-[13px] leading-snug font-light mb-4">
                {subtitle || 'Crisis Financiera Burbuja.com'}
              </p>

              {/* CTA */}
              <motion.div
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2 text-white text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                <span>Leer ahora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </div>

            {/* Bottom rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
            />
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 text-white/30 hover:text-white/80 transition-colors duration-200 p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewHistory;
