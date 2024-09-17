import React, { useEffect, useState } from 'react'
import { ServiceItem } from '../../../types/typeApp';
import ModalComp from "./ModalComp"
import './CompanyServ.css'
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import { IoPersonAdd } from "react-icons/io5";
import ListGroup from "react-bootstrap/ListGroup";
import { MdOutlinePhonelinkLock } from "react-icons/md";
//import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";
import infoCompany from "../../../icons/clientInfo.png"

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
                <Card className="">
                    <div className="d-flex justify-content-center p-2">
                        <Card.Img
                            className="p-3"
                            style={{ width: "auto", justifyContent: "center" }}
                            variant="top"
                            src={infoCompany}
                        />
                    </div>
                    <Card.Body className="bg-success p-2 text-dark bg-opacity-10">
                        <Card.Title style={{ color: '#e8e8e8' }} className="text-center fs-5">
                        {company.nameCompany ? company.nameCompany : "Sin Dato"}
                        </Card.Title>
                    </Card.Body>
                    <ListGroup>
                        <ListGroup.Item style={{ color: "#424242" }}>
                            <MdHomeRepairService style={{ marginRight: "10px", fontSize: "24px" }} />
                           DESCRIPCIONES
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: "#424242" }}>
                            <IoPersonAdd style={{ marginRight: "10px", fontSize: "24px" }} />
                            {company.fullName ? company.fullName : "Sin Dato"}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: "#424242" }}>
                            <MdOutlinePhonelinkLock style={{ marginRight: "10px", fontSize: "24px" }} />
                            {company.phone}
                        </ListGroup.Item>

                        <ListGroup.Item style={{ color: "#424242" }}>
                            <MdOutlinePhonelinkLock style={{ marginRight: "10px", fontSize: "24px" }} />
                            {company.phone2 ? company.phone2 : "Sin Dato"}
                        </ListGroup.Item>


                        <ListGroup.Item style={{ color: "#424242" }}>
                            <FaMapSigns style={{ marginRight: "10px", fontSize: "24px" }} />
                            {company.cityName}-{company.country}
                        </ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <div className="d-flex justify-content-center p-1">
                            <button
                                onClick={() => functionDetails()}
                                type="button"
                                className="btn btn-outline-secondary w-100"
                            >
                                Ver Servicios
                            </button>
                        </div>
                        {/* <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>

            </div>


        </>
    )
}

export default CompanyServ;
