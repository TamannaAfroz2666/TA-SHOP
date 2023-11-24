import React from 'react';
import './FQAHelp.css'
import FQAContents from './FQAContents/FQAContents';

const FQAHelp = () => {
    return (
        <div className='fqaHelp'>
            <h5 className='supportCls'>faq</h5>
            <h1 className='title'>Find Answers</h1>
            <div className="hr-sec">
                <hr className='hrHelp' />
            </div>
            <div className="fqa-content">
                <FQAContents />
            </div>
            
        </div>
    );
};

export default FQAHelp;