import React from 'react';
import './ProductCategory.css';
import BedRoom from './BedRoom/BedRoom';




const ProductCategory = () => {

    
    return (
        <div className='productCategory'>
            <div className="productCateHead">
                <div className="productCateContainer">
                    <div className="cateTitleContent">
                        <h5 className='shopByCate'>Shop by category</h5>
                        <h1 className='shopByCateMain'>Shop by category</h1>
                        <hr className='cateHr' />
                    </div>

                    <div className="productCateContents">
                       <div className="bedRoom">
                        <BedRoom></BedRoom>
                       </div>
                       <div className="decor">

                       </div>
                       <div className="livingRoom">

                       </div>
                       <div className="office">

                       </div> 


                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductCategory;