import React from 'react';
import './CartProducts.css';

const CartProducts = () => {
    return (
        <div className='cartProducts'>
            <div className="cartProductsHead">
                <div className="cartProductBody">
                    <h1 className='shoppingTitle'>shopping cart </h1>
                    <div className="cardHrMain">
                    <hr className='cardHr'/>
                    </div>
                    <p className='spendTitle'>Spend Tk 5,732.00 more and get free shipping!</p>
                  
                </div>

            </div>
            
        </div>
    );
};

export default CartProducts;