import { useEffect, useState } from "react";
import getCompanies from "../helpers/getCompanies";
import getCategories from "../helpers/getCategories";
import { CompanyFetch, CategoryFetch } from "../types/typeApp";


const useFetchComp = () => {

    const [data, setData] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    });

    useEffect(() => {

        getCompanies()
            .then(data => {

                //const customData = data.map((product: ProductItem) => ({ ...product, description: product.description.substring(0,55)}));
                
                //console.log(data.listCompanies,"listado de comapnies")
                const dataCompanies=data.listCompanies
                setData({
                    companies: dataCompanies,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    companies: [],
                    isLoading: false,
                    isError: true
                })
            })

      

    },[]);

    return data;

}

export default useFetchComp;


