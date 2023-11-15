import React from 'react';
import './MainShowAll.css'
import Header from '../../../layout/Header/Header.js';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";



const MainShowAll = () => {
    return (
        <div className='showAllContainer'>
            <div className="headerSec">
                <Header></Header>
            </div>
            <div className="bodyShowAll">
                <div className="titleContentShow">
                    <h1 className='productsTi'>Products</h1>
                    <div className="linkUl">
                        <ul className='ulContent'>
                            <li>
                                <Link to ='/' className='LinkHome'>Home</Link>
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
                <div className="contentsAll">
                    
                </div>




            </div>


        </div>
    );
};

export default MainShowAll;