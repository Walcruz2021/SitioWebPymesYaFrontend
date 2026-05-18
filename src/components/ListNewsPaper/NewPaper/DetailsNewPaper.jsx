import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useLocation, Link } from 'react-router-dom';
import "./DetailsNewPaper.css";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";

import "./DetailsNewPaper.css";
import Ads from "../../../pages/Home/Ads";
import { ArrowLeft } from 'lucide-react';

const FIELD_ORDER = [
  'title1', 'summary1', 'img1',
  'paragraph1', 'list1',
  'title2', 'summary2', 'img2',
  'paragraph2', 'list2',
  'title3', 'summary3', 'img3',
  'paragraph3', 'list3',
  'title4', 'summary4', 'img4',
  'paragraph4', 'list4',
  'title5', 'summary5', 'img5',
  'paragraph5', 'list5',
];


function getTag(key) {
  return key.replace(/\d+$/, '');
}


function sortedEntries(obj) {
  return Object.entries(obj).sort(([a], [b]) => {
    const ia = FIELD_ORDER.indexOf(a);
    const ib = FIELD_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return 0;
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function HeroImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: 'min(70vh, 680px)' }}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
    </div>
  );
}


function ArticleImage({ src, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="my-12"
    >
      <div className="relative overflow-hidden group">
        <img
          src={src}
          alt=""
          className="w-full object-cover grayscale contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.02]"
          style={{ maxHeight: '520px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="h-px w-8 bg-border" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Figura {index}
        </span>
      </div>
    </motion.figure>
  );
}

const DetailsCompany = () => {
  const location = useLocation();
  const newpaper = location.state?.newpaper;
  let imgCounter = 0;

  return (
    <div>
      {/* <Ads /> */}

      <div className="min-h-screen bg-background">
        {/* Hero */}
        {newpaper.img1 && <HeroImage src={newpaper.img1} alt={newpaper.title1} />}
        {/* Back button */}
        <div className="px-5 sm:px-10 lg:px-20 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs uppercase tracking-[0.2em] font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver
            </Link>
          </motion.div>
        </div>
        {/* {newpaper &&
          Object.entries(newpaper).map(([key, value]) => {
            const tag = key.slice(0, -1); // Saca el último caracter

            switch (tag) {
              case "title":
                return (
                  <h1
                    className="titleGralh1 instrument-serif-regular"
                    key={key}
                  >
                    {value}
                  </h1>
                );

              case "summary":
                return (
                  <div key={key}>
                    <p className="summary instrument-serif-regular" key={key}>
                      {value}
                    </p>
                    <hr className="separator" />
                  </div>
                );
              case "paragraph":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "paragraph1":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "paragraph2":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "paragraph3":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "paragraph4":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "paragraph5":
                return (
                  <p className="paragraph instrument-serif-regular" key={key}>
                    {value}
                  </p>
                );
              case "list":
                return (
                  <li className="list instrument-serif-regular" key={key}>
                    {value}
                  </li>
                );
              case "list1":
                return (
                  <li className="list instrument-serif-regular" key={key}>
                    {value}
                  </li>
                );
              case "list2":
                return (
                  <li className="list instrument-serif-regular" key={key}>
                    {value}
                  </li>
                );

              case "img":
                return (
                  <img
                    className="imgContainerDetailsNewPaper"
                    key={key}
                    src={value}
                    alt="null"
                  />
                );
              default:
                return null;
            }
          })} */}
        {/* Article body */}
        <article className="max-w-3xl mx-auto px-5 sm:px-10 lg:px-0 pb-28 pt-10">
          {Object.entries(newpaper).map(([key, value]) => {
            if (!value) return null;
            const tag = getTag(key);

            switch (tag) {
              case 'title':
                return (
                  <motion.h1
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-editorial text-foreground text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] mb-8"
                  >
                    {value}
                  </motion.h1>
                );

              case 'summary':
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mb-10"
                  >
                    <p className="font-editorial italic text-xl sm:text-2xl text-muted-foreground leading-relaxed border-l-2 border-foreground pl-6 text-justify">
                      {value}
                    </p>
                    <div className="mt-10 h-px w-full bg-border" />
                  </motion.div>
                );

              case 'paragraph':
                return (
                  <motion.p
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7 }}
                    className="text-muted-foreground text-base sm:text-lg leading-[1.85] font-light mb-7 text-justify"
                  >
                    {value}
                  </motion.p>
                );

              case 'img': {
                if (key === 'img1') return null; // hero already rendered
                imgCounter++;
                const counter = imgCounter;
                return <ArticleImage key={key} src={value} index={counter} />;
              }

              case 'list':
                return (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-start gap-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-light mb-4 list-none"
                  >
                    <span className="mt-2 h-px w-6 shrink-0 bg-foreground/40" />
                    {value}
                  </motion.li>
                );

              default:
                return null;
            }
          })}

          {/* Footer rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
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
    </div>
  );
};

export default DetailsCompany;
