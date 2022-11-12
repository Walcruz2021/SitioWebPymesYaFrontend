import { useEffect, useState } from "react"
import getCompaniesVip from "../helpers/getCompaniesVip"
import { CompanyFetch } from "../types/typeApp"

const useFetchVip = () => {
   
    const [data, setData] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {

        getCompaniesVip()
            .then(data => {
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
                    isLoading: true,
                    isError: true
                })
            })
    }, [])
    return data
}

export default useFetchVip
