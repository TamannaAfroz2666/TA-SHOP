import React from 'react';
import './SingUp.css';
import SingUpHead from './SingUpHead/SingUpHead';
import SingUpContent from './SingUpContent/SingUpContent';

const SingUp = () => {
    return (
        <div className='contact-singUp' >
            <SingUpHead></SingUpHead>
            <div className="singUp-Contents">
                <SingUpContent/>
            </div>
            
        </div>
    );
};

export default SingUp;