import React from 'react';
import './PageHead.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const PageHead = () => {
    return (
        <div className='pageHead'>
            <div className="pageUlContainer">
                <div className="linkUlSingleHeader">
                    <ul className='ulContent'>
                        <li>
                            <Link to='/' className='LinkHomeSingle'>Home</Link>
                        </li>
                        <li>
                            <IoIosArrowForward />
                        </li>
                        <li>
                            {/* <p className='title_p'> All Products</p> */}
                            <Link to='/show-all-product' className='LinkHomeSingle'>All Products</Link>
                        </li>
                        <li>
                            <IoIosArrowForward />
                        </li>
                        <li>
                            <p className='title_p2'>  Art print T-shirt</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PageHead;