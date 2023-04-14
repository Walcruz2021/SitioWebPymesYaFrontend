
import rutaBackend from "./rutaBackend";

const getCategories = async () => {
    //const response = await fetch('https://backendtiendavirtual.onrender.com/api/listCategories');
    const response = await fetch(`${rutaBackend}/api/listCategories`);
    
    const data = await response.json();
    return data;
}

export default getCategories;