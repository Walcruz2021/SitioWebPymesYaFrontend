import React, { useState } from "react";
import "./History.css";
import IonIcon from "@reacticons/ionicons";
import ListNotes from "../../components/ListNotes/listNotes";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import NavBar from "../../components/NavBar/NavBarBoostrap";


const History = ({}) => {
  return (
    <>
      <NavBar/>
    <div className="classHistory">
      <div>
        <ListNotes />
      </div>

      <div className="containerCompRedes">
        <h3>¿Te sientes Indentificado con alguna Historia?</h3>
      </div>
      <div
        className="fb-comments"
        data-href="http://www.pymesya.com/histories"
        data-size="large"
        data-width="100%"
        data-numposts="5"
      ></div>
      <ButtonBarBoostrap/>
    </div>
    </>
  );
};

export default History;
