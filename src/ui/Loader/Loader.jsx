import React from 'react';
import "./Loader.css"

const Loader = () => {
    return (
        <div
            className="w-8 h-8 rounded-full border-4 border-green-100 border-t-transparent animate-spin pointer-events-none">
        </div>
    );
};

export default Loader;