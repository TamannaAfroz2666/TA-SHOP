import React from 'react';
import './AboutUs.css';
import Header from '../../layout/Header/Header'
import StoryHeader from './StoryHeader/StoryHeader';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
             <div className="about-main-header">
                <Header/>
            </div>
            <div className="sub-about-header">
                <StoryHeader/>
              
            </div>
            
        </div>
    );
};

export default AboutUs;