import React, { useState } from 'react';
import './CartProducts.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineEdit } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CartProducts = () => {
    // viwecart edit modal 
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    //   const [selectedColor, setSelectedColor] = useState('');
    const viewCartEdit = () => {
        console.log('cart  going to modal');
        setOpen(true)
    }



    return (
        <div className='cartProducts'>
            <div className="cartProductsHead">
                <div className="cartProductBody">
                    <h1 className='shoppingTitle'>shopping cart </h1>
                    <div className="cardHrMain">
                        <hr className='cardHr' />
                    </div>
                    <p className='spendTitle'>Spend Tk 5,732.00 more and get free shipping!</p>
                    <div className="productsCartTitles">
                        <div className="productTitle1">
                            <h3 className='productCart_Ti'>product</h3>
                        </div>
                        <div className="productTitle2">
                            <h3 className='productCart_quantity'>quantity</h3>
                        </div>
                        <div className="productTitle3">
                            <h3 className='productCart_Total'>Total</h3>
                        </div>
                    </div>
                    <div className="cartTitleHr1">
                        <hr className='titleHr1' />
                    </div>
                    <div className="productsContainer">
                        <div className="product_details">
                            <div className="detailsSection">
                                <div className="image_sec">
                                    <img src={img1} alt="" />

                                </div>
                                <div className="info_sec">
                                    <p className='longTitle'>Long sleeve T-shirt</p>
                                    <span className='sizeTitleViewCart'>Color: Black | Size: XS</span>
                                    {/* price section  */}
                                    <div className="priceSection1">
                                        <div className="pp1">
                                            <p className='priceSubInfoVCart'> $ 50</p>
                                            <p className='priceTitleVcart'>Tk 5,000 </p>
                                        </div>
                                    </div>
                                    <div className="editOption">
                                        <div className="pp2">
                                        <p className='priceSubInfoVCart1'> Edit this item</p>

                                        <button className='viewCartEdit' onClick={viewCartEdit}>
                                            <AiOutlineEdit color='white' />
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



                                </div>
                            </div>

                        </div>
                        <div className="quantityDetails">

                        </div>
                        <div className="totalDetails">

                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default CartProducts;