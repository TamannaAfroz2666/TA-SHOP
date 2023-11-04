import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className="containerHead">
                <div className="containerBody">
                    <div className="headerLogo">
                        <p className='logoTitle'>TA</p>
                        <span className='logoSub'>shop</span>
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
                                <button>
                                    <AiOutlineSearch size={20} color='black'/>
                                </button>
                                </Link>
                            </li>
                        </ul>

                    </div>


                </div>
            </div>     
        </div>
    );
};

export default Header;