import React from 'react';
import './ProductShow.css';
import { Link } from 'react-router-dom';
import { FaSortAmountDownAlt } from "react-icons/fa";


const ProductShow = () => {
    return (
        <div className='productShowAll'>
            <div className="proSoAlHead">
                <div className="dropFilter">
                    <select name="language" className='selectDrop' id="language">
                        <option value="javascript">Best Selling</option>
                        <option value="python">Featured</option>
                        <option value="java" selected>Alphabetically, A-Z</option>
                        <option value="c++">Alphabetically, Z-A</option>
                        <option value="javascript">Price, Low-High</option>
                        <option value="python">Price,High-Low</option>
                        <option value="c++">Date, Old-New</option>
                        <option value="java">Date, New-Old</option>
                    </select>
                    <label htmlFor="language">
                        <span className='faSort'><FaSortAmountDownAlt /></span>
                    </label>

                </div>
                <div className="sizeFilterSh">

                </div>



            </div>

        </div>
    );
};

export default ProductShow;