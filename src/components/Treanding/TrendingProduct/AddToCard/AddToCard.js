import React, { useEffect, useState } from 'react';
import './AddToCard.css';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoBagHandleSharp } from "react-icons/io5";
// import result from '../../../../Utilities/API/trendingProduct.json';

const AddToCard = (props) => {
    // console.log("props = ", props);
    const [localId, setLocalId] = useState([]);


    const addToCardTreand = (productInformation) => {
        // console.log('productInformation = ', productInformation);
        let idGet = productInformation.product_id;
        // console.log('card id = ', idGet);
        setLocalId(idGet);
    }

    useEffect(() => {
        console.log('product id is', localId);
    }, [localId]); // This useEffect will run after each render when localId changes

// value increse decrese 
const [count, setCount] = useState(1);
const lowValue = () => {
    const staticValue = 1;
    try{
        if(count> staticValue){
            setCount(count -1);
        }
    }
    catch (err){
        console.error ('something wrong')
        console.error(err)
    }

}
const highValue = () => {
    setCount (count + 1);
}
    return (
        <div className='selectOptionTitle1'>
            <div className="number-incre">
                <button className='minus-btn' onClick={lowValue}>
                    <FiMinus className='minus-trending' />
                </button>
                <span className='one-trending'
                >{count}</span>
                <button className='plus-btn' onClick={highValue}>
                    <GoPlus className='minus-trending' />
                </button>
            </div>
            <div className="cartAddTreand">
                <button onClick={() => addToCardTreand(props)} className='card-btn-cls' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <IoBagHandleSharp size={18} />
                    <span className='cart-icon'>add to cart</span>
                </button>
            </div>
        </div>

    );
};

export default AddToCard;