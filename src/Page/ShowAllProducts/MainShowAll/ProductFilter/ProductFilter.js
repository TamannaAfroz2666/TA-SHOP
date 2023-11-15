import React from 'react';
import './ProductFilter.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


const ProductFilter = () => {
    return (
        <div className='filterP'>
            <div className="productHeadFilter">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header  >
                            <h3 className='
                        collectTitle'>Collections</h3>
                        </Accordion.Header>
                        <Accordion.Body >
                            <div className="collectBodyIn">
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
                                    </ul>
                                </div>


                            </div>


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default ProductFilter;