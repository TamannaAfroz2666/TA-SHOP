import React from 'react';
import './SinglePageCategory.css';
import Header from '../../layout/Header/Header'
import CategoryProductInfo from './CategoryProductInfo/CategoryProductInfo';
import CategoryDescription from './CategoryDescription/CategoryDescription';

const SinglePageCategory = () => {
    return (
        <div className='SinglePageCategory'>
            <Header/>
            <div className="categoryInfoContents">
                <CategoryProductInfo />
            </div>
            <div className="categoryDescriptionSection">
                <CategoryDescription/>
            </div>



            

          
            
        </div>
    );
};

export default SinglePageCategory;
