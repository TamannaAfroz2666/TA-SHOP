import React from 'react';
import './ProductFilter.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


const ProductFilter = () => {
    return (
        <div className='filterP'>
            <div className="productHeadFilter">
                <Accordion defaultActiveKey={['0', '1']} >
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header  >
                            <h3 className='
                        collectTitle'>Collections</h3>
                        </Accordion.Header>
                        <Accordion.Body >
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
                </Accordion>
            </div>

        </div>
    );
};

export default ProductFilter;