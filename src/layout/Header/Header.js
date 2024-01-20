import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
// import { BsBasket } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// // import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
// import Sub from './sub/sub';
import SubHeader from './SubHeader/SubHeader';
import { FaRegHeart } from "react-icons/fa";

const Header = ({ wishlistLength }) => {
    // console.log('count value', props.ProductAddWishList);
    // const [WishlistCount, setWishlistCount] = useState('')
    var getWishListValue = JSON.parse(localStorage.getItem('wishlistData'))
    getWishListValue = getWishListValue?.length || 0;
    console.log('getWishListValue = ', getWishListValue);
    // setWishlistCount(getValue);

    const searchBtn = () => {
        console.log('hello');
        var value1 = document.getElementById('fn').innerHTML = "text";
        console.log('the value is: ', value1);

        // value1.show();
    }


    return (
        <div className='headerContainer'>
            <div className="containerHead">
                <div className="headerHight">
                    <div className="containerBody">
                        <div className="headerLogo">
                            <Link to='/'>
                                <p className='logoTitle'>TA</p>
                                <span className='logoSub22'>shop</span>
                            </Link>
                        </div>
                        <div className="navLinks111">
                            <ul className='linksHead'>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link to='/'
                                        className='linksTitle'>
                                        shop all
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='linksTitle' to='product-category/decor'>Decor</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='linksTitle'>office</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='linksTitle'>living room</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='linksTitle'>bedroom</Link>
                                </motion.li>
                                <li>
                                    <Link className='linksTitle'>
                                        <button
                                            onClick={searchBtn}
                                        >

                                            <AiOutlineSearch size={20} color='black' />
                                        </button>
                                    </Link>
                                </li>
                            </ul>

                            <div id="fn" hidden>First Name :
                                <input type="text" />
                            </div>

                        </div>
                        <div className="subLinks">
                            <ul className='subLinkHead'>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle' to='story'>Story</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle' to='contact'>contact</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle' to='my-account/orders' >track order</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle' to='help'>help</Link>
                                </motion.li>
                            </ul>
                            <div className="subSubLinks">
                                <div className="logSub">
                                    <Link className='loginHeadTitle' to='pages/wishlist'>
                                        <span className='init'>{wishlistLength}</span>
                                        <FaRegHeart size={20} className='headWishIcon' />
                                    </Link>
                                </div>
                                <div className="cartSubLink">
                                    <SubHeader />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Header;