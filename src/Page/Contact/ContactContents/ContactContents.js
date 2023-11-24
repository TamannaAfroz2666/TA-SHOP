import React from 'react';
import './ContactContents.css';
import { IoCall } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { HiStar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

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
                            <span className='main-fa-contact'><IoCall className='fa-title' size={60} /></span>
                            <h4 className='acc-title-contact'>Phone Number</h4>
                            <h3 className='acc-des-contact'>929-242-6868.</h3>
                        </div>

                    </div>
                    <div className="address-acc">
                        <div className="acc-privacy">
                            <span className='main-fa-contact'><IoCall className='fa-title' size={60} /></span>
                            <h4 className='acc-title-contact'>Phone Number</h4>
                            <h3 className='acc-des-contact'>929-242-6868.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContents;