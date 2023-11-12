import React from 'react';
import './POS_Page.css';
import { BsFillGiftFill } from "react-icons/bs";
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const POS_Page = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    //   const [selectedColor, setSelectedColor] = useState('');
    const giftWarpHandle = () => {
        console.log('cart  going to modal');
        setOpen(true)
    }
    return (
        <div className='pos_page'>
            <div className="posHead">
                <div className="posContainer">
                    <div className="posInstruction">
                        <div className="titlePos">
                            <div className="iconGift">
                                <BsFillGiftFill size={25} color='tomato' />
                            </div>
                            <div className="miniTitle">
                                <p className='addGiftTitle'>add gift warp</p>
                            </div>
                            <div className="priceSection1">
                                <div className="pp1">
                                    <p className='priceSubInfoVCart'> $ 50</p>
                                    <p className='priceTitleTotal1'>only tk 5,000 </p>

                                </div>
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
                            <div className="giftWarp">
                                <button className='addGiftWarpBtn' onClick={giftWarpHandle}>
                                    Add a gift warp
                                </button>


                            </div>
                        </div>
                    </div>
                    <div className="posTable">
                        <p className='subtotalTitle'>subtotal:  tk3,000</p>
                        <div className="desSortPos">
                            <p className='taxesTitle'>Taxes and shipping calculated at checkout</p>
                            <p className='allDesPos'>All charges are billed in USD. While the content of your cart is currently displayed in BDT, the checkout will use USD at the most current exchange rate.</p>
                            <div className="termContainer">
                                <div className="radioContent">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">HTML</label>
                                </div>
                                <div className="termContent">
                                    <Link>
                                        term and conditions

                                    </Link>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default POS_Page;