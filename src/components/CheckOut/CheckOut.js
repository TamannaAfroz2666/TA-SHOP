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
                        <Link to='/cart'>
                            <BsBag color='tomato' size={25} className='bsBagIcon' />
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="checkOutContent">
                    <div className="infoCheckOut">
                        <div className="titleInfoSec">
                            <div className="conSec1">
                                <h3 className='conTitle'>Contact</h3>
                            </div>
                            <div className="subLog">
                                <p className='accountTitle'>Have an account?
                                    <span className='spLog'><a href="/login-page">Log in</a></span>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="productCheckOut">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CheckOut;