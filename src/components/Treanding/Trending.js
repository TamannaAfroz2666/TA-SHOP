import React from 'react';
import './Trending.css';
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const Trending = () => {
    return (
        <div className='trending'>
            <div className="trendingBody">
                <div className="abc">
                    <h1 className='trendTitle'>You are in   </h1>
                </div>

                <div className="nav_link">
                    <div class="dropdown">
                        <button class="dropbtn">trending <BsArrowDown size={25} className='trendingHr' /></button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Trending;