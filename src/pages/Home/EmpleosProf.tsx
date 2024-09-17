import IonIcon from '@reacticons/ionicons';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {
    faTruck,
    faBrush,
    faPlug,
    faToilet,
    faHammer
} from "@fortawesome/free-solid-svg-icons";
import "./Servicios.css"
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import ListCompaniesVip from '../../components/ListCompanies/ListCompaniesVip'
import ListEmpleosVip from '../../components/ListCompanies/ListEmpleosVip'
import ListEmpleos from '../../components/ListCompanies/ListEmpleos'
const EmpleosProf = () => {

    return (
        <>
           
            
            <div className="ContainerListComp">
            
                <ListEmpleos/>
            
            </div>

            <h2>EMPLEOS DESTACADOS</h2>
            <div>
                <ListEmpleosVip />
            </div>

            <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
            <div>
                <ListCompaniesVip />
            </div>

            <div className="containerWeb">
                <h4>¿Queres que tu solicitud esté en esta página?</h4>
                <Link style={{ textDecoration: 'none' }} to={`/contactPubli`}>
                    <h3 className="buttonBanner">Clic Aqui</h3>

                </Link>
            </div>

            <ButtonBar />

        </>

    )

}

export default EmpleosProf