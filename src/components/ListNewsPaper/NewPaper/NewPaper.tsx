import { NewPaperItem } from "../../../types/typeApp";
import "./NewPaper.css";

type Props = {
  newpaper: NewPaperItem;
  isFeatured:boolean
};

const NewPaper = ({ newpaper,isFeatured }: Props) => {
  // return (
  //   <div>
  //     <div className="CardNewPaper">
  //       <div className="imgContainerNewPaper">
  //         <img className="imgCardNewPaper" src={newpaper.img1} alt={newpaper.title1}></img>
  //       </div>
  //       <h1 className="titleGralh1 instrument-serif-regular">
  //         {newpaper.title1}
  //       </h1>
  //       <p className="instrument-serif-regular">{newpaper.paragraph1}</p>
  //     </div>
  //   </div>
  // );
  return (
    <article className="relative flex flex-col h-full overflow-hidden">
      {/* Image with Kinetic Zoom */}
      <div
        className={`relative overflow-hidden bg-card transition-all duration-700 ease-out ${
          isFeatured ? 'aspect-[21/9]' : 'aspect-[4/5]'
        }`}
      >
        <img
          className="h-full w-full object-cover grayscale contrast-[1.1] transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
          src={newpaper.img1}
          alt={newpaper.title1}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />

        {/* Category badge for featured */}
        {isFeatured && (
          <div className="absolute top-6 left-6 z-10">
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-foreground bg-background/80 backdrop-blur-sm border border-border">
              Destacado
            </span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className={`mt-5 ${isFeatured ? 'md:max-w-3xl' : ''}`}>
        <h3
          className={`font-editorial text-foreground leading-[1.1] tracking-[-0.02em] transition-colors duration-300 group-hover:text-white ${
            isFeatured
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              : 'text-xl sm:text-2xl md:text-3xl'
          }`}
        >
          {newpaper.title1}
        </h3>

        <p className="mt-3 text-muted-foreground line-clamp-3 text-sm md:text-base leading-relaxed font-light text-justify">
          {newpaper.paragraph1}
        </p>

        {/* Read indicator */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-10 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-foreground" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
            Leer artículo
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewPaper;
