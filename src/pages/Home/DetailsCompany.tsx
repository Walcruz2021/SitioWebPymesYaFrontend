import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { CompanyItem } from '../../types/typeApp'
import { faShoppingCart, faBars,faMobile,faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from "../../components/NavBar/NavBar"
import axios from 'axios'
import "./DetailsCompany.css"
import IonIcon from '@reacticons/ionicons';

const DetailsCompany = () => {

    console.log(useParams())
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<CompanyItem>()


    useEffect(() => {
        functionDetails()
    }, [])

    const functionDetails = async () => {

        //http://localhost:3002/api/detailsCompany/63618166dde9b62b24bcd4cc
        //https://backendtiendavirtual.onrender.com/api/detailsCompany/6362b27daaf58410488c4f7c
        const data = await axios(`https://backendtiendavirtual.onrender.com/api/detailsCompany/${id}`);
        setDetails(data.data.search)
    }

    return (
        <div>
         <NavBar/>
            {details ?
            <div className="containerDetails">
                <h1>{details.nameCompany}</h1>
                <img src={details.avatar} />
                <p>{details.notesComp}</p>
                <div className="icon">
               
                <IonIcon className="IconPhone" name="call-outline"></IonIcon>
                <IonIcon name="home-outline"></IonIcon>

                </div>
           
                <p>{details.phone}</p>
                <p>{details.country}</p>
                <p>{details.cityName}</p>
               
            </div>
            
                : <h1>Loading....</h1>
            }
        </div>

    )
}

export default DetailsCompany