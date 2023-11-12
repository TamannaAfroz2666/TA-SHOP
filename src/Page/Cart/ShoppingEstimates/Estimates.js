import React from 'react';
import './Estimates.css';


const Estimates = () => {
    return (
        <div className='estimates'>
            <div className="estimatesBody">
                <div className="estimateContent">
                    <h3 className='titleEstimate'>Get shipping estimates</h3>
                    <div className="estimatesContents">
                        <div className="country">
                            <input type="text" />

                        </div>
                        <div className="stateContent">
                            <input type="text" name="state" id="stateId" className='StateCls' />

                        </div>
                        <div className="zipCodeEstimate">
                            <input type="text" placeholder='Zip Code' className='zipCodeField' id='zipCodeEstimate' />

                        </div>
                        <div className="estimateBtnHead">
                            <button>
                                estimate
                            </button>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Estimates;