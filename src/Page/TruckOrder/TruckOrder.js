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
            
        </div>
    );
};

export default TruckOrder;