import React from 'react';
import './DecorPage.css'
import Header from '../../layout/Header/Header';
import DecorHeader from './DecorHeader/DecorHeader';

const DecorPage = () => {
    return (
        <div className='DecorPage'>
            <Header></Header>
            <div className="subHeaderDecor">
                <DecorHeader></DecorHeader>
            </div>
            
        </div>
    );
};

export default DecorPage;