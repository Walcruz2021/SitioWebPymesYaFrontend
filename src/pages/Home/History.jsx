import React, { useState } from "react";
import "./History.css";


//ESTE ES EL QUE DETERMINA LA POSICION DE LOS PARRAFOS TITULOS E IMAGENES
const History = ({
  titulo,
  imagen1,
  titulo2,
  titulo3,
  titulo4,
  titulo5,
  titulo6,
  contenido1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
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
  contenido20,
  contenido21,
  contenido22,
  contenido23,
  contenido24,
  contenido25,
  siguiente,
  anterior,
  buttonBack,
  buttonNext,
}) => {
  return (
    <div className="classHistory">
      <h3>{titulo}</h3> {/*ANDREW CARNEGIE*/}
      <p>{contenido1}</p> {/*En untiempo don*/}
      <p>{contenido2}</p> {/*La semilla*/}
      <img src={imagen1} alt={titulo} /> 
      <h3>{titulo2}</h3> {/*" "*/}
      <p>{contenido3}</p> {/*En las entra*/}
      <p>{contenido4}</p> {/*La educ*/}
      <h3>{titulo3}</h3> {/*carrera y evolu*/}
      <p>{contenido5}</p> {/*1860-1865 Guerra*/}
      <p>{contenido6}</p> {/*Antes de que*/}
      <p>{contenido7}</p> {/*En 1864 Carnie*/}
      <p>{contenido8}</p> {/*Carnegie trabajo*/}
      <p>{contenido9}</p> {/*Tras la guerra*/}
      <img src={imagen2} alt={titulo} />
      <h3>{titulo6}</h3> {/*1875-1900: El imperio del acero*/}
      <p>{contenido10}</p> {/*Carnegie logró amasar una*/}
      <p>{contenido11}</p> {/*Hacia 1889, el*/}
      {imagen6?<img src={imagen6} alt={titulo}/>:null}
      <h3>{titulo4}</h3>
      <p>{contenido12}</p> {/*Pero en el camino*/}
      <p>{contenido13}</p> {/*La huelga de Homestead*/}
      <p>{contenido14}</p> {/*Carnegie se fue de viaje*/}
      <p>{contenido15}</p> {/*El sindicato y la empresa*/}
      {imagen5?<img src={imagen5} alt={titulo}/>:null}
      {imagen3?<img src={imagen3} alt={titulo}/>:null}
      <h3>{titulo5}</h3>
      <p>{contenido16}</p> {/*El 6 de julio, la llegada*/}
      <p>{contenido17}</p> {/*Sin embargo, ¿qué hizo*/}
      <p>{contenido18}</p> {/*Gasto mucho*/}
      <p>{contenido19}</p> {/*Es un proyecto que aún*/}
      <p>{contenido20}</p> {/*Para sus críticos, era*/}
      {imagen4?<img src={imagen4} alt={titulo}/>:null}
      <p>{contenido21}</p> {/*En 1889 escribió*/}
      <p>{contenido22}</p> {/*Allí defiende el capitalismo*/}
      <p>{contenido23}</p>
      <p>{contenido24}</p>
      <p>{contenido25}</p>
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
