import React from 'react';
import './CheckOut.css';
import { BsBag } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CheckOut = () => {
    return (
        <div className='checkout'>
            <div className="checkoutSection">
                <div className="checkoutHead">
                    <div className="checkTitleSec">
                        <h3 className='titleCheck'>TA SHOP products</h3>
                    </div>
                    <div className="iconCheckSec">
                        <Link to= '/cart'>
                        <BsBag color='tomato' size={25} className='bsBagIcon' />
                        </Link>
                       
                    </div>


                </div>

            </div>

        </div>
    );
};

export default CheckOut;