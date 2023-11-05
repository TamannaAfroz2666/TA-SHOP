import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <BackgroundImage></BackgroundImage>
            
        </div>
    );
};

export default Main;