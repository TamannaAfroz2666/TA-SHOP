import React from 'react';
import './ProductInformation.css'
import { Link } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import img1 from '../../../../assets/Image/Card/visaCard.webp';


const ProductInformation = () => {
    return (
        <div className='ProductInformation'>
            <div className="product_header">
                <ul className='pro-head-ul22'>
                    <li>
                        <Link to='/' className='pro-head-link'>Home</Link>
                    </li>
                    <li className='pro-head-link'>
                        /
                    </li>
                    <li>
                        <Link to='decor' className='pro-head-link'>Decor</Link>
                    </li>
                    <li className='pro-head-link'>
                        /
                    </li>
                    <li className='pro-head-link'>
                        Product Name 10
                    </li>
                </ul>
                <div className="product-list">
                    <Link to='product-category/bedroom' className='pro-list-link'>Bedroom,</Link>
                    <Link to='product-category/decor' className='pro-list-link'>Decor,</Link>
                    <Link to='product-category/office' className='pro-list-link'>office</Link>
                </div>
                <div className="product-title">
                    <h1 className='title'>Product Name 10</h1>
                    <p className='price'>
                        <strong className='dollarName'>$85.00 – $99.00</strong>
                        & Free Shipping
                    </p>
                    <p className='pro-des-cate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet. Vivamus id justo dui.</p>
                    <p className='pro-des-cate'>Donec faucibus gravida vulputate. Sed quis porttitor libero. Aenean posuere imperdiet elit, in aliquet lorem vulputate sed. Integer et lacinia tellus.</p>

                    {/* color section  */}
                    <hr />
                    <div className="btnAddSection">
                        <div className="increaseDeSection">
                            <div className="cart-sec">
                                <div className="inputValue">
                                    <div className="incrDecr-infoSec">
                                        <div className="decr-sec22">
                                            <button className='decreaseBtn22'>
                                                <AiOutlineMinus size={20} />
                                            </button>
                                        </div>
                                        <div className="value-pro-show">
                                            <span className='showOne1'>1</span>
                                        </div>
                                        <div className="incr-sec22">
                                            <button className='increaseBtn22'>
                                                <AiOutlinePlus size={20} />
                                            </button>
                                        </div>

                                    </div>

                                </div>
                                <div className="cardBtnInformation">
                                    <button className='add-card-cateBtn'>add to card</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="sku-section">
                        <p className='sku-cate'>
                            <strong className='sku-cate-title'>SKU: N/A</strong>
                            Categories:
                            <span className='sku-link-span'>
                                <Link to='product-category/bedroom' className='sku-link'>Bedroom,</Link>
                                <Link to='product-category/decor' className='sku-link'>Decor,</Link>
                                <Link to='product-category/office' className='sku-link'>office</Link>
                            </span>
                        </p>
                    </div>
                    <div className="card-company-cate">
                        <h5 className='title'>GUARANTEE SAFE CHECKOUT</h5>
                        <div className="image-card-cate">
                            <img src={img1} alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductInformation;