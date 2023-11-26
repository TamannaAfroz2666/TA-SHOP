import React from 'react';
import './CategoryProductInfo.css';
import im1 from '../../../assets/Image/category/office.jpg';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";
import im2 from '../../../assets/Image/category/product-09-c.jpg'
import { FaArrowsUpDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CategoryProductImage from './CategoryProductImage/CategoryProductImage';

const CategoryProductInfo = () => {
    return (
        <>
            <div className='CategoryProductInfo'>
                <div className="cateProContents">
                    <div className="img-sec-cate">
                        <CategoryProductImage />
                    </div>
                   
                    <div className="infoCateSection">

                    </div>

                </div>

            </div>

        </>

    );
};

export default CategoryProductInfo;
