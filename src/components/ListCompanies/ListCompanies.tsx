import React, { useState } from 'react'
import { useContext } from 'react';

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
                        <Company
                            key={company._id}
                            company={company}
                        />
                    </div>

                ))
            }

        </div>
    )
}

export default ListCompanies;