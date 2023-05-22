import React from 'react';
import './EcopointFractionFilterItem.css'

const EcopointFractionFilterItem = ({name, image, alt, onClick, isSelected}) => {
    return (
        <div className="flex flex-col items-center space-y-1.5">
            <div className="fraction-filter flex flex-col mt-6 px-2.5 relative cursor-pointer" onClick={onClick}>
                <div className={`h-14 w-14 rounded-full border
                 ${isSelected ? "border-green-100 border-solid" : "border-white border-dashed"}`}/>
                <img className="absolute left-0 -top-6" src={image} alt={alt}/>
            </div>
            <span style={{overflowWrap: "anywhere"}}
                  className={`text-sm/4 text-center p-0.5 ${isSelected ? "text-green-100" : "text-white"}`}>{name}</span>
        </div>
    );
};

export default EcopointFractionFilterItem;