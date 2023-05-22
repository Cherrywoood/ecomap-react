import React, {useState} from 'react';

const SelectMenu = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0])
    const select = (e) => {
        setSelectedOption(e.target.innerText);
        setIsOpen(false);
    }

    return (
        <div className="flex flex-col text-sm text-white relative">
            <div className="flex bg-green-500 justify-between items-center rounded border
            border-white border-opacity-30 cursor-pointer z-40" onClick={() => setIsOpen(!isOpen)}>
                <span className="px-3 py-0.5">{selectedOption}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     className={`w-5 h-5 duration-500 ${isOpen ? "rotate-180" : ""}`}>
                    <path fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <ul className={`${isOpen ? "block" : "hidden"} bg-gray-900 w-full flex flex-col justify-center rounded-b absolute z-20 pt-1 top-6`}>
                {
                    options.map((option, index) =>
                        <li key={index} className="py-0.5 px-3 cursor-pointer"
                            onClick={select}>{option}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default SelectMenu;