import React from 'react';
import './HelpMain.css';
import Header from '../../../layout/Header/Header';
import HelpHeader from '../HelpHeader';
import HelpContents from '../HelpContents/HelpContents';
import FQAHelp from '../HelpContents/FQAHelp/FQAHelp';
import HelpBackgroundImg from '../HelpContents/HelpBackgroundImg/HelpBackgroundImg';

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
            <div className="content-helps">
               <FQAHelp />
            </div>
            <div className="dynamically-img">
                <HelpBackgroundImg />
            </div>
            
        </div>
    );
};

export default HelpMain;