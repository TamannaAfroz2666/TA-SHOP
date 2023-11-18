import React from 'react';
import './SinglePage.css';
import Header from '../../layout/Header/Header';
import PageHead from './PageHead/PageHead';
import SingleProduct from '../../components/SinglePage/SinglePeoduct/SingleProduct';
import ProductDescription from '../../components/SinglePage/ProductDesceiption/ProductDescription';
import AdditionalProduct from '../../components/AdditionalProduct/AdditionalProduct';

const SinglePage = () => {
    return (
        <div className='singlePage'>
            <div className="singlePageHead">
                <Header/>
            </div>
            <div className="single-pageContent">
                <div className="subPageHead">
                    <PageHead/>
                </div>
                <div className="singleProdCom">
                    <SingleProduct/>
                </div>
                <div className="productDescription">
                    <ProductDescription/>
                </div>
                {/* <div className="additionalProduct">
                    <AdditionalProduct/>

                </div> */}




            </div>
            
        </div>
    );
};

export default SinglePage;