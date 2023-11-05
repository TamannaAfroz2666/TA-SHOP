import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Trending from '../../components/Treanding/Trending';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <BackgroundImage></BackgroundImage>
            <NewArrivals></NewArrivals>
            <Trending></Trending>
            
        </div>
    );
};

export default Main;