import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetchVip from '../../hooks/useFetchVip';
import { ProductItem } from '../../types/typeApp';
import Company from './Company/Company';
import "./ListCompanies.css"

const ListCompanies = () => {



    const { companies, isLoading } = useFetchVip();

    if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className="ContainerListComp">
            {
                companies && companies.map(company => (
                    <div className="ContainerCompany">
                        <Link to={`/detailsCompany/${company._id}`}>
                            <Company
                                key={company._id}
                                company={company}
                            />
                        </Link>
                    </div>


                ))
            }

        </div >
    )
}

export default ListCompanies;