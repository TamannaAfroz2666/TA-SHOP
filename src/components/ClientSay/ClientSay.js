import React from 'react';
import './ClientSay.css';
import img1 from '../../assets/Image/Clients/Pic1.jpg'
import img2 from '../../assets/Image/Clients/pic2.jpg'
import img3 from '../../assets/Image/Clients/pic3.jpg'
import img4 from '../../assets/Image/Clients/pic4.jpg'
import { AiFillStar } from "react-icons/ai";

const ClientSay = () => {

    return (
        <div className='clientSay'>
            <div className="clientSub">
                <div className="clientTitleContent">
                    <h5 className='ClientTitle'>from the people</h5>
                </div>
                <div className="clientContents">
                    <div className="block1">
                        <div className="startIcon">
                            <AiFillStar className='iconClient' size={20} color='orange' />
                            <AiFillStar className='iconClient' size={20} color='orange' />
                            <AiFillStar className='iconClient' size={20} color='orange' />
                            <AiFillStar className='iconClient' size={20} color='orange' />
                            <AiFillStar className='iconClient' size={20} color='orange' />

                        </div>
                        <p>"Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to ware this dress in the summer !"</p>
                        <p>Makes me Happy</p>
                        <hr />
                        <div className="clientInfo">
                            <div className="clientImg">

                            </div>
                            <div className="clientName">

                            </div>
                        </div>

                    </div>
                    <div className="block2">

                    </div>
                    <div className="block3">

                    </div>
                    <div className="block4">

                    </div>

                </div>




            </div>

        </div>
    );
};

export default ClientSay;