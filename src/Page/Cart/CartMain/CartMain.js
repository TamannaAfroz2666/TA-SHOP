import React from 'react';
import './CartMain.css';
import Header from '../../../layout/Header/Header';
import CartProducts from '../CartProducts/CartProducts';

const CartMain = () => {
    return (
        <div className='cartMain'>
            <Header></Header>
            <div className="bodyCartMain">
                <CartProducts></CartProducts>
            </div>

          
        </div>
    );
};

export default CartMain;