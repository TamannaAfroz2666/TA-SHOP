import React from 'react';
import './CategoryDescription.css';
import img1 from '../../../assets/Image/category/img11.webp';
import { FaCheck } from "react-icons/fa";

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
                    <div className="featuresCategory">
                        <h1 className='title'>features</h1>
                        <p className='featuresDesCategory'>Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim. Suspendisse in ultrices massa.</p>
                        <div className="ulFeatures">
                            <ul>
                                <li className='listsFeaCate'><FaCheck /> <span className='listSubSpan'>Etiam eu tortor tempor, malesuada</span></li>
                                <li className='listsFeaCate'> <FaCheck /><span className='listSubSpan'>
                                    Nunc vitae erat sit amet neque varius consequat</span></li>
                                <li className='listsFeaCate'><FaCheck /> <span className='listSubSpan'>Lorem ipsum dolor sit amet</span></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="infoBasic2">
                    <h3 className='basicTitle'>Aenean pretium, sem vitae gravida tincidunt, justo diam tempus mauris.</h3>
                    <p className='basicTitle2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet.</p>
                    <div className="categoryDesImg">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryDescription;