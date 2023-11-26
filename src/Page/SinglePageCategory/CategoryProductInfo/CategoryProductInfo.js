import React from 'react';
import './CategoryProductInfo.css';
import im1 from '../../../assets/Image/category/office.jpg';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";
import im2 from '../../../assets/Image/category/product-09-c.jpg'
import { FaArrowsUpDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CategoryProductInfo = () => {
    return (
        <div className='CategoryProductInfo'>
            <div className="cateProContents">
                <div className="imageCateSection">
                    <div className="saleSearchSec">
                        <div className="saleCategorySec">
                            <button className='saleBtnDe' >sale!</button>
                        </div>
                        <div className="eyeContact1">
                            <Button > <span className='linkViewBtn'><IoSearchSharp className='iconDeEye' size={20} color='black' /> </span>
                            </Button>


                        </div>
                    </div>
                    <div className="imgCateSec">
                        <img src={im1} alt="" />
                    </div>
                    <div className="colorImgSection">
                        <Link to="product/upload/01">
                        <div className="imageOneSec">
                            <div className="upDownArrow">
                                <Button > <span className='linkViewBtn'><FaArrowsUpDown className='iconDeEye' size={20} color='gray' /> </span>
                                </Button>
                            </div>
                            <div className="img11">
                                <img src={im2} alt="" />
                            </div>
                        </div>
                        </Link>
                        <div className="imageTwo">
                            <img src={im2} alt="" />

                        </div>


                    </div>


                </div>
                <div className="infoCateSection">

                </div>

            </div>


        </div>
    );
};

export default CategoryProductInfo;
