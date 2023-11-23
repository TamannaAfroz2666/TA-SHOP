import React, { useState } from 'react';
import './QuickView.css';
import img1 from '../../../../../assets/Image/NewArrivals/pic20.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineEye, AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";

const QuickView = (props) => {
    console.log('props', props);
    const [title, setTitle] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
        console.log('quick view');
        const getTitle = props.ProductsData.p_title;
        setTitle(getTitle);
        console.log('title is', getTitle);

    } 
    const handleClose = () => setOpen(false);
    return (
        <div className='quickViewMain'>
            <button className='btnCover'
                onClick={handleOpen}
            >
                <AiOutlineEye className='IconOverlay' size={35} />
            </button>
            <Modal
                className='modalArea111'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='styleBoxQuick'>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="quickViewContent1">
                            <div className="imageView1">
                                <img src={props.ProductsData.default_image} alt="" />
                            </div>
                            <div className="infoView">
                                <div className="star-container">
                                    <div className="iconsField1">
                                        <div className="iconsRating1">
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
                                </div>
                                <h3 className='title-quick11'>{props.ProductsData.p_title}</h3>
                                <span className='se-store'>By <a href="/ac-store">SE Store</a></span>
                                <div className="amount-con">
                                    <div className="pp">
                                        <p className='QuickSubPri'> ${props.ProductsData.doller_convert}</p>
                                        <p className='priceQuick'>Tk{props.ProductsData.p_price}</p>
                                    </div>
                                </div>
                                <hr className='quickHr' />
                                <p className='des-cls'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum</p>
                                {/* color section  */}
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

                                </div>
                                {/* size section  */}
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
                                {/* in stock  */}
                                <div className="stock-info">
                                    <CiCircleCheck color='green' size={16} />
                                    <p className='inStock'>In stock</p>
                                </div>
                                {/* add to card section  */}
                                <div className="cart-sec22">
                                    <div className="inputValue">
                                        <div className="incrDecr-pro-info">
                                            <div className="decr-sec">
                                                <button className='decreaseBtn'>
                                                    <AiOutlineMinus size={20} />
                                                </button>
                                            </div>
                                            <div className="value-pro-show">
                                                <span className='showOne1'>1</span>
                                            </div>
                                            <div className="incr-sec">
                                                <button className='increaseBtn'>
                                                    <AiOutlinePlus size={20} />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="cardBtnQuick">
                                        <button className='add-card'>add to card</button>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default QuickView;