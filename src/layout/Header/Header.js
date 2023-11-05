import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";

// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// // import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';

const Header = () => {
 
    const searchBtn = () =>{
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
                            <Link to='/home'>
                                <p className='logoTitle'>TA</p>
                                <span className='logoSub'>shop</span>
                            </Link>
                        </div>
                        <div className="navLinks">
                            <ul className='linksHead'>
                                <li >
                                    <Link className='linksTitle'>shop all</Link>
                                </li>
                                <li>
                                    <Link className='linksTitle'>Decor</Link>
                                </li>
                                <li>
                                    <Link className='linksTitle'>office</Link>
                                </li>
                                <li>
                                    <Link className='linksTitle'>living room</Link>
                                </li>
                                <li>
                                    <Link className='linksTitle'>bedroom</Link>
                                </li>
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
                                <li>
                                    <Link className='subLinksTitle'>Story</Link>
                                </li>
                                <li>
                                    <Link className='subLinksTitle'>contact</Link>
                                </li>
                                <li>
                                    <Link className='subLinksTitle'>track order</Link>
                                </li>
                                <li>
                                    <Link className='subLinksTitle'>help</Link>
                                </li>
                            </ul>
                            <div className="subSubLinks">
                                <div className="logSub">
                                    <Link className='loginHeadTitle'>Log In</Link>
                                </div>
                                <div className="cartSubLink">
                                    <Link>
                                        <BsBasket color='tomato' size={20} />
                                    </Link>

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