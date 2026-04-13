import React, { useState } from 'react'

import useFetchEmpVip from '../../hooks/useFetchEmpVip';
import "./ListCompanies.css"

const ListEmpleosVip = () => {


    const { companies, isLoading } = useFetchEmpVip();

    if (isLoading) return <div className="titGral"><h1>Cargando...</h1></div>

    return (
        <>
        <div className="ContainerListComp">
            {/* {
                companies && companies.map(company => (
                    <div className="ContainerCompany">
                            <CompanyServ
                                key={company._id}
                                company={company}
                            />
                    </div>


                ))
            } */}

        </div> 

    
        </>
    )
}

export default ListEmpleosVip;