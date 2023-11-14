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
                        <p className='balanceCheckOutTitle'>Tk 24.00</p>
                    </div>
                </div>
                <div className="giftCard">
                    <div className="giftInput">
                        <input type="text" name='gift' className='giftCls' id='giftId' placeholder='Gift card'/>
                    </div>
                    <div className="giftBtnP">
                        <button className='giftBtnChePro'>
                            apply
                        </button>

                    </div>
                </div>
                <div className="amountContainer">
                    <div className="amountContent">
                        <p className='subtotalCheckOut'>Subtotal</p>
                        <h3 className='subAmCheckOut'>Tk 11,114.00</h3>
                    </div>
                    <div className="amountShipping">
                        <p className='subtotalCheckOut'>Shipping</p>
                        <h3 className='subAmCheckOut'>Enter shipping address</h3>
                    </div>
                    <div className="amountTotalCheck">
                        <p className='subtotalCheckOut'>Total</p>
                        <h3 className='subAmCheckOut'>Tk 11,114.00</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCheckList;