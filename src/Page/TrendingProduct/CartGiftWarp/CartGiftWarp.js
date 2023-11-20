import React from 'react';
import './CartGiftWarp.css';
import AddGift from './AddGift/AddGift';


const CartGiftWarp = () => {
    return (
        <div className='CartGiftWarp'>
            <div className="card-gifts-content">
                <div className="add-gift">
                   <AddGift></AddGift>
                </div>
                <div className="add-note">

                </div>
                <div className="add-coupon">

                </div>
                <div className="add-shipping">

                </div>

            </div>
            
        </div>
    );
};

export default CartGiftWarp;