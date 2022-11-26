import { Button, Card } from 'react-bootstrap';
import { CompanyItem } from '../../../types/typeApp';

import './Company.css'

type Props = {
    company: CompanyItem;
   
}

const Company = ({company}: Props) => {
    return (
    
            <div className="CardCompany">

<img src={company.avatar} />


                <div className="Contenido">
                <h4>{company.nameCompany}</h4>
                <p>
                    {company.notesComp}
                </p>
                <p>
                    identifier: ${company.identifier}
                </p>    
                </div>
                
                
                {/* <img>{company.avatar}</img> */}
                {/* <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button> */}
            </div>
        
    )
}

export default Company;
