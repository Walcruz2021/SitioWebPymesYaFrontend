import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import useFetchEmpleos from '../../hooks/useFetchEmpleos';
import Company from './Company/Company';
import "./ListCompanies.css"

const ListEmpleos = (codigo:any) => {

    const { companies, isLoading } = useFetchEmpleos();

    if (isLoading) return <h1>Cargando...</h1>

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

   
        </>
    )
}

export default ListEmpleos;