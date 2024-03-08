import "./CardAddEditService.css";
import { useHistory } from "react-router-dom";
import editServ from "../../icons/editService.png";
import FormEditService from "../../forms/FormEditService";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import { useSelector } from "react-redux";

const CardEditService = (idServ) => {
  var userFullName = useSelector((state) => state.userDataName);
  const history = useHistory();
  const handleImageClick = () => {
    //Redireccionar a la ruta /editService y pasar la prop serv
    history.push({
      pathname: `/editService/${idServ.idServ}`,
    });
  };

  return (
    <>
      <NavBarBoostrapLogin user={userFullName} />
      <div className="containerCard">
        <button onClick={handleImageClick}>
          <img className="imgCard" src={editServ} alt="icon edit service" />
        </button>
      </div>
    </>
  );
};

export default CardEditService;
