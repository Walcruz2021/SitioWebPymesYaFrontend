import { useEffect, useState } from "react"
import getNotes from "../helpers/getNotes"
import { NoteFetch } from "../types/typeApp"


const useFetchNote = () => {

    const [data, setData] = useState<NoteFetch>({
        notes: [],
        isLoading: true,
        isError: false
    })
    

    useEffect(() => {
        getNotes()
            .then(data => {
                const dataNotes = data.listNotes
                setData({
                    notes: dataNotes,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    notes: [],
                    isLoading: true,
                    isError: true
                })
            })
    },[])
    return data
}

export default useFetchNote