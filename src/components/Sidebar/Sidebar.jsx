import React, {useState} from 'react';
import './Sidebar.css'

const Sidebar = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div
            className={`sidebar absolute flex flex-row translate-x-0 duration-300 ease-in-out ${toggle ? "sidebar-hidden" : ""}`}>
            {children}
            <button className="sidebar-toggle w-10 h-12 bg-white mt-6 rounded-r-[10px] shadow-xl"
                    onClick={handleToggle}>
                <svg className={`w-5 h-5 m-auto ${toggle ? "-scale-x-100" : ""}`} viewBox="0 0 14 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.326 9.68209C0.338 9.69209 0.353999 9.69609 0.365999 9.70609L8.08 16.6881C8.514 17.0781 9.218 17.0781 9.652 16.6881C9.656 16.6841 9.658 16.6801 9.66 16.6761C9.76509 16.5893 9.84996 16.4806 9.90869 16.3577C9.96742 16.2347 9.99858 16.1004 10 15.9641V1.99809C9.99776 1.85932 9.96507 1.72273 9.90425 1.59797C9.84342 1.47321 9.75595 1.36333 9.648 1.27609L9.652 1.27209C9.43363 1.08335 9.15463 0.979492 8.866 0.979492C8.57737 0.979492 8.29837 1.08335 8.08 1.27209L0.326 8.27009C0.223879 8.35721 0.141873 8.46545 0.08564 8.58734C0.0294071 8.70922 0.000286102 8.84186 0.000286102 8.97609C0.000286102 9.11033 0.0294071 9.24296 0.08564 9.36485C0.141873 9.48674 0.223879 9.59497 0.326 9.68209Z"
                        fill="#AAAAAA"/>
                </svg>

            </button>
        </div>
    );
};

export default Sidebar;