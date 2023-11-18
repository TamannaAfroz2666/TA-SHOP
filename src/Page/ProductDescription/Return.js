import React from 'react';
import './Return.css';

const Return = () => {
    return (
        <div className='return-main'>
            <p className='shipping-tittle'>You can choose between a refund or a credit note on full priced items.</p>
            <ul>
                <li className='shipping-tittle'>
                   * Item(s) must be returned in their original condition and packaging: unworn, unwashed and with all tags attached.</li>
                <li className='shipping-tittle'>
                   * Earrings cannot be returned due to health and safety reasons.
                </li>
                <li className='shipping-tittle'>
                   * Return shipping methods and associated costs are the responsibility of the customer.
                </li>
                <li className='shipping-tittle'>
                    * Sale items can not be refunded for change of mind.
                </li>
            </ul>


        </div>
    );
};

export default Return;