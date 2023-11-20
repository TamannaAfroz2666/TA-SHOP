import React from 'react';
import './CartGiftWarp.css';
import AddGift from './AddGift/AddGift';
import AddNote from './AddNote/AddNote';
import AddCoupon from './AddCoupon/AddCoupon';
import AddShipping from './AddShipping/AddShipping';


const CartGiftWarp = () => {
    return (
        <div className='CartGiftWarp'>
            <div className="card-gifts-content">
                <div className="add-gift">
                   <AddGift />
                </div>
                <div className="add-note">
                    <AddNote/>

                </div>
                <div className="add-coupon">
                    <AddCoupon/>

                </div>
                <div className="add-shipping">
                    <AddShipping />

                </div>

            </div>
            
        </div>
    );
};

export default CartGiftWarp;