import React, { useState } from 'react';
import './CartProducts.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CartProducts = () => {
    // viwecart edit modal 
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    //   const [selectedColor, setSelectedColor] = useState('');
    const viewCartEdit = () => {
        console.log('cart  going to modal');
        setOpen(true)
    }
    // descrese section 
    const [decreseInit, setDecreseInit] =useState(1);
    const [amount, setAmount] = useState(50);
    let amountCost = decreseInit * amount;
    console.log('amount ', amountCost);

    const decreseHandle = () =>{
        let init = 1 ;
        if(init> decreseInit){
            console.log('emapaty');

        }
        else{
            setDecreseInit(decreseInit - 1)
             
        }
       
       
    }
const increaseHandle = () =>{
    console.log('decrease');
    setDecreseInit(decreseInit + 1);
  
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
                    {/* product show page start */}
                    <div className="productsContainer">
                        <div className="product_details">
                            <div className="detailsSection">
                                <div className="image_sec">
                                    <Link to='/product'>
                                        <img src={img1} alt="" />
                                    </Link>
                                </div>
                                <div className="info_sec">
                                    <Link to='/product'>
                                        <p className='longTitle'>Long sleeve T-shirt</p>
                                    </Link>

                                    <span className='sizeTitleViewCart'>Color: Black | Size: XS</span>
                                    {/* price section  */}
                                    <div className="priceSection1">
                                        <div className="pp1">
                                            <p className='priceSubInfoVCart'> $ 50</p>
                                            <p className='priceTitleVcart' id='amountId'>Tk {amount} </p>
                                        </div>
                                    </div>
                                    {/* edit item  */}
                                    <div className="editOption">
                                        <div className="pp2">
                                            <p className='priceSubInfoVCart1'> Edit this item</p>

                                            <button className='viewCartEdit' onClick={viewCartEdit}>
                                                <AiOutlineEdit color='black' />
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
                            <div className="increaseDecrease">
                                <div className="decrease">
                                    <button className='decreaseBtn' 
                                    onClick={decreseHandle}
                                    
                                    >
                                        <AiOutlineMinus color='black' size={20} />
                                    </button>
                                </div>
                                <div className="valueShowCView">
                                    <span className='showOne' id='showValue'>{decreseInit}</span>
                                </div>
                                <div className="increase">
                                    <button className='increaseBtn'
                                    onClick={increaseHandle}
                                    
                                    >
                                        <AiOutlinePlus color='black' size={20} />
                                    </button>
                                </div>

                            </div>
                            <div className="removeContain">
                                <button className='removeBtn'>
                                    Remove
                                    <hr className='removeHr' />
                                </button>
                            </div>

                        </div>
                        <div className="totalDetails">
                            <div className="priceSection1">
                                <div className="pp1">
                                    <p className='priceSubInfoVCart'> $ 50</p>
                                    <p className='priceTitleTotal'>Tk {amountCost} </p>
                                </div>
                            </div>


                        </div>
                    </div>
                         {/* product show page end */}
                    <div className="cartTitleHr11">
                        <hr className='titleHr1' />
                    </div>



                </div>

            </div>

        </div>
    );
};

export default CartProducts;