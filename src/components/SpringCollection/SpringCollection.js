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
                <div className="imgSpring">
                <img src={img} alt="" className='imge1'/>
                <div className="img2">
                <motion.img
               
                 src={im2} alt="" className='fff1' />
                </div>
             
                <img src={im4} alt="" className='fff2'/>
             

                </div>
               

            </div>
            
        </div>
    );
};

export default SpringCollection;