import "./NewHistory.css";
import { useNavigate } from "react-router-dom";
import instagram from "../Home/imagenes/instagram.png";

const NewHistory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/histories");
  };

  return (
    <div className="containerNewHistory" onClick={handleClick}>
      <h3 >
        ¡Nuevo Artículo Disponible!
      </h3>
      <p >
        WARREN EDWARD BUFFETT - El Oráculo de Omaha
      </p>
    </div>
  );
};

export default NewHistory;
