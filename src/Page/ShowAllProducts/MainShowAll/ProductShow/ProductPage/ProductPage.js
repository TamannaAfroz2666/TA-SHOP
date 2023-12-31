import React, { useState } from 'react';
import './ProductPage.css'
// import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import img1 from '../../../../../assets/Image/NewArrivals/pic20.jpg'
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';
// import data from '../../../../../Utilities/API/trendingProduct.json';
import data from '../../../../../Utilities/API/trendingProduct.json'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ProductPage = () => {
    const [productsInfo, setProductsInfo] = useState(data.product);

    console.log('data is', productsInfo);
    const [showCard, setShowCard] = useState(false);


    // const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const compareHandle = () => {
        console.log('here is compare');
        setShow(true);

    }
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];

    const selectHandle = () => {
        console.log('event call');
    }

    // Quickview area 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedColor, setSelectedColor] = useState('');

    // color work 

    const findProductById = (productId) => {

        return productsInfo.find(product => product.id === productId);
    };

    const findProductByIdAndColor = (productId, colorCode) => {
        const product = findProductById(productId);
        console.log('product is ', product);
        if (product) {
            const foundColor = product.color.find(color => color.color_code === colorCode);
            console.log('find color', foundColor);
            if (foundColor) {
                let imageId = 'product_id_' + productId;
                document.getElementById(imageId).src = foundColor.image;
                return { product, foundColor };
            }
        }

        return null; // If the product or color isn't found
    };
    return (
        <div className='product-page'>
            <div className='trendingProduct'>
                <div className="productBox1">
                    {
                        productsInfo.slice(0, 9).map((product) => {
                            return (
                                <div className="productContainer1">
                                    <div className="productContents">
                                        <a href={"/product/" + product.slug_field}>
                                            <img src={product.default_image} alt="" className='image' id={`product_id_${product.id
                                                }`} />
                                        </a>
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
                                                    {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                                    <Modal.Header className='modalHeader' closeButton  >
                                                        <Modal.Title className='modalPTitle'>
                                                            <h1 className='modalTitle' >ta shop</h1>
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body  >
                                                        <div className="modalBody">
                                                            <h1 className='to'> Modal body content</h1>
                                                        </div>

                                                    </Modal.Body>
                                                </Modal> */}

                                                </motion.div>
                                                <motion.div
                                                    whileHover={{
                                                        scale: 1.2,

                                                    }}
                                                    className="eye">
                                                    <p className='quickView'>quickView</p>

                                                    <button className='btnCover'
                                                        onClick={handleOpen}
                                                    >
                                                        <AiOutlineEye className='IconOverlay' size={35} />

                                                    </button>


                                                    {/* modal add start */}

                                                    <Modal
                                                        className='modalArea1'
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box className='styleBox'>

                                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                                <div className="quickViewContent">
                                                                    <div className="imageView">
                                                                        <img src={img1} alt="" />

                                                                    </div>
                                                                    <div className="infoView">


                                                                    </div>

                                                                </div>


                                                            </Typography>
                                                        </Box>
                                                    </Modal>

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

                                                <button onClick={selectHandle}>
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
                                            <div className="sectionColor">
                                                {
                                                    product.color.map((product_color) => {
                                                        return (

                                                            <label className="colorField">
                                                                <input
                                                                    type="radio"
                                                                    name="color"
                                                                    value={product_color.color_code}
                                                                    onChange={() => findProductByIdAndColor(product.id, product_color.color_code)}
                                                                />
                                                                <span
                                                                    style={{ backgroundColor: product_color.color_code }}
                                                                    className="radio-mark"
                                                                ></span>
                                                            </label>

                                                        )
                                                    })
                                                }






                                            </div>
                                        </div>



                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                <div className="moreP">
                    <button className='more-page-pro'>
                        Load more
                    </button>

                </div>





            </div>

        </div>
    );
};

export default ProductPage;