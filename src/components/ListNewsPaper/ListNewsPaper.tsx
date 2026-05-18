import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewPaperCard from './NewPaper/NewPaper';
import { NewPaperItem } from "../../types/typeApp";
import "./ListNewsPaper.css";
import { formatWithOptions } from 'util';
import Ads from "../../pages/Home/Ads";

const GRID_PATTERN = [
  'md:col-span-12',  // 0 → featured full-width
  'md:col-span-4',   // 1 → small
  'md:col-span-4',   // 2 → small
  'md:col-span-4',   // 3 → small
  'md:col-span-8',   // 4 → wide
  'md:col-span-4',   // 5 → small
];


interface RootState {
  reducerNewsPaper: {
    listNewsPaper: any[];
  };
}


type Props = {
  newpaper: NewPaperItem;
};


const ListNewsPaper = (codigo: any) => {
  const dispatch = useDispatch();
  const listNewsPaper = useSelector(
    (state: RootState) => state.reducerNewsPaper.listNewsPaper
  );


  return (
    <section className="min-h-screen bg-background px-3 py-16 sm:px-8 lg:px-14">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mb-14 border-b border-border pb-8"
      >
        <p className="text-muted-foreground text-[11px] uppercase tracking-[0.35em] font-medium mb-3">
          La Edición del Día
        </p>
        <h1 className="text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial italic leading-[0.95]">
          Pymes{' '}
          <span className="font-sans not-italic font-bold tracking-tight">
            Ya
          </span>
        </h1>
        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium whitespace-nowrap">
            Noticias · Análisis · Opinión
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </motion.div>

      {/* Dynamic Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-10">
        {listNewsPaper &&
          listNewsPaper.map((newpaper: NewPaperItem, index: number) => {
            const patternIndex = index % GRID_PATTERN.length;
            const colSpan = GRID_PATTERN[patternIndex];
            const isFeatured = patternIndex === 0;

            return (
              <motion.div
                key={newpaper._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 6) * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={colSpan}
              >
                <Link
                  to={`/detailsNewPaper/${newpaper._id}`}
                  state={{ newpaper }}
                  className="group block no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
                >
                  <NewPaperCard
                    newpaper={newpaper}
                    isFeatured={isFeatured}
                  />
                </Link>
              </motion.div>
            );
          })}
      </div>
       <Ads />
    </section>
  );
};


export default ListNewsPaper