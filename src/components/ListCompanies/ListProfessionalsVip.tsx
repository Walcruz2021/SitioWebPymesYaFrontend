import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetchProfVip from '../../hooks/useFetchProfVip';
import { ProductItem } from '../../types/typeApp';
import CompanyServ from './Company/CompanyServ';


const ListProfessionalsVip = () => {


    const { companies, isLoading } = useFetchProfVip();

    if (isLoading) return <div className="titGral"><h1>Cargando...</h1></div>

    return (
        <>
            <div className="ContainerListComp py-3">
                <div className="row justify-content-center">
                    {
                        companies && companies.map(company => (
                            <div className="col-12 col-md-4 d-flex justify-content-center mb-1">
                                <div className="fixed-width-card">

                                    <div className="card-body">
                                        <CompanyServ
                                            key={company._id}
                                            company={company}
                                        />
                                    </div>
                                </div>

                            </div>


                        ))
                    }

                </div>

            </div>


        </>
    )
}

export default ListProfessionalsVip;