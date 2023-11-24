import React from 'react';
import './SingUpContent.css'

const SingUpContent = () => {
    return (
        <div className='SingUpContent'>
            <div className="info-sec-singUp">
                <label htmlFor="name" className='nameTitleSing'>Name <span className='starIc'>*</span></label>
                <div className="names-section">
                    <div className="firstNameCon">
                        <input type="text" placeholder='' name='firstName' className='nameClsSing' /> <br />
                        <label htmlFor="firstName" className='firstNameLabel'>First</label>

                    </div>
                    <div className="firstNameCon">
                        <input type="text" placeholder='' name='firstName' className='nameClsSing' /> <br />
                        <label htmlFor="firstName" className='firstNameLabel'>Last</label>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default SingUpContent;