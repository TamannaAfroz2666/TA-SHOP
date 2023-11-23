import React from 'react';
import './WishListHeader.css';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";

const WishListHeader = () => {
    return (
        <div className='wishListHeader'>
            <div className="subContentWi">
                <h1 className='title'>Wishlist</h1>
                <div className="ul-ws">
                    <ul className='wishlist-ul'>
                        <div className="jj">
                            <li>
                                <Link className='ws-li' to='/'>Home
                                    <span className='hr-home'>Home</span>
                                </Link>
                            </li>
                        </div>
                        <div className="main-sub">
                            <li><AiOutlineRight className='greater-ws' size={13} /></li>
                            <li className='wl'>Wishlist</li>
                        </div>
                    </ul>
                </div>
                <div className="product-show">
                    <h1 className='title-ws-err'>There are no products in wishlist</h1>
                </div>
            </div>

        </div>
    );
};

export default WishListHeader;