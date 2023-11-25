import React from 'react';
import './CategoryProductInfo.css';
import im1 from '../../../assets/Image/category/office.jpg'

const CategoryProductInfo = () => {
    return (
        <div className='CategoryProductInfo'>
            <div className="cateProContents">
                <div className="imageCateSection">
                    <img src={im1} alt="" />

                </div>
                <div className="infoCateSection">

                </div>

            </div>

            
        </div>
    );
};

export default CategoryProductInfo;
