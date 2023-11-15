import React from 'react';
import './ProductShow.css';
import { Link } from 'react-router-dom';
import { FaSortAmountDownAlt } from "react-icons/fa";


const ProductShow = () => {
    return (
        <div className='productShowAll'>
            <div className="proSoAlHead">
                <div className="dropFilter">
                <div className="dropdown">
                            <span className="dropbtnAll">Alphabetically, Z-A <span className='faSort'><FaSortAmountDownAlt /></span> </span>
                            <div className="dropdown-content">
                                <Link to="/trending-sell">trending</Link>
                                <Link to="/best-seller">best seller</Link>
                                <Link to="/top-ranking">top ranking</Link>
                            </div>
                        </div>

                </div>
                <div className="sizeFilterSh">

                </div>



            </div>

        </div>
    );
};

export default ProductShow;