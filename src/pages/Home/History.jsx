import React, { useState } from "react";
import "./History.css";

const History = ({
  titulo,
  imagen1,
  titulo2,
  titulo3,
  titulo4,
  titulo5,
  contenido1,
  imagen2,
  imagen3,
  imagen4,
  contenido2,
  contenido3,
  contenido4,
  contenido5,
  contenido6,
  contenido7,
  contenido8,
  contenido9,
  contenido10,
  contenido11,
  contenido12,
  contenido13,
  contenido14,
  contenido15,
  contenido16,
  contenido17,
  contenido18,
  contenido19,
  siguiente,
  anterior,
  buttonBack,
  buttonNext,
}) => {
  return (
    <div className="classHistory">
       <h3>{titulo}</h3> {/*grimoldi */}
      <p>{contenido1}</p> {/*(grim/En el año 1860..)*/}
      <p>{contenido2}</p> {/*(grim/En 1895 mientras..)*/}
      <img src={imagen1} alt={titulo} /> 
      <h3>{titulo2}</h3> {/*Un heroes sin capa */}
      <p>{contenido3}</p> 
      <p>{contenido4}</p>
      <h3>{titulo3}</h3>
      <p>{contenido5}</p>
      <p>{contenido6}</p>
      <p>{contenido7}</p>
      <p>{contenido8}</p>
      <p>{contenido9}</p>
      <img src={imagen2} alt={titulo} />
      <p>{contenido10}</p>
      <p>{contenido11}</p>
      <h3>{titulo4}</h3>
      <p>{contenido12}</p>
      <p>{contenido13}</p>
      <p>{contenido14}</p>
      <p>{contenido15}</p>
      {imagen3?<img src={imagen3} alt={titulo}/>:null}
      <h3>{titulo5}</h3>
      <p>{contenido16}</p>
      <p>{contenido17}</p>
      <p>{contenido18}</p>
      <p>{contenido19}</p>
      {imagen4?<img src={imagen4} alt={titulo}/>:null}
      {buttonNext ? (
        <button className="buttonHistory" onClick={siguiente}>
          Siguiente Historia
        </button>
      ) : null}
      {buttonBack ? (
        <button className="buttonHistory" onClick={anterior}>
          Anterior Historia
        </button>
      ) : null}
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
