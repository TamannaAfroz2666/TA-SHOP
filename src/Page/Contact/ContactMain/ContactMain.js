import React from 'react';
import './ContactMain.css';
import Header from '../../../layout/Header/Header';
import Contact from '../ContactHeader';
import ContactContents from '../ContactContents/ContactContents';

const ContactMain = () => {
    return (
        <div className='contactMain'>
             <div className="contact-main-header">
                <Header/>
            </div>
            <div className="sub-help-header">
               <Contact/>
            </div>
            <div className="content-helps">
              <ContactContents />
            </div>
            
        </div>
    );
};

export default ContactMain;