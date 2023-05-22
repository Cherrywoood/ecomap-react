import React from 'react';
import './SearchResult.css'

const SearchResult = ({children, onClick}) => {
    return (
        <div className='search-result px-4 py-1 hover:bg-gray-300' onClick={onClick}>
            {children}
        </div>
    );
};

export default SearchResult;