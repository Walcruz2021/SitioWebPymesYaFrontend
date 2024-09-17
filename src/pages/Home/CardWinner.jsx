import "./CardWinner.css";

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
  buttonNext,
}) => {
  return (
    <div className="containerGlobalWeb">
      <div className="titGral">
        <h3>{titulo}</h3> {/*ANDREW CARNEGIE*/}
      </div>
      <p>{contenido1}</p>
      <p>{contenido2}</p>
      <div className="imgGral">
      <img src={imagen1} alt={titulo} />

      </div>
      <p>{contenido3}</p>
      <p>{contenido4}</p>
      <p>{contenido5}</p>
      <p>{contenido6}</p>
      <p>{contenido7}</p>
      <p>{contenido8}</p>
      <p>{contenido9}</p>
      <div className="imgGral">
      <img src={imagen2} alt={titulo} />

      </div>
      <h5>{contenido10}</h5>

      {buttonNext ? (
        <button className="buttonNote" onClick={siguiente}>
          Siguiente Historia
        </button>
      ) : null}
      {buttonBack ? (
        <button className="buttonNote" onClick={anterior}>
          Anterior Historia
        </button>
      ) : null}
    </div>
  );
};

export default CardWinner;
