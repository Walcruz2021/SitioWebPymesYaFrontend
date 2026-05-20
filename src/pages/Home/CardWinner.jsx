import "./CardWinner.css";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CardWinner = ({
  titulo,
  imagen1,
  imagen2,
  contenido1,
  contenido2,
  contenido3,
  contenido4,
  contenido5,
  contenido6,
  contenido7,
  contenido8,
  contenido9,
  contenido10,
  siguiente,
  anterior,
  buttonBack,
  buttonNext,
}) => {
  return (
        <div className="min-h-screen bg-background">

      {/* Hero image */}
      {imagen1 && (
        <div className="relative w-full overflow-hidden" style={{ height: "min(70vh, 680px)" }}>
          <img
            src={imagen1}
            alt={titulo}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-5 sm:px-10 lg:px-0 pb-28 pt-10">

        {/* Title */}
        {titulo && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-editorial text-foreground text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] mb-8"
          >
            {titulo}
          </motion.h1>
        )}

        {/* Divider after title */}
        <div className="mb-10 h-px w-full bg-border" />

        {/* Paragraphs before second image */}
        {[contenido1, contenido2, contenido3, contenido4, contenido5, contenido6, contenido7, contenido8, contenido9].map(
          (contenido, i) =>
            contenido ? (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7 }}
                className="text-muted-foreground text-base sm:text-lg leading-[1.85] font-light mb-7 text-justify"
              >
                {contenido}
              </motion.p>
            ) : null
        )}

        {/* Second image */}
        {imagen2 && (
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="my-12"
          >
            <div className="relative overflow-hidden group">
              <img
                src={imagen2}
                alt=""
                className="w-full object-cover grayscale contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.02]"
                style={{ maxHeight: "520px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.figure>
        )}

        {/* contenido10 — caption / quote */}
        {contenido10 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-10"
          >
            <p className="font-editorial italic text-xl sm:text-2xl text-muted-foreground leading-relaxed border-l-2 border-foreground pl-6 text-justify">
              {contenido10}
            </p>
          </motion.div>
        )}

        {/* Navigation buttons */}
        {(buttonBack || buttonNext) && (
          <div className="mt-16 flex items-center justify-between gap-4">
            {buttonBack ? (
              <button
                onClick={anterior}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs uppercase tracking-[0.2em] font-medium group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                Anterior Historia
              </button>
            ) : <span />}

            {buttonNext ? (
              <button
                onClick={siguiente}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs uppercase tracking-[0.2em] font-medium group"
              >
                Siguiente Historia
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : <span />}
          </div>
        )}

        {/* Footer rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-16 flex items-center gap-6 origin-left"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium whitespace-nowrap">
            Fin del artículo
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>
      </article>
    </div>
  );
};

export default CardWinner;
