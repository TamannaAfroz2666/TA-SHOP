import React from 'react';
import './SubHeader.css';
import { BsBasket } from "react-icons/bs";
import AddToCartPage from '../../../Page/TrendingProduct/AddToCartPage';

const SubHeader = () => {
    return (
        <div>
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className='init'>0</span>
                <BsBasket  size={20} className='cartIconsub' />
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel" className='cart-title'>shopping cart (3)</h5>
                    <button type="button" className="btn-close text-reset  " data-bs-dismiss="offcanvas" aria-label="Close" id='btnClose'>

                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="body-cart">
                        <p className='spend-cart'>Spend <span className='spend-middle'>Tk 3,317.00 </span>more and get <span className='spend-middle'>free shipping!</span></p>
                        <hr className='lineHr2' />
                        <div className="product-list-cart">
                            <AddToCartPage></AddToCartPage>
                        </div>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default SubHeader;