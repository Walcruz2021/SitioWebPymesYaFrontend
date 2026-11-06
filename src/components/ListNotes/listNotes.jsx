
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useFetchNote from "../../hooks/useFetchNote";

export default function ListNotes() {
  const { notes, isLoading } = useFetchNote();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAFAF9] px-6">
        <h1 className="text-sm font-light tracking-widest text-[#777777]">
          Cargando historias...
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAFAF9] px-6 py-4 sm:px-10 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#999999]">
            PymesYa / Historias
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#202020] sm:text-6xl">
            Historias que
            <br />
            <span className="font-light italic text-[#999999]">
              inspiran
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#777777]">
            Conocé las historias detrás de grandes empresas, emprendedores
            y personas que transformaron sus ideas en grandes proyectos.
          </p>
        </motion.header>

        {/* DIVISOR */}
        <div className="mt-5 h-px w-full bg-[#EAEAEA]" />

        {/* LISTADO DE HISTORIAS */}
        <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">

          {notes && notes.map((note, i) => (

            <motion.article
              key={note._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08
              }}
              className="group flex flex-col bg-white"
            >

              {/* IMAGEN */}
              <Link
                to={`/histories/${note._id}`}
                className="relative block overflow-hidden bg-[#F0F0F0]"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={note.img1}
                  alt={note.title1}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* DEGRADADO SOBRE IMAGEN */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />

                {/* NUMERO DE HISTORIA */}
                <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] text-white">
                  HISTORIA {String(i + 1).padStart(2, "0")}
                </span>
              </Link>

              {/* CONTENIDO */}
              <div className="flex flex-1 flex-col border-b border-[#EAEAEA] px-2 pb-7 pt-6">

                {/* TITULO */}
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#383838] transition-colors duration-300 group-hover:text-[#777777]">
                  <Link
                    to={`/histories/${note._id}`}
                    className="no-underline hover:no-underline focus:no-underline"
                  >
                    {note.title1}
                  </Link>
                </h2>

                {/* RESUMEN */}
                <p className="mt-4 line-clamp-3 text-justify text-sm font-light leading-7 text-[#777777]">
                  {note.paragraph1}
                </p>

                {/* ENLACE A LA HISTORIA */}
                <div className="mt-auto pt-7">

                  <div className="h-px w-full bg-[#EAEAEA] transition-colors duration-300 group-hover:bg-[#999999]" />

                  <Link
                    to={`/histories/${note._id}`}
                    className="mt-5 inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#333333] transition-all duration-300 hover:gap-5 hover:text-[#888888]"
                  >
                    Leer historia completa

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* ESTADO SIN HISTORIAS */}
        {(!notes || notes.length === 0) && (
          <div className="py-20 text-center">
            <p className="text-sm font-light text-[#777777]">
              Todavía no hay historias disponibles.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}
