import React, { useState } from 'react';
import './QuickView.css';
// import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import img1 from '../../../../../assets/Image/NewArrivals/pic20.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineEye, AiFillStar } from "react-icons/ai";

const QuickView = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='quickViewMain'>
            <button className='btnCover'
                onClick={handleOpen}
            >
                <AiOutlineEye className='IconOverlay' size={35} />
            </button>
            <Modal
                className='modalArea1'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='styleBoxQuick'>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="quickViewContent1">
                            <div className="imageView1">
                                <img src={img1} alt="" />
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
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>

        </div>
    );
};

export default QuickView;