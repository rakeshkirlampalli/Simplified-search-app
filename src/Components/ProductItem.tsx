import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';      
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { renderStars } from './renderStar';

interface Product {
    id: number;
    name: string;
    price: string;
    rating: string;
    image: string;
}

interface Props {
    product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = React.useState(false);
    return (
        <div className="product-card">
            <div>

                <div className='image-container'>
                    <img src={product.image} alt={product.name} />
                </div>
                <button className='view-product'>View Product</button>
                <div className='content'>
                    <h2>{product.name}</h2>
                    <p>Rs.{product.price}</p>
                    <div>{renderStars(Number(product.rating))}</div>
                    {/* Wishlist Icon Click Behavior */}
                    <span onClick={() => setIsWishlisted(!isWishlisted)} className='wishlist'>
                             {isWishlisted ? (
                            <FavoriteIcon style={{ color: 'red', cursor: 'pointer', width: '50px' }} />
                        ) : (
                           <FavoriteBorderIcon style={{ color: 'red', cursor: 'pointer' }} />
                   )}
                   </span> 
                
                </div>
            </div>
        </div>
    );
}
