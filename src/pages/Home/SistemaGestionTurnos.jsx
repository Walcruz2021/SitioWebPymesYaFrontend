import "./Services.css";
import responsiveIcon from "../../icons/responsiveIcon.png";
import designSample from "../../icons/desingSample.png";
import installSample from "../../icons/installSample.png";
import { BsSmartwatch } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";

import imgSist from "../../icons/appSist.png";
import "./SistemaGestionTurnos.css";
import { useDispatch, useSelector } from "react-redux";
import { SiSimpleanalytics } from "react-icons/si";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Bounce } from 'react-swift-reveal';
import { LightSpeed } from 'react-swift-reveal';
import { Flip } from 'react-swift-reveal';
import sistemaBanner from "../../icons/sistemaBanner.jpg";
import { motion } from 'motion/react';
import { Cpu, Globe, Flower2, ArrowRight, Zap, Layers } from 'lucide-react';
import videoPublicidad from "../../../src/icons/finalPublicidad.mp4"
import ContainerCards from "../../cardSection/ContainerCards";
import BannerSistemaTurnos from "../../banner/BannerSistemaTurnos"
import BannerSistemaTurnosOptions from "../../banner/BannerSistemaTurnosOptions"
const SistemaGestionTurnos = () => {


  return (
    <div>
      <BannerSistemaTurnos />
      <BannerSistemaTurnosOptions />
      <ContainerCards />

      {/* <div className="containerOurServ">
        <div className="containerVideo">
          <video
            src={videoPublicidad}
            loop
            controls
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

      </div> */}

    </div>
  );
};

export default SistemaGestionTurnos;
