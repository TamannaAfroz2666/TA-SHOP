import React from 'react';
import './Trending.css';
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import TrendingProduct from './TrendingProduct/TrendingProduct';
// import { NavLink } from 'react-router-dom';

const Trending = () => {
    return (
        <div className='trending'>
            <div className="trendingBody">
                <div className="infoContent">
                    <div className="abc">
                        <h1 className='trendTitle'>You are in</h1>
                    </div>
                    <div className="nav_link23">
                        <div className="dropdown">
                            <span className="dropbtn23">trending <BsArrowDown size={25} className='trendingHr' /> </span>
                            <div className="dropdown-content">
                                <Link to="/trending-sell">trending</Link>
                                <Link to="/best-seller">best seller</Link>
                                <Link to="/top-ranking">top ranking</Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="showMorePro">
                    <Link to="show-all-product" className='showAllTitle'>Show all product
                    <span className='hh'><hr className='showAllHr' /></span>
                    </Link>
                </div>

            </div>
          <div className="product_container">
            <TrendingProduct></TrendingProduct>
          </div>
         

        </div>
    );
};

export default Trending;