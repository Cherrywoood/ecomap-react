import React from 'react';
import "./FilterButton.css"

const FilterButton = ({isSelected, onClick, children}) => {
    return (
        <button className={`${isSelected ? 'bg-green-100 text-green-600' : 'bg-transparent text-white'} py-2 px-3 text-sm/3
        border border-green-100 rounded-3xl`}
                onClick={onClick}>
            {children}
        </button>
    );
};

export default FilterButton;