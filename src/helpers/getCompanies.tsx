// const getProducts = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     return data;
// }

// export default getProducts;

const getCompanies = async () => {
    const response = await fetch('https://backendtiendavirtual.onrender.com/api/listCompanies');
    const data = await response.json();
    return data;
}

export default getCompanies;