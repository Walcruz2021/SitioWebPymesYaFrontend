import React, { useEffect, useState } from 'react'
import { ServiceItem } from '../../../types/typeApp';
import ModalComp from "./ModalComp"
import './CompanyServ.css'
import Swal from "sweetalert2";

type Props = {
    company: ServiceItem;

}
// ESTE COMPONENTE ES EL QUE SE IMPRIME AL CARGAR LA PAGINA PRINCIPAL

const CompanyServ = ({ company }: Props) => {

    const [stateModal, setVisualModal] = useState(false)

    const functionDetails = () => {

        // setVisualModal(!stateModal)
        console.log(company.noteService)
        Swal.fire({
            title: `${company.noteService}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    return (
        <>
            <div className="CardCompany">
                <div className="Contenido">
                    <h4>Empresa</h4> {company.nameCompany ? <p>{company.nameCompany}</p> : <p>Sin Dato</p>}
                    <h4>Prestador Servicio</h4> {company.fullName ? <p>{company.fullName}</p> : <p>Sin Dato</p>}

                    <h4>Contacto 1</h4>
                    <p>{company.phone}</p>

                    <h4>Contacto 2</h4> {company.phone2 ? <p>{company.phone2}</p> : <p>Sin Dato</p>}
                    <p>
                        {company.cityName}-{company.country}
                    </p>

                </div>

                {/* <img>{company.avatar}</img> */}
                {/* <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button> */}
                <button className="buttonCardServ" onClick={() => functionDetails()}>Ver Servicios</button>

                {/* {stateModal === true ?
                <ModalComp company={company} state={stateModal} setState={setVisualModal} /> : null
            } */}

            </div>

        </>
    )
}

export default CompanyServ;
