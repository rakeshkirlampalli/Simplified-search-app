import products from "../data/products";


const filterProducts = (query: string) => {
    if (!query) return products;

    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) 
    );
};

export default filterProducts;
 // Export the function, not the products array
