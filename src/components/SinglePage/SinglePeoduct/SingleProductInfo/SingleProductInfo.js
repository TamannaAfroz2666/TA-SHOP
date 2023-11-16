import React from 'react';
import './SingleProductInfo.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoFlameSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SingleProductInfo = () => {
    // viwecart edit modal 
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    //   const [selectedColor, setSelectedColor] = useState('');
    const sizeShow = () => {
        console.log('cart  going to modal');
        setOpen(true)
    }
    return (
        <div className='singleProInfoMain'>
            {/* icon section start  */}
            <div className="iconsField1">
                <div className="iconsRating">
                    <span className='hhh'><AiFillStar size={13} color='orange' /></span>
                    <span><AiFillStar size={13} color='orange' /></span>
                    <span><AiFillStar size={13} color='orange' /></span>
                    <span><AiFillStar size={13} color='orange' /></span>
                    <span><FaRegStarHalfStroke size={13} color='orange' /></span>
                </div>
                <div className="numProduct">
                    <p className='oneItem'>(2)</p>
                </div>
            </div>
            {/* icon section end */}
            <h3 className='pro-info-title'>Art print T-shirt</h3>
            {/* price section  */}
            <div className="priceSec-pro-info">
                <div className="pp1">
                    <p className='priceSubInfoVCart22'> $ 50</p>
                    <p className='amount-sin-pro'>Tk 5,000 </p>
                </div>
            </div>
            {/* price section end */}
            <span className='byCls'>By <a href="/collection/akajara-store">Akaza Store </a></span>
            <hr className='hr-sin-pro-in' />
            <div className="basicList">
                <div className="stock-info">
                    <CiCircleCheck color='green' size={16} />
                    <p className='inStock'>In stock</p>
                </div>
                <div className="soldInfo">
                    <div className="soldPro">
                        <IoFlameSharp color='red' size={18} />
                        <p className='inStock'><strong>36</strong> sold in last <strong>13</strong> hours</p>

                    </div>


                </div>
                <div className="visit">
                    <LuEye color='black' size={18} />
                    <p className='inStock'><strong>30</strong>  people are viewing this right now</p>

                </div>
                {/* color size field start  */}
                <div className="colorSize-sec">
                    <div className="color-sec">
                        <h4 className='title-col'>color: <span className='dynamic-col'>Black</span></h4>
                        <div className="available-col">
                            <div className="color1">
                                <input type="color" />
                            </div>
                            <div className="color1">
                                <input type="color" />
                            </div>
                            <div className="color1">
                                <input type="color" />
                            </div>

                        </div>
                    </div>
                    <div className="size-sec">
                        <button className='btnSizeInfo' onClick={sizeShow}>
                            <TbRulerMeasure size={20} className='iconMeas' />Size Guide
                            <hr className='btnHrProInfo' />
                        </button>
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
                                            {/* <img src={img1} alt="" /> */}
                                            <h1>hhh</h1>
                                        </div>
                                        <div className="infoView">
                                        </div>
                                    </div>
                                </Typography>
                            </Box>
                        </Modal>

                    </div>
                </div>
                 {/* color size field end  */}

                <div className="size-wid">
                    <h4 className='title-col'>size: <span className='dynamic-col'>xs</span></h4>
                    <div className="sizeContents">
                        <div className="btn-size-sec">
                            <button className='btnXs-size'>
                                xs
                            </button>

                        </div>
                        <div className="btn-size-sec">
                            <button className='btnXs-size'>
                                s
                            </button>

                        </div>
                        <div className="btn-size-sec">
                            <button className='btnXs-size'>
                                m
                            </button>

                        </div>
                        <div className="btn-size-sec">
                            <button className='btnXs-size'>
                                l
                            </button>

                        </div>
                        <div className="btn-size-sec">
                            <button className='btnXs-size'>
                                xl
                            </button>

                        </div>

                    </div>


                </div>
                <div className="items-left">
                    <h4 className='itemLftTitle'>Only <span className='itemSp'>30 item(s)</span>  left in stock</h4>
                    <div className="parentCls">
                        <div className="subParentCls">
                            
                        </div>



                    </div>

                </div>

            </div>



        </div>
    );
};

export default SingleProductInfo;