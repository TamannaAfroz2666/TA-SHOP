import React, { useState } from 'react';
import './TrendingProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';

const TrendingProduct = () => {

    const [showCard, setShowCard] = useState(false)
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
                        <motion.div className="selectOption"
                            transition={{
                                duration: .5,
                                type: spring
                            }}
                            layout
                            onClick={() => setShowCard(!showCard)}
                        >

                            <button >
                                <p className='selectOptionTitle'>
                                    <span><HiOutlineArrowSmRight size={20} /></span>
                                    Select options
                                </p>
                            </button>

                            {showCard && (
                                <motion.button className='sortP'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                   32
                                </motion.button>
                            )}


                        </motion.div>




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