import React from 'react';
import './BackgroundImage.css';
import { motion } from 'framer-motion';




const BackgroundImage = () => {

    const shopNow = () => {
        console.log('shop now available');
    }
    return (
        <div className='backgroundImage'>
            <div className="backHead">
                <motion.div
                  initial={{ opacity: 0, x: '-70vh' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}

                    className="backContents"
                >
                    <h5 className='blackFri'>Black Friday on July</h5>
                    <h2 className='uptoTitle'>Up to 50% off</h2>
                    <h3 className='hundredTitle'>Hundreds of styles available</h3>
                    <button
                        className='shopBtn'
                        onClick={shopNow}

                    >
                        Shop Now
                    </button>
                    <div className="imageBack">

                    </div>
                </motion.div>

            </div>




        </div>
    );
};

export default BackgroundImage;