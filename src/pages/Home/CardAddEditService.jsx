import "./CardAddEditService.css";

import { Link } from "react-router-dom";
import addServ from "../../icons/iconAddNote.png";
import editServ from "../../icons/editService.png";


const CardAddEditService = ({ user, email }) => {

  return (
    <div className="containerCard">
      <Link to="/addService">
        <button>
          <img className="imgCard" src={addServ} alt="icon add service"/>
        </button>
      </Link>
  
      <Link to="/editService">
        <button>
          <img className="imgCard" src={editServ} alt="icon edit service"/>
        </button>
      </Link>
    </div>
  );
};

export default CardAddEditService;
