import React from 'react'
import { useContext } from 'react';

import useFetch from '../../hooks/useFetchComp';
import { ProductItem } from '../../types/typeApp';
import Product from './Product/Product';

const ListProducts = () => {



    //const { products, isLoading } = useFetch();
    
    //console.log(products)



    //if(isLoading) return <h1>Cargando...</h1>

    return (
        <>
            {/* {
                products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            } */}
        </>
    )
}

export default ListProducts;
