import { useEffect, useState } from "react"
import getProfesionalsVip from "../helpers/getProfesionalsVip"
import { ServiceFetch } from "../types/typeApp"


const useFetchVip = () => {

    const [data, setData] = useState<ServiceFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {

        getProfesionalsVip()
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
