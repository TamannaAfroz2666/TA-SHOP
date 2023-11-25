import React from 'react';
import './DecorPage.css'
import Header from '../../layout/Header/Header';
import DecorHeader from './DecorHeader/DecorHeader';
import DecorContentMain from './DecorContentMain/DecorContentMain';

const DecorPage = () => {
    return (
        <div className='DecorPageSection'>
            <Header></Header>
            <div className="subHeaderDecorSec">
                <DecorHeader></DecorHeader>
            </div>
            <div className="decorPage-con">
                <DecorContentMain />

            </div>
            
        </div>
    );
};

export default DecorPage;