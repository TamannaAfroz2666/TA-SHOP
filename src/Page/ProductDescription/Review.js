import React from 'react';
import './Review.css';
import { AiFillStar } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";


const Review = () => {
    return (
        <div className='review-main'>
            <div className="review-content">
                <h3 className='cus-review'>Customer Reviews</h3>
                <div className="review-part">
                    <div className="icon-review">
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
                                    <p className='base-on'>Based on 1 review
                                    </p>
                                </div>
                            </div>
                            {/* icon section end */}

                        </div>
                        

                    </div>
                    <div className="btn-review">
                        <button className='reviewBtnCls'>Write a review</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Review;