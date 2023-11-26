import React from 'react';
import './ProductInformation.css'
import { Link } from 'react-router-dom';


const ProductInformation = () => {
    return (
        <div className='ProductInformation'>
            <div className="product_header">
                <ul className='pro-head-ul22'>
                    <li>
                        <Link to='/' className='pro-head-link'>Home</Link>
                    </li>
                    <li className='pro-head-link'>
                        /
                    </li>
                    <li>
                        <Link to='decor' className='pro-head-link'>Decor</Link>
                    </li>
                    <li className='pro-head-link'>
                        /
                    </li>
                    <li className='pro-head-link'>
                        Product Name 10
                    </li>
                </ul>
                <div className="product-list">
                    <Link to='product-category/bedroom' className='pro-list-link'>Bedroom,</Link>
                    <Link to='product-category/decor' className='pro-list-link'>Decor,</Link>
                    <Link to='product-category/office' className='pro-list-link'>office</Link>
                </div>
                
            </div>
        </div>
    );
};

export default ProductInformation;