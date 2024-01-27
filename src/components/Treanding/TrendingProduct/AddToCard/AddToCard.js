import React, { useEffect, useState } from 'react';
import './AddToCard.css';
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoBagHandleSharp } from "react-icons/io5";
import SubHeader from '../../../../layout/Header/SubHeader/SubHeader';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import result from '../../../../Utilities/API/trendingProduct.json';




const AddToCard = (props) => {
    

    const [count, setCount] = useState(1);
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    const closeOffCanvas = () => {
        setShowOffCanvas(false);
    };

    // value increse decrese 
    const lowValue = () => {
        const staticValue = 1;
        try{
            if(count> staticValue){
                setCount(count-1);
            }
        }
        catch (err){
            console.error ('something wrong')
            console.error(err)
        }
    }
    const highValue = () => {
        setCount(count + 1);
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
                <div className="cartAddTreand">
                    <SubHeader products_data={props} quantity={count} product_section={true}/>
                </div>
               
            </div>

        </div>

    );
};

export default AddToCard;