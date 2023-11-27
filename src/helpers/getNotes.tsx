import rutaBackend from "./rutaBackend"


const getNotes = async () => {
    const response = await fetch(`${rutaBackend}/api/getNotes`)
    const data = await response.json()
    return data
}

export default getNotes