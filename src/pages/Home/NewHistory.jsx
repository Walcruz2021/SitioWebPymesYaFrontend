import "./NewHistory.css";
import { useNavigate } from "react-router-dom";
import instagram from "../Home/imagenes/instagram.png";

const NewHistory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    // <div className="containerNewHistory" onClick={handleClick}>
    <div className="containerNewHistory">
      <h3>¡Nuevo Artículo Disponible!</h3>
      <p>Crisis Financiera Burbuja.com</p>
    </div>
  );
};

export default NewHistory;
