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
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;