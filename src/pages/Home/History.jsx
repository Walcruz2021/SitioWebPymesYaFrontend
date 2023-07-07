import React, { useState } from 'react';
import "./History.css"

const History = ({ titulo,imagen1,contenido1,imagen2,contenido2, siguiente, anterior,buttonBack,buttonNext}) => {
    return (
      <div>
        <h3>{titulo}</h3>
        <img src={imagen1} alt={titulo} />
        <p>{contenido1}</p>
        <img src={imagen2} alt={titulo} />
        <p>{contenido2}</p>
        {buttonNext?<button className="buttonHistory" onClick={siguiente}>Siguiente Historia</button>:null}
        {buttonBack?<button className="buttonHistory" onClick={anterior}>Anterior Historia</button>:null}
      </div>
    );
  };

export default History;

// import NavBar from "../../components/NavBar/NavBarBoostrap";
// import "./History.css";
// import ButtonBar from '../../components/ButtonBar/ButtonBar';

// const History = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="titGlobal">
//         <h1>NUESTROS SERVICIOS</h1>
//         <div className="containerHistory">
//           <p>
//            a apostar por la innovación. Crearon "la marca del medio punto", frase que registraron y que indicaba una manera de medir calces por medio centímetro en lugar de tres cuartos de centímetros.
//           </p>
//           <button className="buttonHist">Siguiente Historia</button>
//         </div>
//       </div>
//       <ButtonBar/>
//     </>
//   );
// };

// export default History;
