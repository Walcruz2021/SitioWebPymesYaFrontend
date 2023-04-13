import React, { useEffect, useState } from 'react'
import { CompanyItem } from '../../../types/typeApp';
import ModalComp from "./ModalComp"
import './CompanyServ.css'

type Props = {
    company: CompanyItem;
 
}
// ESTE COMPONENTE ES EL QUE SE IMPRIME AL CARGAR LA PAGINA PRINCIPAL

const CompanyServ = ({ company }: Props) => {

    const [stateModal, setVisualModal] = useState(false)
    console.log(stateModal, "Modal")
    const functionDetails = () => {
        setVisualModal(!stateModal)
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

                {/* <img>{company.avatar}</img> */}
                {/* <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button> */}
                <button className="buttonCardServ" onClick={() => functionDetails()}>Ver Servicios</button>
            
            {stateModal === true ?
                <ModalComp company={company} state={stateModal} setState={setVisualModal} /> : null
            }
            
            </div>

        </>
    )
}

export default CompanyServ;
