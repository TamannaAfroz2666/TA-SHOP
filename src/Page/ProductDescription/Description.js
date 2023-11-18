import React from 'react';
import './Description.css';
import img1 from '../../assets/Image/des/Des_test3.avif';
import img2 from '../../assets/Image/des/des1.webp';
import img3 from '../../assets/Image/des/des2.webp';



const Description = () => {
    return (
        <div className='description-con'>
            <div className="des-sub-con">
                <p className='title-des'>Get a fresh 'fit for spring with the Free People Love Letter Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard fabric, with a textured floral design throughout, shapes this cami top that has wide straps, a high square neckline, and a fitted bodice that ends at a cropped hem with lettuce-edge trim.</p>
            </div>
            <div className="info-img-con">
                <div className="info-con">
                    <div className="des-content">
                        <div className="desCription">
                            <h3 className='des-ti-sort'>Description</h3>
                            <p className='size'> Model size: S</p>
                            <p className='height'>Model height: 177 cm</p>
                            <p className='color'>Colour: Red</p>
                        </div>
                        <div className="desCription2">
                            <h3 className='des-ti-sort'>Description</h3>
                            <p className='size'> Model size: S</p>
                            <p className='height'>Model height: 177 cm</p>
                            <p className='color'>Colour: Red</p>
                        </div>
                        <div className="desCription2">
                            <h6 className='des-ti-sort'>core</h6>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="info-content">
                        <div className="desCription">
                            <h3 className='des-ti-sort'>Base fabric</h3>
                            <p className='size'>100% polyester</p>
                        </div>
                        <div className="desCription2">
                            <h3 className='des-ti-sort'>Lining</h3>
                            <p className='size'>100% polyester</p>
                        </div>
                        <div className="desCription2">
                            <h3 className='des-ti-sort'>Inner</h3>
                            <p className='size'>100% polyester</p>
                        </div>

                    </div>
                </div>
                <div className="img-con">
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Description;