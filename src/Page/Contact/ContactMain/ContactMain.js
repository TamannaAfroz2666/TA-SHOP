import React from 'react';
import './ContactMain.css';
import Header from '../../../layout/Header/Header';
import Contact from '../Contact';

const ContactMain = () => {
    return (
        <div className='contactMain'>
             <div className="contact-main-header">
                <Header/>
            </div>
            <div className="sub-help-header">
               <Contact/>
            </div>
            
        </div>
    );
};

export default ContactMain;