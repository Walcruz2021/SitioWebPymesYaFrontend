import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyItem } from "../../types/typeApp";
import {
  faShoppingCart,
  faBars,
  faMobile,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./DetailsCompany.css";
import IonIcon from "@reacticons/ionicons";
import rutaBackend from "../../helpers/rutaBackend";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../hooks/configFirebase";
import { getUserLogin } from "../../store/actions/actions";

const DetailsCompany = () => {
  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();
  const userFullName = useSelector((state) => state.userDataName);

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  console.log(useParams(), "efds");
  const { id } = useParams();
  const [details, setDetails] = useState();

  console.log(details, "empresa");
  useEffect(() => {
    functionDetails();
  }, []);

  const functionDetails = async () => {
    //const data = await axios(`https://backendtiendavirtual.onrender.com/api/detailsCompany/${id}`);
    const data = await axios(`${rutaBackend}/api/detailsCompany/${id}`);

    setDetails(data.data.search);
  };

  return (
    <div>
      {details ? (
        <div className="containerDetails">
          <br></br>
          <h1>{details.nameCompany}</h1>
          <br></br>
          <div className="containerImg">
            <img src={details.avatar} />
          </div>
          <div className="containerDetailsInt">
            <IonIcon className="IconCss" name="bookmarks-outline"></IonIcon>
            <p>{details.notesComp}</p>

            <IonIcon className="IconCss" name="call-outline"></IonIcon>
            <p>{details.phone}</p>

            <IonIcon className="IconCss" name="desktop-sharp"></IonIcon>

            <a href={details.siteWeb} target="_blank">
              Link de Sitio Web
            </a>

            <IonIcon className="IconCss" name="business-sharp"></IonIcon>
            <p>{details.country}</p>

            <IonIcon className="IconCss" name="home-outline"></IonIcon>
            <p>{details.address}</p>

            <IonIcon className="IconCss" name="trail-sign-outline"></IonIcon>
            <p>{details.cityName}</p>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
      <div className="titGral">
        <h3>OTRAS SUGERENCIAS</h3>
      </div>
    </div>
  );
};

export default DetailsCompany;
