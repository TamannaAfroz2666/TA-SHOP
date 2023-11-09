import React from 'react';
import './LivingRoom.css';
import result from '../../../Utilities/API/category.json'

const LivingRoom = () => {

    return (
        <div className='livingRoomHead'>
            <a href="product-category/living-room/">
                <div className="livingSub">
                    <img src={result.livingRoom.image} alt="" />
                    <div className="livingInfo">
                        <p className='title_living'>{result.livingRoom.name}</p>
                        <p className='count_living'>{result.livingRoom.total_product} products</p>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default LivingRoom;