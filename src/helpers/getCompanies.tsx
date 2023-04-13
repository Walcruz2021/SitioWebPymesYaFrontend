
const getCompaniesVip=async ()=>{
    //const response=await fetch('https://backendtiendavirtual.onrender.com/api/listCompaniesByLevel') 
    const response = await fetch('https://backendcompanywalter.up.railway.app/api/listCompaniesByLevel');
    const data=await response.json()
    return data
    }
    
    export default getCompaniesVip