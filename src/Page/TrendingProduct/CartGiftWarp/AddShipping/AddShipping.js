import React from 'react';
import './AddShipping.css';
import { LuBox } from "react-icons/lu";

const AddShipping = () => {
    const handleShipping = () => {
        console.log('shipping');
    }
    return (
        <div className='addGiftHead'>
            <button onClick={handleShipping}>
                <span className='giftIconTitle'><LuBox size={18}  className='giftIcon'/> </span>
                <p className='add-gift-title'>Shipping</p>
            </button>
            
        </div>
    );
};

export default AddShipping;