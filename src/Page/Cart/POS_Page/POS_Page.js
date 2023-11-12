import React from 'react';
import './POS_Page.css';
import { BsFillGiftFill } from "react-icons/bs";

const POS_Page = () => {
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
                            <div className="giftWarp">
                                <button className='addGiftWarpBtn'>
                                    Add a gift warp
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="posTable">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default POS_Page;