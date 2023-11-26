import React from 'react';
import './CategoryDescription.css';

const CategoryDescription = () => {
    return (
        <div className='CategoryDescription'>
            <div className="title-cateDes-Sec">
                <div className="titileSec">
                    <h2 className='title'>Description</h2>
                </div>
                <div className="titlehr">
                    <hr className='categoryDesHr22' />

                </div>
            </div>
            <div className="subSectionCategoryInfo">
                <div className="infoBasic">
                    <h1 className='subTitleCategory'>A few words about the product</h1>
                    <hr className='titleSecHr' />

                </div>
                <div className="infoBasic2">
                    <h3 className='basicTitle'>Aenean pretium, sem vitae gravida tincidunt, justo diam tempus mauris.</h3>
                    <p className='basicTitle2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet.</p>
                </div>


            </div>


        </div>
    );
};

export default CategoryDescription;