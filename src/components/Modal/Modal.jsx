import React from 'react';
import './Modal.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={`modal ${active ? 'active' : ''}`}>
            <div className='modal-content'>
                <button className="close" onClick={() => setActive(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;