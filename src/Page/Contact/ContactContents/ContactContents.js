import React from 'react';
import './ContactContents.css';
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { HiStar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const ContactContents = () => {
    return (
        <div className='Contact_Contents'>
            <div className='helpContents'>
                <div className="contents">
                    <div className="acc-pri">
                        <div className="acc-privacy">
                            <span className='main-fa'><FaUser className='fa-title' /></span>
                            <h4 className='acc-title'>Phone Number</h4>
                            <p className='acc-des'>929-242-6868.</p>
                        </div>
                    </div>
                    <div className="support-sp">
                        <div className="acc-privacy">
                            <span className='main-fa'><BiSupport className='fa-title' /></span>
                            <h4 className='acc-title'>Email</h4>
                            <p className='acc-des'>contact@info.com</p>
                        </div>

                    </div>
                    <div className="seller-stand">
                        <div className="acc-privacy">
                            <span className='main-fa'><HiStar className='fa-title' /></span>
                            <h4 className='acc-title'>Address</h4>
                            <p className='acc-des'>123 Fifth Avenue, New York, NY 10160</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContents;