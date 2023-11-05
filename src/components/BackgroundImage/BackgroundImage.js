import React from 'react';
import './BackgroundImage.css';
import image1 from '../../assets/Image/sandle.jpg';
// import img2 from '../../assets/Image/bg4.jpg';
// import img3 from '../../assets/Image/bg3.jpg'


const BackgroundImage = () => {

    const shopNow =() =>{
        console.log('shop now available');
    }
    return (
        <div className='backgroundImage'>
            <div className="backHead">
                <div className="backContents">
                    <h5 className='blackFri'>Black Friday on July</h5>
                    <h2 className='uptoTitle'>Up to 50% off</h2>
                    <h3 className='hundredTitle'>Hundreds of styles available</h3>
                    <button
                    className='shopBtn'
                    onClick={shopNow}

                    >
                        Shop Now
                    </button>
                    <div className="imageBack">

                    </div>
                </div>

            </div>




        </div>
    );
};

export default BackgroundImage;