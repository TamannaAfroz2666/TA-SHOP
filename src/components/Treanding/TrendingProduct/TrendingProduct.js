import React, { useState } from 'react';
import './TrendingProduct.css';
// import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { IconName } from "react-icons/ai";
import data from '../../../Utilities/API/trendingProduct.json';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TrendingProduct = () => {
    const [productsInfo, setProductsInfo] = useState(data.product);
    console.log('data is', productsInfo);
    const [showCard, setShowCard] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const compareHandle = () => {
        console.log('here is compare');
        setShow(true);

    }

    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];



    return (
        <div className='trendingProduct'>
            <div className="productBox">

                {
                    productsInfo.slice(0, 8).map((product) => {
                        return (
                            <div className="productContainer">
                                <div className="productContents">
                                    <img src={product.image} alt="" className='image' />
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
                                                <button className='btnCover'
                                                    onClick={compareHandle}
                                                >
                                                    <HiArrowsUpDown className='IconOverlay' size={35} />

                                                </button>

                                                {/* modal add  */}
                                                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                                    <Modal.Header  className='modalHeader' closeButton  >
                                                        <Modal.Title className='modalPTitle'>
                                                            <h1 className='modalTitle' >ta shop</h1>
                                                        </Modal.Title>
                                                    </Modal.Header>

                                                 
                                                    <Modal.Body  >
                                                        <div className="modalBody">
                                                            <h1 className='to'> Modal body content</h1>
                                                        </div>
                                                       
                                                    </Modal.Body>
                                                </Modal>

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
                                            <p className='oneItem'>({product.stok_product})</p>
                                        </div>
                                    </div>
                                    <div className="nameProduct">
                                        <h3 className='product_titles'>{product.p_title}</h3>
                                    </div>
                                    <div className="priceSection">
                                        <div className="pp">
                                            <p className='priceSubInfo'> ${product.doller_convert}</p>
                                            <p className='priceTitle'>Tk {product.p_price}</p>

                                        </div>

                                    </div>
                                    <div className="colorSection">

                                    </div>



                                </div>

                            </div>

                        )
                    })
                }



            </div>




        </div>
    );
};

export default TrendingProduct;