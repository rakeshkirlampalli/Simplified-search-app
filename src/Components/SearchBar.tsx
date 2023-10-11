// SearchBar.tsx
import './SearchBar.scss';
import React from 'react';

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className='nav'>
            <form className="search-bar" onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="Search..."
            />
            <button type="submit">Search</button>
           </form>
           <div className='imgdiv'>
            <img style={{ width: '35%'}} src='data:image/png;base64,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' alt='/'/>
           </div>
        </div>       
    );
}

export default SearchBar;
