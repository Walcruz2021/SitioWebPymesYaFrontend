import { NoteItem } from "../../../types/typeApp"
import "./Note.css";
import ButtonDonacion from "../../../pages/Home/ButtonDonacion"
import { motion } from "framer-motion";

type Props = {
    note: NoteItem,
    siguiente: () => void;
    anterior: () => void;
    buttonBack: boolean;
    buttonNext: boolean;

}

const Note = ({ note, siguiente, anterior, buttonBack, buttonNext }: Props) => {
    /**
     * note (object of notes from BD) is passed by Object.keys. Return title1,paragraph1,img1,etc
     */
    const noteKeys = Object.keys(note)

    /**
     * the functions clasifiedParagraph - clasifiedTitle - clasifiedImg determine 
     * the type of tag (title-img-etc) to which the passed string belongs 
     * (belongs(pertence))
     * Since the values ​​come with a one or two digit number, at the end it is passed through the slice 
     * function to eliminate them. return title of title1 or title10
     */

    function clasifiedParagraph(value: string) {
        value = value.slice(0, -1)
        if (value === "paragraph") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "paragraph") {
                return true
            } else return false
        }
    }
    function clasifiedTitle(value: string) {
        value = value.slice(0, -1)
        if (value === "title") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "title") {
                return true
            } else return false
        }
    }

    function clasifiedList(value: string) {
        value = value.slice(0, -1)
        if (value === "list") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "list") {
                return true
            } else return false
        }
    }


    function clasifiedImg(value: string) {
        value = value.slice(0, -1)
        //console.log(value)
        if (value === "img") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "img") {
                return true
            } else return false
        }
    }
    return (
      <div className="min-h-screen bg-white text-gray-900">

      {/* HERO (usa la primera imagen si existe) */}
      {noteKeys.find(clasifiedImg) && (
        <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-end">
          <img
            src={note[noteKeys.find(clasifiedImg)!]}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-16 pt-32">
            <h1 className="text-5xl sm:text-7xl font-black leading-tight">
              {noteKeys.find(clasifiedTitle) && note[noteKeys.find(clasifiedTitle)!]}
            </h1>
          </div>
        </section>
      )}

      {/* CONTENIDO */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto space-y-10">

          {noteKeys.map((key, index) => {
            // TITULOS
            if (clasifiedTitle(key)) {
              return (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-black leading-tight"
                >
                  {note[key]}
                </motion.h2>
              );
            }

            // PARRAFOS
            if (clasifiedParagraph(key)) {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-gray-600 text-lg leading-relaxed font-light"
                >
                  {note[key]}
                </motion.p>
              );
            }

            // LISTAS
            if (clasifiedList(key)) {
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-gray-800 font-semibold list-disc ml-5"
                >
                  {note[key]}
                </motion.li>
              );
            }

            // IMAGENES
            if (clasifiedImg(key)) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="my-10"
                >
                  <img
                    src={note[key]}
                    alt="contenido"
                    className="w-full h-80 object-cover grayscale rounded-sm"
                  />
                </motion.div>
              );
            }

            return null;
          })}

          {/* BOTONES */}
          <div className="flex gap-4 pt-10">
            {buttonBack && (
              <button
                onClick={anterior}
                className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition"
              >
                Anterior
              </button>
            )}

            {buttonNext && (
              <button
                onClick={siguiente}
                className="px-6 py-2 bg-black text-white hover:opacity-80 transition"
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
    )
}

export default Note