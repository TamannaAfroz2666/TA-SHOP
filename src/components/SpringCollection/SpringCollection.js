import React from 'react';
import './SpringCollection.css';
import img from '../../assets/Image/SpringCollection/look1.webp'
import im2 from '../../assets/Image/SpringCollection/1.avif';
import im3 from '../../assets/Image/SpringCollection/look2.webp';
import im4 from '../../assets/Image/SpringCollection/look3.webp';
import { motion } from 'framer-motion';



const SpringCollection = () => {
    return (
        <div className='springCollection'>
            <div className="springCollSub">
                <div className="cateTitleContent">
                    <h5 className='shopByCate'>New Collection</h5>
                    <h1 className='shopByCateMain'>The Spring Collection</h1>
                    <hr className='cateHr' />
                </div>
                <div className="imgSpring">
                    <img src={img} alt="" className='imge1' />
                    <motion.img src={im2} alt="" className='fff1' />
                    <img src={im4} alt="" className='fff2' />
                </div>


            </div>

        </div>
    );
};

export default SpringCollection;