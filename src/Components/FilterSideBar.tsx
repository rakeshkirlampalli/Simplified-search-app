import React, { useState } from 'react';
import './FilterSideBar.scss';
interface FilterProps {
    onFilterChange: (filters: any) => void;
}

export const FilterSideBar: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [brands, setBrands] = useState<{ [key: string]: boolean }>({
        'MANGO': false,
        'H & M': false,
    });

    const [prices, setPrices] = useState<{ [key: string]: boolean }>({
        '50-100': false,
        '100 - 200': false,
        '500 - 1000': false,
    });

    const [ratings, setRatings] = useState<{ [key: string]: boolean }>({
        '★★★★★': false,
        '★★★★': false,
        '★★★': false,
    });

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setFunction: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
        state: { [key: string]: boolean }
    ) => {
        const newState = { ...state, [event.target.name]: event.target.checked };
        setFunction(newState);
        onFilterChange(newState);
    };

    return (
        <div className="FilterSideBar">
               <h1>Search Items </h1>
            <div>
             
                <h2>Brands</h2>
                {Object.keys(brands).map(brand => (
                    <div key={brand}>
                        <label>
                            <input
                                type="checkbox"
                                name={brand}
                                checked={brands[brand]}
                                onChange={e => handleCheckboxChange(e, setBrands, brands)}
                            />
                            {brand}
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <h2>Price</h2>
                {Object.keys(prices).map(price => (
                    <div key={price}>
                        <label>
                            <input
                                type="checkbox"
                                name={price}
                                checked={prices[price]}
                                onChange={e => handleCheckboxChange(e, setPrices, prices)}
                            />
                            {price}
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <h2>Ratings</h2>
                {Object.keys(ratings).map(rating => (
                    <div key={rating}>
                        <label>
                            <input
                                type="checkbox"
                                name={rating}
                                checked={ratings[rating]}
                                onChange={e => handleCheckboxChange(e, setRatings, ratings)}
                            />
                            {rating}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
