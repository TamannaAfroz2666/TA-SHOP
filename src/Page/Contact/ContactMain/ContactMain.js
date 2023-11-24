import React from 'react';
import './ContactMain.css';
import Header from '../../../layout/Header/Header';
import Contact from '../ContactHeader';
import ContactContents from '../ContactContents/ContactContents';
import SingUp from '../ContactContents/SingUp/SingUp';

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
            <div className="contact-singUp-main">
                <SingUp />
            </div>
            
        </div>
    );
};

export default ContactMain;