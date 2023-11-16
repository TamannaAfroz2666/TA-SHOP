import React, { useState } from 'react';
import './DeliveryReturn.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PiPackageLight } from "react-icons/pi";

const DeliveryReturn = () => {
    // compare modal activity 
    const [openCompare, setOpenCompare] = useState(false);
    const handleCloseCompare = () => setOpenCompare(false);
    const compareShow = () => {
        console.log('cart  going to modal');
        setOpenCompare(true)
    }
    return (
        <div>
             <div className="size-sec">
                <button className='btnSizeInfo' onClick={compareShow}>
                    <PiPackageLight size={22} className='iconMeas' />Delivery & Return
                    <hr className='btnHrProInfo' />
                </button>
                <Modal
                    className='modalArea1'
                    open={openCompare}
                    onClose={handleCloseCompare}
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
    );
};

export default DeliveryReturn;