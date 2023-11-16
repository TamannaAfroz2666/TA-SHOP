import React from 'react';
import './ImageAndTime.css';
import { CiDeliveryTruck } from "react-icons/ci";
import img1 from '../../../../assets/Image/Card/visaCard.webp'
const ImageAndTime = () => {
    return (
        <div className='imageAndTime'>
            <hr className='hr-sin-pro-in' />
            {/* delivery date located */}
            <div className="pro-hand-over">
                <div className="car-sec">
                    <CiDeliveryTruck size={30} className='carIcon' />
                </div>
                <div className="deliveryTime">
                    <p className='orderInCls'>Order in the next 12 hours 46 minutes to get it between <span className='dateDelStart'> Tuesday, Nov 21 </span> and <span className='dateDelStart'>Saturday, Nov 25</span></p>
                </div>
            </div>
            <hr className='hr-sin-pro-in' />
            <div className="card-company">
                <h5 className='title'>GUARANTEE SAFE & SECURE CHECKOUT</h5>
                <div className="image-card">
                    <img src={img1} alt="" />

                </div>
            </div>

        </div>
    );
};

export default ImageAndTime;