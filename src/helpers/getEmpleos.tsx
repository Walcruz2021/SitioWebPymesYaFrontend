import rutaBackend from "./rutaBackend";


const getEmpleos=async ()=>{
    //const response=await fetch('https://backendtiendavirtual.onrender.com/api/listCompaniesByLevel') 
    const response = await fetch(`${rutaBackend}/api/listEmpleos`);

    const data=await response.json()
    console.log(data)
    return data
    }
    
    export default getEmpleos