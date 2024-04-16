import "./CardAddEditService.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addServ from "../../icons/iconAddNote.png";
import editServ from "../../icons/editService.png";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import { validationAddService } from "../../reducer/actions";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./ClassGeneralWeb.css";
import { auth } from "../../hooks/configFirebase";

const CardAddEditService = () => {
  const [loginUser, setLoginUser] = useState(null);
  const userLogin = useSelector((state) => state.userDataName);
  console.log(userLogin);
  const emailLogin = useSelector((state) => state.userDataEmail);
  const serviceUser = useSelector((state) => state.validation.data.search[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailLogin) {
      dispatch(validationAddService(emailLogin));
    }
  }, [dispatch]);

  return (
    <>
      <NavBarBoostrapLogin user={userLogin} />
      <div className="containerCard">
        
          <Link to="/addService">
            <button>
              <img className="imgCard" src={addServ} alt="icon add service" />
            </button>
          </Link>

          {serviceUser ? (
            <Link to={`/editService/${serviceUser._id}`}>
              <button>
                <img
                  className="imgCard"
                  src={editServ}
                  alt="icon edit service"
                />
              </button>
            </Link>
          ) : null}
        
      </div>

      <ButtonBarBoostrap />
    </>
  );
};

export default CardAddEditService;
