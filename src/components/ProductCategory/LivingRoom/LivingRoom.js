import React from 'react';
import './LivingRoom.css';
import img from '../../../assets/Image/category/livingRoom.jpg';

const LivingRoom = () => {
    return (
        <div className='livingRoomHead'>
            <a href="product-category/living-room/">
                <div className="livingSub">
                    <img src={img} alt="" />
                    <div className="livingInfo">
                        <p className='title_living'>bedroom</p>
                        <p className='count_living'>6 products</p>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default LivingRoom;