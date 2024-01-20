
import './Main.css'
import Header from '../Header/Header';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Trending from '../../components/Treanding/Trending';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ClientSay from '../../components/ClientSay/ClientSay';
import SpringCollection from '../../components/SpringCollection/SpringCollection';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import React, { useState, useEffect } from 'react';

const Main = ({wishlistLength}) => {

    return (
        <div className='main'>
            <Header wishlistLength={wishlistLength}></Header>
            <BackgroundImage></BackgroundImage>
            <NewArrivals></NewArrivals>
            <Trending></Trending>
            <ProductCategory></ProductCategory>
            <SpringCollection></SpringCollection>
            <ClientSay></ClientSay>
            <ChooseUs></ChooseUs>
            
        </div>
    );
};

export default Main;