import React from 'react';
import './SingleProductInfo.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";

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



        </div>
    );
};

export default SingleProductInfo;