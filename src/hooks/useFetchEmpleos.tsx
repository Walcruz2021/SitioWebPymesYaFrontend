import { useEffect, useState } from "react"
import getEmpleos from "../helpers/getEmpleos"
import { CompanyFetch } from "../types/typeApp"


const useFetchEmpleos = () => {

    const [data, setData] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {

        getEmpleos()
            .then(data => {
                const dataCompanies=data.listEmpleos
                setData({
                    companies: dataCompanies,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    companies: [],
                    isLoading: true,
                    isError: true
                })
            })
    }, [])
    return data
}

export default useFetchEmpleos
