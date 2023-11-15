import React from 'react';
import './SingleProductInfo.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const SingleProductInfo = () => {
    return (
        <div className='singleProInfoMain'>
            {/* <h1>hh</h1> */}
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


        </div>
    );
};

export default SingleProductInfo;