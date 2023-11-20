import React from 'react';
import './AddToCard.css';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoBagHandleSharp } from "react-icons/io5";

const AddToCard = () => {
    const addToCardTreand = () => {
        console.log('card ');
    }
    return (
        <div className='selectOptionTitle1'>
            <div className="number-incre">
                <button className='minus-btn'>
                    <FiMinus className='minus-trending' />
                </button>
                <span className='one-trending'
                >1</span>
                <button className='plus-btn'>
                    <GoPlus className='minus-trending' />
                </button>
            </div>
            <div className="cartAdd">
                <button
                    onClick={addToCardTreand}
                    className='card-btn-cls'
                    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                >
                    <IoBagHandleSharp size={18} />
                    <span className='cart-icon'>add to cart</span>
                </button>

                {/* <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Shopping Cart (3)</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                       
                    </div>
                </div> */}
            </div>
        </div>

    );
};

export default AddToCard;