
import React from 'react';
import { CompanyItem } from "../../../types/typeApp";
import CompanyOtros from "../Company/CompanyOtros"
import { Link } from 'react-router-dom';
type Props = {
    companies: CompanyItem[];
}

const ListCompaniesFilterFalse = ({companies}: Props) => {

    const filteredCompanies = companies.filter((company: CompanyItem) => !company.levelPay);

    console.log(filteredCompanies,"---> FALSE")
    return (
        <div>
           
                {filteredCompanies.map(company => (
                    <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${company._id}`}> 
                    <CompanyOtros
                        key={company._id}
                        company={company}
                    />
                    </Link>
                ))}
            
        </div>
    );
}

export default ListCompaniesFilterFalse;