import React from 'react';
import './HelpHeader.css';

const HelpHeader = () => {
    return (
        <div className='helpHeader'>
            <h5 className='supportCls'>24/7 Support</h5>
            <h1 className='title'>Ready to help</h1>
            <div className="hr-sec">
                <hr className='hrHelp' />
            </div>
        </div>
    );
};

export default HelpHeader;