import React from 'react';
import './BedRoom.css';
import image from '../../../assets/Image/category/bedroom.jpg'

const BedRoom = () => {
    return (
        <div className='bed_room'>
            <a href="product-category/bedroom/">
                <div className="sub_bedRoom">
                    <img src={image} alt="" />
                    <div className="info_bed">
                        <p className='title_bed'>bedroom</p>
                        <p className='count_bed'>6 products</p>
                    </div>
                </div>
            </a>


        </div>
    );
};

export default BedRoom;