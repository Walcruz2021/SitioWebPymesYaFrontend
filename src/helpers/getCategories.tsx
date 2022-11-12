const getCategories = async () => {
    const response = await fetch('https://backendtiendavirtual.onrender.com/api/listCategories');
    const data = await response.json();
    return data;
}

export default getCategories;