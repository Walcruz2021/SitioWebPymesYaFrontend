import { Button, Card } from 'react-bootstrap';
import { CompanyItem } from '../../../types/typeApp';
import IonIcon from '@reacticons/ionicons';
import './Company.css'

type Props = {
    company: CompanyItem;
   
}
// ESTE COMPONENTE ES EL QUE SE IMPRIME AL CARGAR LA PAGINA PRINCIPAL

const Company = ({company}: Props) => {
    //console.log(company,"--->")
    return (
    
            <div className="CardCompany">

                <img src={company.avatar} />


                <div className="Contenido">
                <h4>{company.nameCompany}</h4>  
                <p>
                    {company.cityName}-{company.country}
                </p>
                </div>
                
                
                {/* <img>{company.avatar}</img> */}
                {/* <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button> */}
            </div>
        
    )
}

export default Company;
