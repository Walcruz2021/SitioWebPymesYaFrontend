
import React from 'react';
import { CompanyItem } from "../../../types/typeApp";
import Company from "../Company/Company"
import { Link } from 'react-router-dom';
type Props = {
    companies: CompanyItem[];
}

const ListCompaniesFilterTrue = ({companies}: Props) => {

    const filteredCompanies = companies.filter((company: CompanyItem) => company.levelPay);

    return (
        <div className="ContainerCompany">
           
           
                {filteredCompanies.map(company => (
                    <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${company._id}`}> 
                    <Company
                        key={company._id}
                        company={company}
                    />
                    </Link>
                ))}
            
        </div>
    );
}

export default ListCompaniesFilterTrue;