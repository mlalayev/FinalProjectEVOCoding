import React, { useState, useEffect } from 'react';
import './SectionSixth.css';
import { useTranslation } from 'react-i18next';
import { PiBookLight } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
import categories from '../../../../MainPage-SectionSixth.json';
import { FaPlay } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";



function SectionSixth() {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const renderIcon = (iconName, color) => {
        const IconComponent = {
            PiBookLight: PiBookLight,
            FaKey: FaKey,
            IoSaveOutline: IoSaveOutline
        }[iconName];

        return <IconComponent size={18} color={color} className='icons-section-sixth' />;
    };

    return (
        <div className='SixthSection'>
            <h1>{t('sectionsixth.textone')}</h1>
            <p>{t('sectionsixth.texttwo')}</p>

            <div className="sectionsixth-category-holder">
                {categories.map(category => (
                    <div
                        key={category.id}
                        className={`category-holder bgcolorWhite display-flex ${selectedCategory?.id === category.id ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {renderIcon(category.icon, category.color)}
                        <p className='category-holder-text-one'>{t(category.text)}</p>
                    </div>
                ))}
            </div>

            {selectedCategory && (
                <div className="selected-category-content">
                    <img src={selectedCategory.image} alt={t(selectedCategory.text)} className='sectionsixthimage' />
                    <button className="play-button" onClick={() => window.open(selectedCategory.videoUrl, '_blank')}>
                        <div className="play-icon-holder">
                            <IoPlayCircle size={30} className='play-icon' />
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}

export default SectionSixth;
