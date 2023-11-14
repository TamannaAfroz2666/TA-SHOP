import React from 'react';
import './ProductCheckList.css';
import img from '../../../assets/Image/NewArrivals/bag.jpg'

const ProductCheckList = () => {
    return (
        <div className='productCList'>
            <div className="checkProBody">
                <div className="contentsProCheck">
                    <div className="imgCheckOut">
                        <div className="imgInfoCheck">
                            <div className="imgCheck">
                            <span className='oneSort'>1</span><br />
                                <img src={img} alt="" />                              
                            </div>
                            <div className="infoCheckP">
                                <p className='longTitleP'>Long sleeve asymmetric T-shirt</p>
                                <span className='brown'>Brown / XS</span>
                            </div>


                        </div>

                    </div>
                    <div className="balanceCheckout">
                        <p className='balanceCheckOutTitle'>$24.00</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCheckList;