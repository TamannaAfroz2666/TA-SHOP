import React from 'react';
import './HelpMain.css';
import Header from '../../../layout/Header/Header';
import HelpHeader from '../HelpHeader';
import HelpContents from '../HelpContents/HelpContents';

const HelpMain = () => {
    return (
        <div className='helpMain'>
            <div className="help-main-header">
                <Header/>
            </div>
            <div className="sub-help-header">
                <HelpHeader/>
            </div>
            <div className="content-helps">
                <HelpContents />
            </div>
            
        </div>
    );
};

export default HelpMain;