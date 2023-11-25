import React from 'react';
import './DecorProducts.css';
import img1 from '../../../../assets/Image/category/office.jpg'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from 'react-router-dom';




const DecorProducts = () => {
    return (
        <div className='DecorProducts'>
            <div className="decorProContainer">
                <div className="productDecor-sec">
                    <div className="saleViewSec">
                        <div className="saleDecorSec">
                            <button className='saleBtnDe' >sale!</button>
                        </div>
                        <div className="viewEyeSecDe">
                            <Tooltip title=
                                {<span className='tooltipTitleDecor'>Select options</span>} placement="left" arrow
                            >
                                <Link> <Button > <span className='linkViewBtn'><CiShoppingBasket className='iconDeIc'  size={25} color='black' /> </span>
                                </Button> </Link>
                            </Tooltip>

                        </div>

                    </div>
                    <img src={img1} alt="" />
                </div>

            </div>

        </div>
    );
};

export default DecorProducts;