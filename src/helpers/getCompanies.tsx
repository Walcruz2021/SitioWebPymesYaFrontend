// const getProducts = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
// }

// export default getProducts;

const getCompanies = async () => {
    //const response = await fetch('https://backendtiendavirtual.onrender.com/api/listCompanies');
    const response = await fetch('https://backendcompanywalter.up.railway.app/api/listCompanies');
    const data = await response.json();
    return data;
}

export default getCompanies;