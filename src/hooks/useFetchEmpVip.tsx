import { useEffect, useState } from "react"
import getEmpleosVip from "../helpers/getEmpleosVip"
import { CompanyFetch } from "../types/typeApp"


const useFetchEmpVip = () => {

    const [data, setData] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {

        getEmpleosVip()
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

export default useFetchEmpVip
