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
                        <li>
                            <Link className='ws-li' to='/'>Home</Link>
                        </li>
                        <li><AiOutlineRight className='greater-ws' size={13}/></li>
                        <li className='wl'>Wishlist</li>
                    </ul>

                </div>

            </div>
            
        </div>
    );
};

export default WishListHeader;