import React from 'react';
import './AddGift.css';
import { FaGift } from "react-icons/fa6";

const AddGift = () => {
    const handleGift = () => {
        console.log('gift');
    }
    return (
        <div className='addGiftHead'>
            <button onClick={handleGift}>
                <span className='giftIconTitle'><FaGift size={18}  className='giftIcon'/> </span>
                <p className='add-gift-title'>Add gift wrap</p>
            </button>

        </div>
    );
};

export default AddGift;