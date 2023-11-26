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
                <div className="product-title">
                    <h1 className='title'>Product Name 10</h1>
                    <p className='price'>
                        <strong className='dollarName'>$85.00 – $99.00</strong>
                        & Free Shipping
                    </p>
                    <p className='pro-des-cate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque mauris sem, sagittis sed blandit eu, varius a tortor. Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet. Vivamus id justo dui.</p>
                    <p className='pro-des-cate'>Donec faucibus gravida vulputate. Sed quis porttitor libero. Aenean posuere imperdiet elit, in aliquet lorem vulputate sed. Integer et lacinia tellus.</p>

                </div>

            </div>
        </div>
    );
};

export default ProductInformation;