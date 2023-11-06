import React from 'react';
import './TrendingProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart , AiOutlineEye } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";

const TrendingProduct = () => {
    return (
        <div className='trendingProduct'>
            <div className="productContainer">
                <div className="productContents">
                    <img src={img1} alt="" className='image'/>
                    <div className="overlaySection">
                        <div className="iconSection">
                            <div className="heart">
                                <AiOutlineHeart className='IconOverlay' color='black' size={35}/>
                            </div>
                            <div className="arrow">
                                <HiArrowsUpDown  className='IconOverlay' size={35}/>
                            </div>
                            <div className="eye">
                                <AiOutlineEye  className='IconOverlay' size={35}/>
                            </div>

                        </div>
                        <h1>gg</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    </div>
                </div>

            </div>
            .
            
        </div>
    );
};

export default TrendingProduct;