import React, {useState} from 'react';
import './Slider.css'

const Slider = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const handleTouchStart = (e) => {
        console.log('touch start')
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        console.log('move')
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            nextSlide();
        }

        if (direction < -10) {
            prevSlide();
        }

        setTouchPosition(null);
    }


    return (
        <div className='slider'
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}>
            {
                images.length > 1 &&
                <div>
                    <button className='slider-button prev' onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                    <button className='slider-button next' onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            }
            <ul style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                {
                    images.map((image, index) =>
                        <li key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                            <img src={image} alt={`slide-${index}`}/>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Slider;