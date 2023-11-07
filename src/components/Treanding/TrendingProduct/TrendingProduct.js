import React, { useState } from 'react';
import './TrendingProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { IconName } from "react-icons/ai";

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
                <div className="productInfo">
                    <div className="iconsField">
                        <div className="iconsRating">

                            <span className='hhh'><AiFillStar size={15} color='orange' /></span>
                            <span><AiFillStar size={15} color='orange' /></span>
                            <span><AiFillStar size={15} color='orange' /></span>
                            <span><AiFillStar size={15} color='orange' /></span>
                            <span><AiFillStar size={15} color='orange' /></span>

                        </div>
                        <div className="numProduct">
                            <p className='oneItem'>(1)</p>
                        </div>
                    </div>
                    <div className="nameProduct">
                        <h3 className='product_titles'>Long sleeve T-shirt</h3>
                    </div>
                    <div className="priceSection">
                        <div className="pp">
                        <p className='priceSubInfo'>$20.00</p>
                        <p className='priceTitle'>Tk 2,200</p>

                        </div>
                      
                    </div>
                    <div className="colorSection">
                        
                    </div>



                </div>

            </div>



        </div>
    );
};

export default TrendingProduct;