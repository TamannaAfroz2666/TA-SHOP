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
    const [shows, setShows] = useState(result.category_products);
    const findProductById = (productId) => {
        return shows.find(product => product.id === productId);
    };

    // const findProductByIdAndColor = (productId, colorCode) => {
    //     const product = findProductById(productId);
    //     console.log('product is ', product);
    //     if (product) {
    //         const foundColor = product.color.find(color => color.color_code === colorCode);
    //         console.log('find color', foundColor);
    //         if (foundColor) {
    //             let imageId = 'product_id_' + productId;
    //             document.getElementById(imageId).src = foundColor.image;
    //             return { product, foundColor };
    //         }
    //     }

    //     return null; // If the product or color isn't found
    // };

    return (
        <div className='DecorProducts'>
            <div className="decorProContainer">
                {/* using map */}
                {
                    shows.map((product1) => {
                        return (

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
                                    <Link to ={"/single-category/" + product1.slug_link}>
                                        <img src={product1.default_image} alt="" id={`product_id_${product1.id
                                            }`} />
                                    </Link>
                                </div>
                                <div className="infoDecorPro">
                                    <Link to='product-name'>
                                        <h1 className='decorProTitle'>{product1.product_title}</h1>
                                    </Link>
                                    <span className='priceProDecor'> Tk {product1.product_price}</span>

                                </div>
                                {/* <div className="colorSection">
                                    <div className="sectionColor">
                                        {
                                            category_products.color.map((product_color) => {
                                                return (
                                                    <label className="colorField">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value={product_color.color_code}
                                                            onChange={() => findProductByIdAndColor(product1.id, product_color.color_code)}
                                                        />
                                                        <span
                                                            style={{ backgroundColor: product_color.color_code }}
                                                            className="radio-mark"
                                                        ></span>
                                                    </label>
                                                )
                                            })
                                        }
                                    </div>
                                </div> */}



                            </div>

                        )
                    })
                }



            </div>

        </div>
    );
};

export default DecorProducts;