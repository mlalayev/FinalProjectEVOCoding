import React, { useState, useEffect } from 'react';
import './Categories.css';
import CategoriesData from '../../../../CategoriesData.json';

const Categories = ({ interval = 8000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleNext();
        }, interval);

        return () => clearInterval(autoSlide);
    }, [interval]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= CategoriesData.length ? 0 : newIndex;
        });
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='category-slider-section'>
            <div className="category-card-container">
                {CategoriesData.map((category, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className={`category-card ${isActive ? 'active' : ''}`}
                            style={{ backgroundColor: category.bgColor, color: category.textColor }}
                        >
                            <img src={category.image} alt="category image" className='categoryimage' />
                            <div className="category-text-holder">
                                <h1>{category.title}</h1>
                                <p>{category.courses}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="dots-categories">
                {CategoriesData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot-categories ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Categories;
