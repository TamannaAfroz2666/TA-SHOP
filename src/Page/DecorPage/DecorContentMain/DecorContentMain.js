import React from 'react';
import './DecorContentMain.css'
import { IoChevronDown } from "react-icons/io5";
import DecorProducts from './DecorProducts/DecorProducts';

const DecorContentMain = () => {
    return (
        <div className='DecorContentMain'>
            <div className="decorSorting-sec">
                <div className="show-sec">
                    <h4 className='showingAll'>Showing all 9 results</h4>
                </div>
                <div className="sorting-sec">
                    <div className="dropFilterDecor">
                        <select name="language" className='selectDropDecor' id="language">
                            <option value="default" selected className='optionDecorSorting'>Default Sorting</option>
                            <option value="popularity" className='optionDecorSorting'>Sort by popularity</option>
                            <option value="java" className='optionDecorSorting'>Sort by average rating</option>
                            <option value="c++" className='optionDecorSorting'>Sort by latest</option>
                            <option value="javascript" className='optionDecorSorting'>Sort by price: low-high</option>
                            <option value="python" className='optionDecorSorting'>Sort by price: high-low</option>
                        </select>
                        <label htmlFor="language">
                            <span className='faSortDecor'><IoChevronDown /></span>
                        </label>

                    </div>

                </div>
            </div>
            <div className="decor-products-sec">
                <DecorProducts />
            </div>

        </div>
    );
};

export default DecorContentMain;