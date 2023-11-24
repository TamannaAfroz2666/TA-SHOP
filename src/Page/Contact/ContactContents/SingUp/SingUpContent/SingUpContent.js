import React from 'react';
import './SingUpContent.css'

const SingUpContent = () => {
    return (
        <div className='SingUpContent'>
            <div className="info-sec-singUp">
                <label htmlFor="name">Name*</label>
                <div className="names-section">
                    <div className="firstNameCon">
                        <input type="text" placeholder='' name='firstName' /> <br />
                        <label htmlFor="firstName">First</label>

                    </div>
                    <div className="firstNameCon">
                        <input type="text" placeholder='' name='firstName' /> <br />
                        <label htmlFor="firstName">Last</label>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default SingUpContent;