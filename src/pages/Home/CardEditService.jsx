import "./CardAddEditService.css";
import { useNavigate } from "react-router-dom";
import editServ from "../../icons/editService.png";

import { useSelector } from "react-redux";

const CardEditService = (idServ) => {

  const navigate = useNavigate();
  const handleImageClick = () => {
    //Redireccionar a la ruta /editService y pasar la prop serv
    navigate(`/editService/${idServ.idServ}`);
  };

  return (
    <>
     
      <div>
        <button onClick={handleImageClick}>
          <img className="imgCard" src={editServ} alt="icon edit service" />
        </button>
      </div>
    </>
  );
};

export default CardEditService;
