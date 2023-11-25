import React from 'react';
import './FounderInfo.css'
import FounderTitle from './FounderTitle/FounderTitle';

const FounderInfo = () => {
    return (
        <div className='founderInfo'>
            <div className="info-bg">
                <div className="hrBg">
                    <hr className='hrBgTi1' />
                </div>
                <h1 className='needHelpFounder'>Simplicity carried to an extreme becomes elegance</h1>

            </div>
            <div className="founderContent">
                <div className="founderTitleHead">
                    <FounderTitle/>
                </div>
            </div>

        </div>
    );
};

export default FounderInfo;