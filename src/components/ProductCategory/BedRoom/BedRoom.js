import React, { useState } from 'react';
import './BedRoom.css';

import result from '../../../Utilities/API/category.json'


const BedRoom = () => {
    const [info, setInfo] = useState(result.bedRoom)
    console.log('bed room data ', info);
    return (
        <div className='bed_room'>
            <a href="product-category/bedroom/">
                <div className="sub_bedRoom">
                    <img src={info.image} alt="" />
                    <div className="info_bed">
                        <p className='title_bed'>{info.name}</p>
                        <p className='count_bed'>{info.total_product} products</p>
                    </div>
                </div>
            </a>


        </div>
    );
};

export default BedRoom;