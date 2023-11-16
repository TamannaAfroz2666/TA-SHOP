import React from 'react';
import './SingleProductInfo.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoFlameSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";

const SingleProductInfo = () => {
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
                <div className="colorSize-sec">
                    <div className="color-sec">
                        <h4 className='title-col'>color: <span className='dynamic-col'>Black</span></h4>

                    </div>
                    <div className="size-sec">
                        <button>
                        <TbRulerMeasure color='black' size={20} className='iconMeas'/>Size Guide
                        </button>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default SingleProductInfo;