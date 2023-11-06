import React from 'react';
import './TrendingProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TrendingProduct = () => {
    return (
        <div className='trendingProduct'>
            <div className="productContainer">
                <div className="productContents">
                    <img src={img1} alt="" className='image' />
                    {/* over lay area  */}
                    <div className="overlaySection">
                        <div className="iconSection">
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                }} 
                                className="heart"
                            >
                                <p className='wishlist'>wishlist</p>
                                <AiOutlineHeart className='IconOverlay' color='black' size={35} />
                                
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,                                
                                }}
                            
                                className="arrow">
                                     <p className='compare'>compare</p>
                                <HiArrowsUpDown className='IconOverlay' size={35} />
                               
                            </motion.div>
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                   
                                }}                            
                                className="eye">
                                    <p className='quickView'>quickView</p>
                                <AiOutlineEye className='IconOverlay' size={35} />
                                
                            </motion.div>

                        </div>
                        {/* select option area  */}
                        <div className="selectOption">
                            <Link to ="/more-options">
                            <p className='selectOptionTitle'> <span><HiOutlineArrowSmRight size={20}/></span> Select options</p>
                            </Link>
                        </div>

                        
                       

                    </div>
                </div>

            </div>
            <div className="h1">
                            hhh
                        </div>
            

        </div>
    );
};

export default TrendingProduct;