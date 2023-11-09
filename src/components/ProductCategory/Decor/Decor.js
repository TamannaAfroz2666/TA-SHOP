import React, { useState } from 'react';
import './Decor.css';
import { motion } from 'framer-motion';
import result  from '../../../Utilities/API/category.json'

const Decor = () => {
    const [info, setInfo] = useState(result.decor);
    return (
        <div className='decorContainer'>
            <a href="product-category/decore/">
                <motion.div
                whileHover={{scale: 1.051}}
                 className="decorSub">
                    <img src={info.image} alt="" />
                    <div className="decorInfo">
                    <p className='title_decor'>{info.name}</p>
                        <p className='count_decor'>{info.total_product} products</p>
                    </div>
                </motion.div>
            </a>
            
        </div>
    );
};

export default Decor;