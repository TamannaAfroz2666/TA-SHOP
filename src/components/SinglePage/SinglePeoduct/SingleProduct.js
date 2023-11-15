import React from 'react';
import './SingleProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg'

const SingleProduct = () => {
    return (
        <div className='single-product'>
            <div className="sin-pro-head">
                <div className="sing-pro-content">
                    <div className="sing-mini-imgC">
                        <div className="mini1Con">
                            <div className="mini-img">
                                <img src={img1} alt="" />
                            </div>
                        </div>

                        <div className="mini2Con">
                            <div className="mini-img">
                                <img src={img1} alt="" />
                            </div>

                        </div>
                        <div className="mini3Con">
                            <div className="mini-img">
                                <img src={img1} alt="" />
                            </div>

                        </div>
                        <div className="mini4Con">
                            <div className="mini-img">
                                <img src={img1} alt="" />
                            </div>

                        </div>
                        <div className="mini5Con">
                            <div className="mini-img">
                                <img src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="sing-imgCon">

                    </div>
                    <div className="sing-pro-info">

                    </div>

                </div>


            </div>

        </div>
    );
};

export default SingleProduct;