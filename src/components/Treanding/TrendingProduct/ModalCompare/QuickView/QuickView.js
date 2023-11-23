import React from 'react';
import './QuickView.css';
// import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import img1 from '../../../../../assets/Image/NewArrivals/pic20.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  AiOutlineEye } from "react-icons/ai";

const QuickView = () => {
    const [open, setOpen] = React.useState(false);
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
    );
};

export default QuickView;