const getCategories = async () => {
    //const response = await fetch('https://backendtiendavirtual.onrender.com/api/listCategories');
    const response = await fetch('https://backendcompanywalter.up.railway.app/api/listCategories');
    
    const data = await response.json();
    return data;
}

export default getCategories;