import { useContext } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

const Footer = () => {

    return (
        <div className='shopping-cart-footer'>
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <div className='label'>Total</div>
              
                </div>
            </div>
            <div className="d-grid gap-2">
                <Link className='btn btn-primary' to='/checkout'>Proceder con el pago</Link>
            </div>     
        </div>
    )
}

export default Footer;
