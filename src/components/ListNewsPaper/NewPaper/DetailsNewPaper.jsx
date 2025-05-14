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
    <div>
      <Ads />

      <div className="containerDetailNewPaper">
        {newpaper &&
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
                  />
                );
            }
          })}
      </div>
    </div>
  );
};

export default DetailsCompany;
