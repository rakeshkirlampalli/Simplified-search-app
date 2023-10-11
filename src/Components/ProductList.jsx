// components/ProductList.tsx
import './ProductList.scss';
import React, { useState, useEffect } from 'react';
import filterProducts from '../utils/filterProducts';
import products from '../data/products';
import { ProductItem } from './ProductItem';
interface ProductL {
    query: string;
}

const ProductList: React.FC<ProductL> = ({ query }) => {
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    useEffect(() => {
        setFilteredProducts(filterProducts(query));
    }, [query]);
    return (
        <div className="productListContainer">
        {filteredProducts && filteredProducts.map(product => (
            <div className="ProductItem" key={product.id}>
                <ProductItem product={product} />
            </div>
        ))}
       </div>
    );
}

export default ProductList;
