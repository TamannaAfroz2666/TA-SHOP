import React from 'react';
import './CartProducts.css';
import img1 from '../../../assets/Image/NewArrivals/pic20.jpg'

const CartProducts = () => {
    return (
        <div className='cartProducts'>
            <div className="cartProductsHead">
                <div className="cartProductBody">
                    <h1 className='shoppingTitle'>shopping cart </h1>
                    <div className="cardHrMain">
                        <hr className='cardHr' />
                    </div>
                    <p className='spendTitle'>Spend Tk 5,732.00 more and get free shipping!</p>
                    <div className="productsCartTitles">
                        <div className="productTitle1">
                            <h3 className='productCart_Ti'>product</h3>
                        </div>
                        <div className="productTitle2">
                            <h3 className='productCart_quantity'>quantity</h3>
                        </div>
                        <div className="productTitle3">
                            <h3 className='productCart_Total'>Total</h3>
                        </div>
                    </div>
                    <div className="cartTitleHr1">
                        <hr className='titleHr1' />
                    </div>
                    <div className="productsContainer">
                        <div className="product_details">
                            <div className="detailsSection">
                                <div className="image_sec">
                                    <img src={img1} alt="" />

                                </div>
                                <div className="info_sec">
                                    <p className='longTitle'>Long sleeve T-shirt</p>
                                  <span>Color: Black Size: XS</span>
                                  


                                </div>
                            </div>

                        </div>
                        <div className="quantityDetails">

                        </div>
                        <div className="totalDetails">

                        </div>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default CartProducts;