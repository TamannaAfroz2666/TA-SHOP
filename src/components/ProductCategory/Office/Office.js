import React, { useState } from 'react';
import './Office.css';
import result from '../../../Utilities/API/category.json';
import { motion } from 'framer-motion';

const Office = () => {
    const [info, setInfo] =useState (result.office);
    return (
        <div className='office_main'>
            <a href="/product-category/office/">
                <motion.div
                whileHover={{scale: 1.051}}
                 className="officeSub">
                    <img src={info.image} alt="" />
                    <div className="office_info">
                    <p className='title_office'>{info.name}</p>
                        <p className='count_office'>{info.total_product} products</p>
                    </div>
                </motion.div>


            </a>
            
        </div>
    );
};

export default Office;