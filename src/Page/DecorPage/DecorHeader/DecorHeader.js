import React from 'react';
import './DecorHeader.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const DecorHeader = () => {
    return (
        <div className='decorSubHeader22'>
            <div className="linkDecorHeader">
                <ul className='ulContentHeader'>
                    <li>
                        <Link to='/' className='LinkHomeHeader'>Home</Link>
                    </li>
                    <li>
                        <IoIosArrowForward className='decorHdIC' />
                    </li>
                    <li>
                        <p className='title_pHeader'>  Products</p>
                    </li>
                </ul>
            </div>
            <h1 className='decor-page-title'>Decor</h1>

        </div>
    );
};

export default DecorHeader;