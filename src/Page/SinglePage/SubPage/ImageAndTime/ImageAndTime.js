import React from 'react';
import './ImageAndTime.css';
import { CiDeliveryTruck } from "react-icons/ci";
const ImageAndTime = () => {
    return (
        <div className='imageAndTime'>
             <hr className='hr-sin-pro-in' />
             <div className="pro-hand-over">
                <div className="car-sec">
                <CiDeliveryTruck size={30} className='carIcon'/>

                </div>
             </div>
            
        </div>
    );
};

export default ImageAndTime;