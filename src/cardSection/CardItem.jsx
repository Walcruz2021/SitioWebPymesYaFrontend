import { motion } from "framer-motion";

export default function CardItem({
  icon:Icon,
  title,
  subtitle,
  description,
  image,
  index,
  isHovered,
  isAnyHovered,
  onHover,
  onLeave,
  onClick
}) {

  const isActive = isHovered;
  const isDimmed = isAnyHovered && !isHovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <motion.div
        animate={{
          opacity: isDimmed ? 0.25 : 1,
          scale: isActive ? 1.02 : 1,
          filter: isDimmed ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-lg border border-border/50 bg-card"
      >
        {/* Image area */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isActive ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

          {/* Icon floating on image */}
          <motion.div
            animate={{
              y: isActive ? -4 : 0,
              scale: isActive ? 1.1 : 1
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-6"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: isActive ? 0.3 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 blur-xl bg-foreground/20 rounded-full scale-150"
              />
              <Icon
                className="relative w-12 h-12 sm:w-14 sm:h-14 text-foreground"
                strokeWidth={0.75}
              />

            </div>
          </motion.div>
        </div>

        {/* Content area */}
        <div className="p-6 sm:p-8">
          <p className="text-muted-foreground/50 text-[12px] tracking-[0.4em] uppercase mb-3 font-medium">
            {subtitle}
          </p>

          <h3 className="text-foreground text-xl sm:text-2xl font-bold tracking-tight mb-3">
            {title}
          </h3>

          <motion.div
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-px bg-muted-foreground/40 mb-4 origin-left"
          />

          <p className="text-muted-foreground text-s leading-relaxed font-light">
            {description}
          </p>

          {/* CTA hint */}
          <motion.div
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
            transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
            className="mt-6 flex items-center gap-2"
          >
            <span className="text-foreground text-xs tracking-[0.2em] uppercase font-medium">
              Explorar
            </span>
            <motion.div
              animate={{ x: isActive ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-px bg-foreground"
            />
          </motion.div>
        </div>

        {/* Top accent line on hover */}
        <motion.div
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-foreground/30 origin-left"
        />
      </motion.div>
    </motion.div>
  );
}