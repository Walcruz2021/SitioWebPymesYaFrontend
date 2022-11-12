
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';


import './styles.css';



const Item = () => {



    return (
        <>
            <div className='shopping-cart-item'>
                <div className="item-action">
               
                   
                
                </div>
                <div className="item-detail">
                    <div className="item-detail-image">
          
                    </div>
                    <div className="item-detail-info">
                        <div className="item-detail-info-name">
                         
                        </div>
                        <div className="item-detail-info-prices">
                      
                        </div>
                    </div>
                </div>
             
            </div>   
        </>
    )
}

export default Item;
