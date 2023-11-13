import React from 'react';
import './CheckOut.css';
import { BsBag } from "react-icons/bs";

const CheckOut = () => {
    return (
        <div className='checkout'>
            <div className="checkoutSection">
                <div className="checkoutHead">
                    <div className="checkTitleSec">
                        <h3 className='titleCheck'>TA SHOP products</h3>
                    </div>
                    <div className="iconCheckSec">
                        <BsBag color='white' size={25} />

                    </div>


                </div>

            </div>

        </div>
    );
};

export default CheckOut;