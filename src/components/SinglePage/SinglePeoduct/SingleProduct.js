import React from 'react';
import './SingleProduct.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg'
import img2 from '../../../assets/Image/NewArrivals/bag.jpg'
import img3 from '../../../assets/Image/NewArrivals/final.jpg'
import img4 from '../../../assets/Image/NewArrivals/shoesss.jpg'
import img5 from '../../../assets/Image/NewArrivals/shoesss.jpg'

const SingleProduct = () => {
    return (
        <div className='single-product'>
            <div className="sin-pro-head">
                <div className="sing-pro-content">
                    <div className="sing-mini-imgC">
                        <div className="mini1Con1">
                            <div className="mini1-con">
                                <img src={img1} alt="" className='img1-con' />
                            </div>
                        </div>
                        <div className="mini1Con">
                            <div className="mini-img">
                                <img src={img2} alt="" className='imgMini' />
                            </div>
                        </div>
                        <div className="mini1Con">
                            <div className="mini-img">
                                <img src={img3} alt="" className='imgMini' />
                            </div>
                        </div>
                        <div className="mini1Con">
                            <div className="mini-img">
                                <img src={img4} alt="" className='imgMini' />
                            </div>
                        </div>
                        <div className="mini1Con">
                            <div className="mini-img">
                                <img src={img5} alt="" className='imgMini'/>
                            </div>
                        </div>
                    </div>
                    <div className="sing-imgCon11">
                        <img src={img1} alt="" className='largeImg' id='largeImg' />

                    </div>
                    <div className="sing-pro-info">

                    </div>

                </div>


            </div>

        </div>
    );
};

export default SingleProduct;