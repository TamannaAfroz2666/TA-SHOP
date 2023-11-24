import React from 'react';
import './ContactHeader.css'


const ContactHeader = () => {
    return (
        <div className='contact-container'>
            <div className='helpHeader'>
                <h5 className='supportCls'>Don't be a stranger</h5>
                <h1 className='title'>Contact Us</h1>
                <div className="hr-sec">
                    <hr className='hrHelp' />
                </div>
            </div>

        </div>
    );
};

export default ContactHeader;