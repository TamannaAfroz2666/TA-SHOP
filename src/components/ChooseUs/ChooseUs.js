import React from 'react';
import './ChooseUs.css';
import img1 from '../../assets/Image/InstaShop/model1.avif'
import img2 from '../../assets/Image/InstaShop/model2.avif'
import img3 from '../../assets/Image/InstaShop/model3.avif'
import img4 from '../../assets/Image/InstaShop/modl4.jpg'
import img5 from '../../assets/Image/InstaShop/wat1.avif'

const ChooseUs = () => {
    return (
        <div className='chooseUs'>
            <div className="chooseHead">
                <div className="chooseUsHead">
                    <h1 className='instagramTitle'>Instagram Shop</h1>
                    <p className='shopTitle'>Shop your favourite styles from Instagram.</p>
                    <h5 className='instaId'>@dematizest88</h5>
                </div>
                <div className="chooseContainer">
                    <div className="productContent">
                        <a href="/gents-collection">
                    <img src={img1} alt="" className='image' /></a>
                    <a href="/ladies-collection">
                    <img src={img2} alt="" className='image1'/></a>
                    <a href="/kids-collection">
                    <img src={img3} alt="" className='image1'/></a>
                    <a href="/accessories-collection">
                    <img src={img4} alt="" className='image1'/></a>
                    <a href="/watch-collection">
                    <img src={img5} alt="" className='image1' /></a>
                    {/* <div className="overlayImage">
                     

                    </div> */}

                    </div>
                    


                </div>
            </div>

        </div>
    );
};

export default ChooseUs;