import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [currentAccordionItem, setCurrentAccordionItem] = useState(null)
    const isOpenAccordionItem = (index) => {
        return currentAccordionItem === index;
    }
    const openAccordionItem = (index) => {
        if (currentAccordionItem === index)
            setCurrentAccordionItem(null)
        else
            setCurrentAccordionItem(index)
    }

    return (
        <div>
            {
                items.map((item, index) =>
                    <div key={index} className="overflow-hidden">
                        <div className="flex justify-between items-center cursor-pointer py-2.5
                         text-white border-b border-gray-500"
                             onClick={() => openAccordionItem(index)}>
                            <span className="text-base/4">{item.header}</span>
                            <svg className={`w-5 h-5 duration-200 ${isOpenAccordionItem(index) ? "rotate-180" : ""}`}
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                        <div className={`text-white text-sm ease-linear duration-200
                        ${isOpenAccordionItem(index) ? "h-auto py-2.5 border-b border-gray-500" : "h-0"}`}>
                            {item.content}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Accordion;