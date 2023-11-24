import React from 'react';
import './SingUpContent.css'

const SingUpContent = () => {
    return (
        <div className='SingUpContent'>
            <div className="info-sec-singUp">
                {/* name  */}
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
                {/* email  */}
                <label htmlFor="name" className='emailTitleSing'>Email <span className='starIc'>*</span></label>
                <div className="email-secSing">
                    <input type="email" placeholder='' name='firstName' className='EmailClsSing' />
                </div>
                {/* message  */}
                <label htmlFor="name" className='emailTitleSing'>Message <span className='starIc'>*</span></label>
                <div className="message-secSing">
                    <textarea type="text" placeholder='' name='firstName' className='textareaClsSing' />
                </div>
                <div className="btn-singUp-sec">
                    <button className='send-btn'>
                        send
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SingUpContent;