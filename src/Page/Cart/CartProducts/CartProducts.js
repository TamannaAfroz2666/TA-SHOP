import React from 'react';
import './CartProducts.css';

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
                            <hr className='titleHr1'/>
                        </div>

                </div>

            </div>

        </div>
    );
};

export default CartProducts;