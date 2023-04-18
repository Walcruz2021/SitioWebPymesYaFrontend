import React, { useEffect, useState } from 'react'
import { CompanyItem } from '../../../types/typeApp';
import ModalComp from "./ModalComp"
import './CompanyEmpleo.css'
import Swal from "sweetalert2";

type Props = {
    company: CompanyItem;
 
}
// ESTE COMPONENTE ES EL QUE SE IMPRIME AL CARGAR LA PAGINA PRINCIPAL

const CompanyEmpleo = ({ company }: Props) => {

    const [stateModal, setVisualModal] = useState(false)
    console.log(stateModal, "Modal")
    const functionDetails = () => {
        // setVisualModal(!stateModal)
        Swal.fire({
            title: `${company.notesComp}`,
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
                    <h4>{company.nameCompany}</h4>
                    <p>
                        {company.cityName}-{company.country}
                    </p>
                    
                </div>

                <button className="buttonCardServ" onClick={() => functionDetails()}>Ver Empleo</button>
                
            </div>

        </>
    )
}

export default CompanyEmpleo;
