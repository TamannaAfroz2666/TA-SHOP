import React from 'react';
import './DecorPage.css'
import Header from '../../layout/Header/Header';
import DecorHeader from './DecorHeader/DecorHeader';

const DecorPage = () => {
    return (
        <div className='DecorPageSection'>
            <Header></Header>
            <div className="subHeaderDecorSec">
                <DecorHeader></DecorHeader>
            </div>
            
        </div>
    );
};

export default DecorPage;