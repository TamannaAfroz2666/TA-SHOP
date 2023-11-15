import React from 'react';
import './ProductFilter.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { LuMinus } from "react-icons/lu";


const ProductFilter = () => {
    return (
        <div className='filterP'>
            <div className="productHeadFilter">
                <Accordion defaultActiveKey={['0', '1', '2', '3', '4']} >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header  >
                            <h3 className='
                        collectTitle'>Collections</h3>
                        </Accordion.Header>
                        <Accordion.Body className='bodyAc'>
                            <div className="collectCon">
                                <ul className='ulCollect'>
                                    <li>
                                        <Link to='/show-all-product'>
                                            <div className="filterItems">
                                                <div className="lebelFl">
                                                    <label htmlFor="name" className='proLaTitle'>All Products</label>
                                                </div>
                                                <div className="quanFL">
                                                    <span className='quantityTitleFl'>35</span>
                                                </div>

                                            </div>
                                        </Link>



                                    </li>
                                    <li>
                                        <Link to='/show-all-knitware'>
                                            <div className="filterItems">
                                                <div className="lebelFl">
                                                    <label htmlFor="name" className='proLaTitle'>
                                                        knitware </label>

                                                </div>
                                                <div className="quanFL">

                                                    <span className='quantityTitleFl'>5</span>

                                                </div>

                                            </div>
                                        </Link>



                                    </li>
                                    <li>
                                        <Link to='/show-all-t-shirts'>
                                            <div className="filterItems">
                                                <div className="lebelFl">
                                                    <label htmlFor="name" className='proLaTitle'>T-Shirts</label>

                                                </div>
                                                <div className="quanFL">

                                                    <span className='quantityTitleFl'>25</span>

                                                </div>

                                            </div>
                                        </Link>



                                    </li>
                                    <li>
                                        <Link to='/show-all-sweatshirt'>
                                            <div className="filterItems">
                                                <div className="lebelFl">
                                                    <label htmlFor="name" className='proLaTitle'>Sweatshirt </label>
                                                </div>
                                                <div className="quanFL">
                                                    <span className='quantityTitleFl'>35</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/show-all-women'>
                                            <div className="filterItems">
                                                <div className="lebelFl">
                                                    <label htmlFor="name" className='proLaTitle'>Women </label>
                                                </div>
                                                <div className="quanFL">
                                                    <span className='quantityTitleFl'>35</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <div className="btnColl">
                                        <button className='btnViwCol'>
                                            View More
                                            <hr className='btnHrCol' />
                                        </button>

                                    </div>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h3 className='
                        collectTitle'>AVAILABILITY</h3>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="collectCon">
                                <ul className='ulCollect'>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="checkbox" id="inStock" name="name" />
                                                <label htmlFor="name" className='proStockTitle'>In stock</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>35</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="checkbox" id="inStock" name="name" />
                                                <label htmlFor="name" className='proStockTitle'> Out Of stock</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>1</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h3 className='
                        collectTitle'>price</h3>
                        </Accordion.Header>
                        <Accordion.Body className='reduceSp'>
                            <div className="collectCon">
                                <div class="range-slider">
                                    <span class="range-selected"></span>
                                </div>
                                <div class="range-input">
                                    <input type="range" class="min" min="0" max="1000" value="300" step="10" />
                                    <input type="range" class="max" min="0" max="1000" value="700" step="10" />
                                </div>
                                <div className="priceRang">
                                    <div className="priceT">
                                        <p className='priceTitleR'>Price :</p>
                                    </div>
                                    <div className="minP">
                                        <div className="priceSection1">
                                            <div className="pp1">
                                                <p className='priceSubInfoVCart'>
                                                    $0.00</p>
                                                <p className='priceMinTotal1'>tk 0.00 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iconF">
                                        <LuMinus />
                                    </div>
                                    <div className="maxP">
                                        <div className="priceSection1">
                                            <div className="pp1">
                                                <p className='priceSubInfoVCart'>
                                                    $20</p>
                                                <p className='priceMinTotal1'>tk 3,000 </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <h3 className='
                        collectTitle'>color</h3>
                        </Accordion.Header>
                        <Accordion.Body className='bodyAc'>
                            <div className="collectCon">
                                <ul className='ulCollect'>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="radio" id="inStock11" name="name" />
                                                <label htmlFor="name" className='proStockTitle'>Blue</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>35</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="radio" id="inStock11" name="name" />
                                                <label htmlFor="name" className='proStockTitle'>Black</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>1</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="radio" id="inStock11" name="name" />
                                                <label htmlFor="name" className='proStockTitle'>Brown</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>10</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="filterItems">
                                            <div className="lebelFl">
                                                <input type="radio" id="inStock11" name="name" />
                                                <label htmlFor="name" className='proStockTitle'>Cream</label>
                                            </div>
                                            <div className="quanFL">
                                                <span className='quantityTitleFl'>11</span>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="btnColl">
                                        <button className='btnViwCol'>
                                            View More
                                            <hr className='btnHrCol' />
                                        </button>

                                    </div>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <h3 className='
                        collectTitle'>Size</h3>
                        </Accordion.Header>
                        <Accordion.Body className='reduceSp'>
                            <div className="sizeFl">
                                <div className="btn1Fl">
                                    <span className='sizeQn'>3</span> <br />
                                    <button className='btnXs'>
                                        xs
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>30</span> <br />
                                    <button className='btnXs'>
                                        s
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>1</span> <br />
                                    <button className='btnXs'>
                                        m
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>9</span> <br />
                                    <button className='btnXs'>
                                        l
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>13</span> <br />
                                    <button className='btnXs'>
                                        xl
                                    </button>
                                </div>
                            </div>
                            <div className="sizeFl">
                                <div className="btn1Fl">
                                    <span className='sizeQn'>2</span> <br />
                                    <button className='btnXs'>
                                        04
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>4</span> <br />
                                    <button className='btnXs'>
                                        06
                                    </button>
                                </div>
                                <div className="btn1Fl">
                                    <span className='sizeQn'>10</span> <br />
                                    <button className='btnXs'>
                                        08
                                    </button>
                                </div>
                                
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>

        </div>
    );
};

export default ProductFilter;