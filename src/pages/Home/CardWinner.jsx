
import "./CardWinner.css"

const CardWinner = ({
  titulo,
  imagen1,
  imagen2,
  contenido1,
  contenido2,
  contenido3,
  contenido4,
  contenido5,
  contenido6,
  contenido7,
  contenido8,
  contenido9,
  contenido10,
  siguiente,
  anterior,
  buttonBack,
  buttonNext
}) => {
  return (
    <div className="classContainerCardWinner">
      <h3>{titulo}</h3> {/*ANDREW CARNEGIE*/}
      <p>{contenido1}</p> 
      <p>{contenido2}</p> 
      <img src={imagen1} alt={titulo} />
      <p>{contenido3}</p> 
      <p>{contenido4}</p> 
      <p>{contenido5}</p> 
      <p>{contenido6}</p> 
      <p>{contenido7}</p> 
      <p>{contenido8}</p> 
      <p>{contenido9}</p>
      <img src={imagen2} alt={titulo} /> 
      <h5>{contenido10}</h5>
     
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

export default CardWinner;
