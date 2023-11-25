import React, { useState } from 'react';
import './DecorProducts.css';
import img1 from '../../../../assets/Image/category/office.jpg'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { CiShoppingBasket } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import result from '../../../../Utilities/API/Category_product.json'




const DecorProducts = () => {
    const [shows, setShowsProduct] = useState(result);

    return (
        <div className='DecorProducts'>
            <div className="decorProContainer">
                using map

                <div className="productDecor-sec">
                    <div className="saleViewSec">
                        <div className="saleDecorSec">
                            <button className='saleBtnDe' >sale!</button>
                        </div>
                        <div className="viewEyeSecDe">
                            <Tooltip title=
                                {<span className='tooltipTitleDecor'>Select options</span>} placement="left" arrow
                            >
                                <Link> <Button > <span className='linkViewBtn'><CiShoppingBasket className='iconDeIc' size={25} color='black' /> </span>
                                </Button> </Link>
                            </Tooltip>
                            <div className="eyeContact">
                                <Tooltip title=
                                    {<span className='tooltipTitleDecor'>Quick view</span>} placement="left" arrow
                                >
                                    <Link> <Button > <span className='linkViewBtn'><FaEye className='iconDeEye' size={20} color='black' /> </span>
                                    </Button> </Link>
                                </Tooltip>

                            </div>


                        </div>
                    </div>
                    <div className="imgDecor-sec">
                        <img src={img1} alt="" />
                    </div>
                    <div className="infoDecorPro">
                        <Link to='product-name'>
                            <h1 className='decorProTitle'>Product Name 1</h1>
                        </Link>
                        <span className='priceProDecor'> Tk 4000 -5000</span>

                    </div>



                </div>

            </div>

        </div>
    );
};

export default DecorProducts;