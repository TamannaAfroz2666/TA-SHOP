import React from 'react';
import './TruckOrder.css';
import Header from '../../layout/Header/Header';

const TruckOrder = () => {
    return (
        <div className='truckOrder'>
            <div className="header-truck-order">
                <Header />
            </div>
            <h1 className='truckOrderTitle'>order</h1>
            <div className="login-truck-sec">
                <h1 className='log-truckTitle'>login</h1>
                <div className="content-truck-inputs">
                    <input type="text" placeholder='UserName' className='userName-truck'  />
                </div>


            </div>
            
        </div>
    );
};

export default TruckOrder;