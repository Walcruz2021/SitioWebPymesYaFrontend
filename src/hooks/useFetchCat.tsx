import { useEffect, useState } from "react";

import getCategories from "../helpers/getCategories";
import { CompanyFetch, CategoryFetch } from "../types/typeApp";

const useFetchCat = () => {


    const [data, setData] = useState<CategoryFetch>({
        categories: [],
        isLoading: true,
        isError: false
    });
    

    useEffect(() => {

        getCategories()
            .then(data => {

           
                const dataCategories=data.listCategories
                setData({
                    categories: dataCategories,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    categories: [],
                    isLoading: false,
                    isError: true
                })
            })

      

    },[]);

    return data;

}

export default useFetchCat;
