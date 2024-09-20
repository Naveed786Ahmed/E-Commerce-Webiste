import React, { useState } from 'react';
import '../index.css'

import sliderpic1 from '../assets/images/sliderpic1.webp';
import sliderpic2 from '../assets/images/sliderpic2.webp';
import sliderpic3 from '../assets/images/sliderpic3.webp';

const Slider = () => {
    const images = [sliderpic1, sliderpic2, sliderpic3];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slider">
            <button onClick={goToPrevious} className="slider-button left">{'<'}</button>
            <div className="slider-content">
                <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
            </div>
            <button onClick={goToNext} className="slider-button right">{'>'}</button>
        </div>
    );
};

export default Slider;
