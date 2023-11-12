import React from 'react';
import './CartMain.css';
import Header from '../../../layout/Header/Header';
import CartProducts from '../CartProducts/CartProducts';
import POS_Page from '../POS_Page/POS_Page';
import Estimates from '../ShoppingEstimates/Estimates';

const CartMain = () => {
    return (
        <div className='cartMain'>
            <Header></Header>
            <div className="bodyCartMain">
                <CartProducts></CartProducts>
            </div>
            <div className="posMain">
                <POS_Page></POS_Page>
            </div>
            <div className="estimateMain">
                <Estimates></Estimates>

            </div>

          
        </div>
    );
};

export default CartMain;