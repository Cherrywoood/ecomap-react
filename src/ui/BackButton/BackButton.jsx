import React from 'react';

const BackButton = ({children, onClick}) => {
    return (
        <div className="flex items-center text-white space-x-1 cursor-pointer" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
            <span>{children}</span>
        </div>
    );
};

export default BackButton;