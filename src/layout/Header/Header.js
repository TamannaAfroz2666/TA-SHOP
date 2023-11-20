import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// // import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';

const Header = () => {

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
                                <span className='logoSub'>shop</span>
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
                                    <Link className='linksTitle'>Decor</Link>
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
                                    <Link className='subLinksTitle'>Story</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle'>contact</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle'>track order</Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.09 }}
                                >
                                    <Link className='subLinksTitle'>help</Link>
                                </motion.li>
                            </ul>
                            <div className="subSubLinks">
                                <div className="logSub">
                                    <Link className='loginHeadTitle'>Log In</Link>
                                </div>
                                <div className="cartSubLink">
                                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <BsBasket color='tomato' size={20} />
                                    </button>

                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div className="offcanvas-header">
                                            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            ...
                                        </div>
                                    </div>
                                    

                                </div>


                            </div>
                        </div>

                    </div>
                    {/* <div>
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div> */}

                </div>

            </div>
        </div>
    );
};

export default Header;