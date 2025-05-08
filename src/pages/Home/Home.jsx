import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ListCompaniesVip from "../../components/ListCompanies/ListCompaniesVip";
import useFetchCat from "../../hooks/useFetchCat";
import "./styles.css";
// import { CompanyFetch } from '../../types/typeApp.js';
import axios from "axios";
import CompanyOtros from "../../components/ListCompanies/Company/CompanyOtros";
import "./Home.css";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import rutaBackend from "../../helpers/rutaBackend";
// import {exportImg} from "./imagenes/icons/hospital.png"
import ListCompaniesFilterTrue from "../../components/ListCompanies/filterCompanies/ListCompaniesFilterTrue";
import ListCompaniesFilterFalse from "../../components/ListCompanies/filterCompanies/ListCompaniesFilterFalse";
import { getUserLogin } from "../../store/actions/actions";
import { auth } from "../../hooks/configFirebase";
import { Fade } from "react-swift-reveal";
import { Bounce } from "react-swift-reveal";
import { Flip } from "react-swift-reveal";
import { Jump } from "react-swift-reveal";
import News from "../../components/Notes/News";
import Ads from "../../pages/Home/Ads";

const Home = () => {
  return (
    <div className="home-container">
    
    </div>
  );
};

export default Home;
