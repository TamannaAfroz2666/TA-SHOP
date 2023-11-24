import React from 'react';
import './ContactContents.css';
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactContents = () => {
    return (
        <div className='Contact_Contents'>
            <div className='helpContents'>
                <div className="contents">
                    <div className="acc-phone">
                        <div className="acc-privacy">
                            <span className='main-fa-contact'><IoCall className='fa-title' size={60} /></span>
                            <h4 className='acc-title-contact'>Phone Number</h4>
                            <h3 className='acc-des-contact'>929-242-6868.</h3>
                        </div>
                    </div>
                    <div className="email-acc">
                        <div className="acc-privacy">
                            <span className='main-fa-contact'><MdOutlineMail className='fa-title' size={60} /></span>
                            <h4 className='acc-title-contact'>Email</h4>
                            <h3 className='acc-des-contact'>contact@info.com</h3>
                        </div>

                    </div>
                    <div className="address-acc">
                        <div className="acc-privacy">
                            <span className='main-fa-contact'><FaLocationDot className='fa-title' size={60} /></span>
                            <h4 className='acc-title-contact'>Address</h4>
                            <h3 className='acc-des-contact'>123 Fifth Avenue, New York, NY 10160</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContents;