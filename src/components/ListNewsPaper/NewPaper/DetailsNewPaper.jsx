import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "./DetailsNewPaper.css";
import IonIcon from "@reacticons/ionicons";
import rutaBackend from "../../../helpers/rutaBackend";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./DetailsNewPaper.css";
import Ads from "../../../pages/Home/Ads";  

const DetailsCompany = () => {
  const location = useLocation();
  const newpaper = location.state?.newpaper;

  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div className="containerDetailNewPaper">
      <Ads/>
      {newpaper &&
        Object.entries(newpaper).map(([key, value]) => {
          const tag = key.slice(0, -1); // Saca el último caracter

          switch (tag) {
            case "title":
              return (
                <h1 className="titleGralh1 instrument-serif-regular" key={key}>
                  {value}
                </h1>
              );

            case "summary":
              return (
                <p className="summary" key={key}>
                  {value}
                </p>
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

            case "img":
              return <img className="imgPortada2" key={key} src={value} />;
          }
        })}
    </div>
  );
};

export default DetailsCompany;
