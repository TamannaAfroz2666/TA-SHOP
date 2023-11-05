import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import NewArrivals from '../../components/NewArrivals/NewArrivals';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <BackgroundImage></BackgroundImage>
            <NewArrivals></NewArrivals>
            
        </div>
    );
};

export default Main;