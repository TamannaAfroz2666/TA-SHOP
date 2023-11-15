import React from 'react';
import './SinglePage.css';
import Header from '../../layout/Header/Header';
import PageHead from './PageHead/PageHead';
import SingleProduct from '../../components/SinglePage/SinglePeoduct/SingleProduct';

const SinglePage = () => {
    return (
        <div className='singlePage'>
            <div className="singlePageHead">
                <Header></Header>
            </div>
            <div className="single-pageContent">
                <div className="subPageHead">
                    <PageHead></PageHead>
                </div>
                <div className="singleProdCom">
                    <SingleProduct></SingleProduct>
                </div>




            </div>
            
        </div>
    );
};

export default SinglePage;