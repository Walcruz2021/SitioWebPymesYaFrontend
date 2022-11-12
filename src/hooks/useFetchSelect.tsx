import { useEffect, useState } from "react";

import getCategories from "../helpers/getCategories";
import { CompanyFetch, CategoryFetch } from "../types/typeApp";

const useFetchSelect = (props:any) => {
console.log(props)

    const [data, setData] = useState<CategoryFetch>({
        categories: [],
        isLoading: true,
        isError: false
    });
    



    return data;

}

export default useFetchSelect;
