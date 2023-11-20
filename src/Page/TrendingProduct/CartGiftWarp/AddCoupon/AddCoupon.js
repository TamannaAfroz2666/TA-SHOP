import React from 'react';
import './AddCoupon.css';
import { MdPercent } from "react-icons/md";

const AddCoupon = () => {
    const handleCoupon = () => {
        console.log('coupon');
    }
    return (
        <div className='addGiftHead'>
            <button onClick={handleCoupon}>
                <span className='giftIconTitle'><MdPercent size={18}  className='giftIcon'/> </span>
                <p className='add-gift-title'>Coupon  </p>
            </button>
            
        </div>
    );
};

export default AddCoupon;