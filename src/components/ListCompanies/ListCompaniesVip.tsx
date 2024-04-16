import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetchVip from '../../hooks/useFetchVip';
import { ProductItem } from '../../types/typeApp';
import Company from './Company/Company';
import "./ListCompanies.css"

const ListCompanies = (codigo:any) => {

    const { companies, isLoading } = useFetchVip();

    if (isLoading) return <div className="titGral"><h1>Cargando...</h1></div>

    return (
        <>
        <div className="ContainerListComp">
            {
                companies && companies.map(company => (
                    <div className="ContainerCompany">
                        <Link style={{ textDecoration: 'none'}}  to={`/detailsCompany/${company._id}`}>
                            <Company
                                key={company._id}
                                company={company}
                            />
                        </Link>
                        
                    </div>


                ))
            }

        </div> 

        {/* video 
        https://www.youtube.com/watch?v=f3902x_dqqQ&ab_channel=YoelvisMulen%7Bcode%7D */}
        {/* <div className="grid-container">
         <div className="grid-item item1">1</div>
         <div className="grid-item">2</div>
         <div className="grid-item">3</div>
         <div className="grid-item">4</div>
         <div className="grid-item">5</div>
         <div className="grid-item">6</div>
         <div className="grid-item">7</div>
         <div className="grid-item">8</div>
        </div> */}
        </>
    )
}

export default ListCompanies;