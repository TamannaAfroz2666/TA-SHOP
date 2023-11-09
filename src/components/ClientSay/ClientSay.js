import React from 'react';
import './ClientSay.css';
import img1 from '../../assets/Image/Clients/Pic1.jpg'
import img2 from '../../assets/Image/Clients/pic2.jpg'
import img3 from '../../assets/Image/Clients/pic3.jpg'
import img4 from '../../assets/Image/Clients/pic4.jpg'
import { AiFillStar } from "react-icons/ai";
import { motion } from 'framer-motion';


const ClientSay = () => {

    return (
        <div className='clientSay'>
            <div className="clientSub">
                <div className="clientContainer">
                    <div className="clientTitleContent">
                        <h5 className='ClientTitle'>from the people</h5>
                    </div>
                    <motion.div
                        className="clientContents"
                    >
                        <motion.div className="block1"
                        >
                            <div className="startIcon">
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />

                            </div>
                            <p className='clientDes'>"Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to ware this dress in the summer !"</p>
                            <p className='client_title'>Makes me Happy</p>
                            <hr className='clientHrSort' />
                            <div className="clientInfo">
                                <div className="clientImg">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="clientName">
                                    <p className='clientNameTitle'>Moi Holand</p>
                                </div>
                            </div>

                        </motion.div>

                        <motion.div className="block1"
                        
                        >
                            <div className="startIcon">
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />

                            </div>
                            <p className='clientDes'>"Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to ware this dress in the summer !"</p>
                            <p className='client_title'>Makes me Happy</p>
                            <hr className='clientHrSort' />
                            <div className="clientInfo">
                                <div className="clientImg">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="clientName">
                                    <p className='clientNameTitle'>Dev Kumar</p>
                                </div>
                            </div>

                        </motion.div>

                        <motion.div className="block1"
                        >
                            <div className="startIcon">
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />

                            </div>
                            <p className='clientDes'>"Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to ware this dress in the summer !"</p>
                            <p className='client_title'>Makes me Happy</p>
                            <hr className='clientHrSort' />
                            <div className="clientInfo">
                                <div className="clientImg">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="clientName">
                                    <p className='clientNameTitle'>Junior Holand</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="block1"
                        >
                            <div className="startIcon">
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />
                                <AiFillStar className='iconClient' size={20} color='orange' />

                            </div>
                            <p className='clientDes'>"Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to ware this dress in the summer !"</p>
                            <p className='client_title'>Makes me Happy</p>
                            <hr className='clientHrSort' />
                            <div className="clientInfo">
                                <div className="clientImg">
                                    <img src={img4} alt="" />
                                </div>
                                <div className="clientName">
                                    <p className='clientNameTitle'>Moi Jonas</p>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>

                </div>





            </div>

        </div>
    );
};

export default ClientSay;