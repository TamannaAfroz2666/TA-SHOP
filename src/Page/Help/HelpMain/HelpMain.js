import React from 'react';
import './HelpMain.css';
import Header from '../../../layout/Header/Header';
import HelpHeader from '../HelpHeader';

const HelpMain = () => {
    return (
        <div className='helpMain'>
            <div className="help-main-header">
                <Header/>
            </div>
            <div className="sub-help-header">
                <HelpHeader/>
            </div>
            
        </div>
    );
};

export default HelpMain;