import React from 'react';
import './LivingRoom.css';
import result from '../../../Utilities/API/category.json'
import { motion } from 'framer-motion';

const LivingRoom = () => {

    return (
        <div className='livingRoomHead'>
            <a href="product-category/living-room/">
                <motion.div
                whileHover={{scale:1.051}}
                 className="livingSub">
                    <img src={result.livingRoom.image} alt="" />
                    <div className="livingInfo">
                        <p className='title_living'>{result.livingRoom.name}</p>
                        <p className='count_living'>{result.livingRoom.total_product} products</p>
                    </div>
                </motion.div>
            </a>

        </div>
    );
};

export default LivingRoom;