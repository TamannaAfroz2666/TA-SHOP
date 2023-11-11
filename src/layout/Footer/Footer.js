import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerHead">
                <div className="footerContainer">
                    <div className="footerContents">
                        <div className="shopContent">
                            <p className='footerName'>TA</p>
                            <p className='footerSort'>shop</p>
                        </div>
                        <div className="links_contentFooter">
                            <h3 className='footerLinkTitle'>links</h3>
                            <ul className='footerUl'>
                                <li>
                                    <Link to='ta-shop/story' className='linkFooterTitle'>Story</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/contact' className='linkFooterTitle'>Contact</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/my-accounts/order' className='linkFooterTitle'>truck order</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/help' className='linkFooterTitle'>help</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="categoryFooter">
                            <h3 className='footerCateTitle'>categories</h3>
                            <ul className='footerUlCate'>
                                <li>
                                    <Link to='ta-shop/product-category/bedroom' className='cateFooterTitle'>bedroom(6)</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/product-category/decor' className='cateFooterTitle'>decor(9)</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/my-accounts/product-category/living-room' className='cateFooterTitle'>living room (8)</Link>
                                </li>
                                <li>
                                    <Link to='ta-shop/product-category/office' className='cateFooterTitle'>office(10)</Link>
                                </li>
                            </ul>

                        </div>
                        <div className="subscribeFooter">
                        <h3 className='footerSubsTitle'>subscribe</h3>
                        <div className="messageFooter">
                            <form action="">
                            <input type="email" className='footerInput' value='' placeholder='your email address' />
                            <button className='subscribeBtn'>subscribe</button>
                            </form>
                        </div>
                        

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;