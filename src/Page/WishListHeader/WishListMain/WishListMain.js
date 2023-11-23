import React from 'react';
import './WishListMain.css'
import Header from '../../../layout/Header/Header';
import WishListHeader from '../WishListHeader';

const WishListMain = () => {
    return (
        <div className='ws-main'>
            <div className="header-ws">
                <Header></Header>
            </div>
            <div className="sub-ws">
                <WishListHeader></WishListHeader>
            </div>


        </div>
    );
};

export default WishListMain;