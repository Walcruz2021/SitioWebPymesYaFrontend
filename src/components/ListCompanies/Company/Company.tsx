import { Button, Card } from 'react-bootstrap';
import { CompanyItem } from '../../../types/typeApp';

import './Company.css'

type Props = {
    company: CompanyItem;
   
}

const Company = ({company}: Props) => {
    return (
    
            <div className="CardCompany">
                <h4>{company.nameCompany}</h4>
                <p>
                    {company.notesComp}
                </p>
                <p>
                    identifier: ${company.identifier}
                </p>
                <img src={company.avatar} />
                {/* <img>{company.avatar}</img> */}
                {/* <Button variant="primary" onClick={() => handleAddToCart(product)}>Agregar al carrito</Button> */}
            </div>
        
    )
}

export default Company;
