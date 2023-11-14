import React from 'react';
import './MainShowAll.css'
import Header from '../../../layout/Header/Header.js'


const MainShowAll = () => {
    return (
        <div className='showAllContainer'>
            <div className="headerSec">
                <Header></Header>
            </div>
            <div className="bodyShowAll">
                <div className="titleContentShow">
                    <h1 className='productsTi'>Products</h1>
                </div>

            </div>


        </div>
    );
};

export default MainShowAll;