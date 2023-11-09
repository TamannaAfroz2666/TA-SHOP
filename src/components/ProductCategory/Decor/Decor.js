import React from 'react';
import './Decor.css';
import img from '../../../assets/Image/category/decore.jpg'

const Decor = () => {
    return (
        <div className='decorContainer'>
            <a href="product-category/decore/">
                <div className="decorSub">
                    <img src={img} alt="" />
                    <div className="decorInfo">
                    <p className='title_decor'>decor</p>
                        <p className='count_decor'>6 products</p>
                    </div>
                </div>
            </a>
            
        </div>
    );
};

export default Decor;