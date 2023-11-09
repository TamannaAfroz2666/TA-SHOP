import React from 'react';
import './Office.css';
import img from '../../../assets/Image/category/office.jpg';

const Office = () => {
    return (
        <div className='office_main'>
            <a href="/product-category/office/">
                <div className="officeSub">
                    <img src={img} alt="" />
                    <div className="office_info">
                    <p className='title_office'>bedroom</p>
                        <p className='count_office'>6 products</p>
                    </div>
                </div>


            </a>
            
        </div>
    );
};

export default Office;