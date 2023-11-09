import React from 'react';
import './ProductCategory.css';
import BedRoom from './BedRoom/BedRoom';
import Decor from './Decor/Decor';
import LivingRoom from './LivingRoom/LivingRoom';
import Office from './Office/Office';
import { motion } from 'framer-motion';




const ProductCategory = () => {

    
    return (
        <div className='productCategory'>
            <div className="productCateHead">
                <div className="productCateContainer">
                    <div className="cateTitleContent">
                        <h5 className='shopByCate'>Shop by category</h5>
                        <h1 className='shopByCateMain'>Shop by category</h1>
                        <hr className='cateHr' />
                    </div>

                    <div className="productCateContents">
                       <motion.div
                    //    whileHover={{scale: 1.01}}
                        className="bedRoom">
                        <BedRoom></BedRoom>
                       </motion.div>
                       <div className="decor">
                        <Decor></Decor>

                       </div>
                       <div className="livingRoom">
                        <LivingRoom></LivingRoom>

                       </div>
                       <div className="office">
                        <Office></Office>

                       </div> 


                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductCategory;