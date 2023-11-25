import React from 'react';
import './DecorHeader.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const DecorHeader = () => {
    return (
        <div className='decorHeader'>
             <div className="linkUl">
                        <ul className='ulContent'>
                            <li>
                                <Link to='/' className='LinkHome'>Home</Link>
                            </li>
                            <li>
                                <IoIosArrowForward />
                            </li>
                            <li>
                                <p className='title_p'>  Products</p>
                            </li>
                        </ul>
                    </div>
            
        </div>
    );
};

export default DecorHeader;