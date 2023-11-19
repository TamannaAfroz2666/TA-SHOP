import React, { useState } from 'react';
import './Review.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Review = () => {
    const [initField , setInitField] = useState(false);
    const  reviewHandle = () =>{
        console.log('review handle');
        setInitField(!initField);
    }
    return (
        <div className='review-main'>
            <div className="review-content">
                <h3 className='cus-review'>Customer Reviews</h3>
                <div className="review-part">
                    <div className="icon-review">
                        {/* <div className="icons"> */}
                        {/* icon section start  */}
                        <div className="iconsField1">
                            <div className="iconsRating">
                                <span className='hhh'><AiFillStar size={18} color='orange' /></span>
                                <span><AiFillStar size={18} color='orange' /></span>
                                <span><AiFillStar size={18} color='orange' /></span>
                                <span><FaRegStar size={17} className='spIcon' /></span>
                                <span><FaRegStar size={17} className='spIcon' /></span>
                            </div>
                            <div className="numProduct">
                                <p className='base-on'>Based on 1 review
                                </p>
                            </div>
                        </div>
                        {/* icon section end */}

                        {/* </div> */}
                    </div>
                    <div className="btn-review">
                        <button onClick={reviewHandle} className='reviewBtnCls'>Write a review</button>
                        {
                            initField &&(
                                <div className="info-reviewField" >
                                <h1 className="info-reviewField">hh</h1> 
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="review-des">
                    <div className="icons">
                        {/* icon section start  */}
                        <div className="iconsField1">
                            <div className="iconsRating">
                                <span className='hhh'><AiFillStar size={18} color='orange' /></span>
                                <span><AiFillStar size={18} color='orange' /></span>
                                <span><AiFillStar size={18} color='orange' /></span>
                                <span><FaRegStar size={17} className='spIcon' /></span>
                                <span><FaRegStar size={17} className='spIcon' /></span>
                            </div>
                            <div className="numProduct">
                                <p className='base-on'>
                                    1 on Sep 29, 2023
                                </p>
                            </div>
                        </div>
                        {/* icon section end */}
                        <h5 className='text-review'>Text</h5>
                        <span className='text-sub'>Text</span>
                    </div>
                    <div className="reviews-link">
                        <Link to='reviews/report-process'>
                            Report as Inappropriate</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;