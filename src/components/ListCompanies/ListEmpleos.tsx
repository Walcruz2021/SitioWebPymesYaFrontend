import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import useFetchEmpleos from '../../hooks/useFetchEmpleos';
import CompanyEmpleo from './Company/CompanyEmpleo';
import "./ListCompanies.css"

const ListEmpleos = (codigo:any) => {

    const { companies, isLoading } = useFetchEmpleos();

    if (isLoading) return <div className="titGral"><h1>Cargando...</h1></div>

    return (
        <>
        <div className="ContainerListComp">
            {
                companies && companies.map(company => (
                    <div className="ContainerCompany">
                            <CompanyEmpleo
                                key={company._id}
                                company={company}
                            />
                  
                        
                    </div>


                ))
            }

        </div> 

   
        </>
    )
}

export default ListEmpleos;