import rutaBackend from "./rutaBackend";


const getEmpleosVip=async ()=>{

//const response=await fetch('https://backendtiendavirtual.onrender.com/api/listCompaniesByLevel') 
const response = await fetch(`${rutaBackend}/api/listEmpleosByLevel`);
const data=await response.json()
return data
}

export default getEmpleosVip  