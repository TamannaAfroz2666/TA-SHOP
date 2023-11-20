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
                >
                    <IoBagHandleSharp size={18} />
                    <span className='cart-icon'>add to cart</span>
                </button>
            </div>

      

    </div>

    );
};

export default AddToCard;