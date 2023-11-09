import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Trending from '../../components/Treanding/Trending';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ClientSay from '../../components/ClientSay/ClientSay';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <BackgroundImage></BackgroundImage>
            <NewArrivals></NewArrivals>
            <Trending></Trending>
            <ProductCategory></ProductCategory>
            <ClientSay></ClientSay>
            
        </div>
    );
};

export default Main;