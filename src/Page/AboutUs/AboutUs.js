import React from 'react';
import './AboutUs.css';
import Header from '../../layout/Header/Header'
import StoryHeader from './StoryHeader/StoryHeader';
import StoryContent from './StoryHeader/StoryContent/StoryContent';
import FounderInfo from './StoryHeader/StoryContent/FounderInfo/FounderInfo';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
             <div className="about-main-header">
                <Header/>
            </div>
            <div className="sub-about-header">
                <StoryHeader/>
            </div>
            <div className="content-about">
                <StoryContent/>
            </div>
            <div className="content-about">
                <FounderInfo />
            </div>
            
        </div>
    );
};

export default AboutUs;