import rutaBackend from "./rutaBackend";


const getProfesionalsVip=async ()=>{

//const response=await fetch('https://backendtiendavirtual.onrender.com/api/listCompaniesByLevel') 
const response = await fetch(`${rutaBackend}/api/listProfesionalsByLevel`);
const data=await response.json()
return data
}

export default getProfesionalsVip  