import { useState } from "react";
import { motion } from "framer-motion";
import CardItem from "./CardItem";
import CardDetail from "./CardDetail";
import "./ContainerCards.css";

export default function CardsSection({ cards }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <section className="relative px-6 sm:px-10 lg:px-20 py-20 sm:py-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 sm:mb-24"
        >
          <p className="text-muted-foreground/40 text-[12px] tracking-[0.5em] uppercase mb-4">
            NUESTROS BENEFICIOS
          </p>
          <div className="flex items-end gap-6">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none">
              Lo que
              <br />
              <span className="text-muted-foreground">ofrecemos</span>
            </h2>
            <div className="hidden sm:block w-24 h-px bg-border mb-3" />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card, index) => (
            <CardItem
              key={index}
              {...card}
              index={index}
              isHovered={hoveredIndex === index}
              isAnyHovered={hoveredIndex !== null}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedCard(card)}
            />
          ))}
        </div>
      </section>

      {selectedCard && (
        <CardDetail card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </>
  );
}