import React from 'react';
import './CategoryProductInfo.css';
import im1 from '../../../assets/Image/category/office.jpg';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";

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


                </div>
                <div className="infoCateSection">

                </div>

            </div>


        </div>
    );
};

export default CategoryProductInfo;
