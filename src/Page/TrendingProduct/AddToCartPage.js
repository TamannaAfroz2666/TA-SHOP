import React, { useState } from 'react';
import './AddToCartPage.css';
import img1 from '../../assets/Image/NewArrivals/pic20.jpg'
import { AiOutlineEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CartGiftWarp from './CartGiftWarp/CartGiftWarp';

const AddToCartPage = (products_data) => {

    const [localData, setLocalData] = useState (products_data)
    console.log('local data is', localData);
    // viwecart edit modal 
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    //   const [selectedColor, setSelectedColor] = useState('');
    const viewCartEdit = () => {
        console.log('cart  going to modal');
        setOpen(true)
    }
    return (
        <div className='add-to-cart-page'>
            <div className="productListCart">
                <div className="cart-product-add">
                    <div className="cartContainer">
                        <div className="product_details">
                            <div className="detailsSection">
                                <div className="image_sec_cart">
                                    <Link to='/product'>
                                        <img src={img1} alt="" />
                                    </Link>
                                </div>
                                <div className="info_sec_cart">
                                    <Link to='/product'>
                                        <p className='longTitleCart'>Long sleeve T-shirt</p>
                                    </Link>
                                    <span className='colorCart'>Color: Black | Size: XS</span>
                                    {/* price section  */}
                                    <div className="priceSectionCart">
                                        <div className="pp1">
                                            <p className='priceSubInfoVCart'> $ 50</p>
                                            <p className='priceCart'>Tk 5,000 </p>
                                        </div>
                                    </div>
                                    {/* edit item  */}
                                    <div className="editCart">
                                        <div className="pp2">
                                            <p className='priceSubInfoVCart1'> Edit this item</p>

                                            <button className='viewCartEdit' onClick={viewCartEdit}>
                                                <AiOutlineEdit color='black' size={20}/>
                                            </button>

                                        </div>

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



                                    </div>
                                    {/* product increse decrease  */}
                                    <div className="quantityDetails11">
                                        <div className="increaseDecreaseCart">
                                            <div className="decrease">
                                                <button className='decreaseBtn'>
                                                    <AiOutlineMinus color='black' size={20} />
                                                </button>
                                            </div>
                                            <div className="valueShowCView">
                                                <span className='showOne'>1</span>
                                            </div>
                                            <div className="increase">
                                                <button className='increaseBtn'>
                                                    <AiOutlinePlus color='black' size={20} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className="removeCart">
                                            <button className='removeBtn'>
                                                Remove
                                                <hr className='removeHr' />
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <hr className='hrLow' />
                </div>
                <div className="cart-product-add">
                    <div className="cartContainer">
                        <div className="product_details">
                            <div className="detailsSection">
                                <div className="image_sec_cart">
                                    <Link to='/product'>
                                        <img src={img1} alt="" />
                                    </Link>
                                </div>
                                <div className="info_sec_cart">
                                    <Link to='/product'>
                                        <p className='longTitleCart'>Long sleeve T-shirt</p>
                                    </Link>
                                    <span className='colorCart'>Color: Black | Size: XS</span>
                                    {/* price section  */}
                                    <div className="priceSectionCart">
                                        <div className="pp1">
                                            <p className='priceSubInfoVCart'> $ 50</p>
                                            <p className='priceCart'>Tk 5,000 </p>
                                        </div>
                                    </div>
                                    {/* edit item  */}
                                    <div className="editCart">
                                        <div className="pp2">
                                            <p className='priceSubInfoVCart1'> Edit this item</p>

                                            <button className='viewCartEdit' onClick={viewCartEdit}>
                                                <AiOutlineEdit color='black' size={20} />
                                            </button>

                                        </div>

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



                                    </div>
                                    {/* product increse decrease  */}
                                    <div className="quantityDetails11">
                                        <div className="increaseDecreaseCart">
                                            <div className="decrease">
                                                <button className='decreaseBtn'>
                                                    <AiOutlineMinus color='black' size={20} />
                                                </button>
                                            </div>
                                            <div className="valueShowCView">
                                                <span className='showOne'>1</span>
                                            </div>
                                            <div className="increase">
                                                <button className='increaseBtn'>
                                                    <AiOutlinePlus color='black' size={20} />
                                                </button>
                                            </div>

                                        </div>
                                        <div className="removeCart">
                                            <button className='removeBtn'>
                                                Remove
                                                <hr className='removeHr' />
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>


                    </div>
                    <hr className='hrLow' />
                </div>
            </div>
            <div className="gift-warp">
                <CartGiftWarp />
            </div>

      


        </div>
    );
};

export default AddToCartPage;