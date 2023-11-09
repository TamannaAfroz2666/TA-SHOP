import React, { useState } from 'react';
import './Decor.css';
// import img from '../../../assets/Image/category/decore.jpg'
import result  from '../../../Utilities/API/category.json'

const Decor = () => {
    const [info, setInfo] = useState(result.decor);
    return (
        <div className='decorContainer'>
            <a href="product-category/decore/">
                <div className="decorSub">
                    <img src={info.image} alt="" />
                    <div className="decorInfo">
                    <p className='title_decor'>{info.name}</p>
                        <p className='count_decor'>{info.total_product} products</p>
                    </div>
                </div>
            </a>
            
        </div>
    );
};

export default Decor;