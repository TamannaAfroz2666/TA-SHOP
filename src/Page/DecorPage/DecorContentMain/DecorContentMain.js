import React from 'react';
import './DecorContentMain.css'

const DecorContentMain = () => {
    return (
        <div className='DecorContentMain'>
            <div className="decorSorting-sec">
                <div className="show-sec">
                    <h4 className='showingAll'>Showing all 9 results</h4>
                </div>
                <div className="sorting-sec">
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
                        {/* <label htmlFor="language">
                        <span className='faSort'><FaSortAmountDownAlt /></span>
                    </label> */}

                    </div>

                </div>
            </div>

        </div>
    );
};

export default DecorContentMain;