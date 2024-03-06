import "./CardAddEditService.css";
import { useHistory } from 'react-router-dom';
import editServ from "../../icons/editService.png";
import FormEditService from "../../forms/FormEditService";

const CardEditService = ({serv}) => {
console.log(serv)
    const history = useHistory();
    const handleImageClick = () => {
      // Redireccionar a la ruta /editService y pasar la prop serv
    //   history.push({
    //     pathname: '/editService',
    //     state: { serv: "xxxx" }
    //   });
    return(
        <>
        <h1>fdgdf</h1>
        </>
    )
    };

  return (
    <div className="containerCard">
      <button onClick={handleImageClick}>
        <img className="imgCard" src={editServ} alt="icon edit service"/>
      </button>
    </div>
  );
};

export default CardEditService;
