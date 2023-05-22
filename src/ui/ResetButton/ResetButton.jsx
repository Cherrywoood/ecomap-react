import React from 'react';

const ResetButton = ({children, onClick}) => {
    return (
        <button className="flex justify-center items-center w-44 bg-white bg-opacity-30 text-white
        rounded-3xl py-1 space-x-1" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span className="text-sm">{children}</span>
        </button>
    );
};

export default ResetButton;