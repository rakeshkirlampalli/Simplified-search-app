// App.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import { FilterSideBar } from './FilterSideBar';
import './BodyPage.scss'
const BodyPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleFilterChange = (filters: any) => {
    console.log(filters);
  };
  return (
    <div> 
     
      <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <div className='Body'>
      <FilterSideBar onFilterChange={handleFilterChange} />
      <ProductList query={searchQuery} />
      </div>
      </div>  
    </div>
  );
}

export default BodyPage;