import React from 'react';
import './HelpContents.css';
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const HelpContents = () => {
    return (
        <div className='helpContents'>
            <div className="contents">
                <div className="acc-pri">
                    <div className="acc-privacy">
                        <span className='main-fa'><FaUser className='fa-title'/></span>
                        <h4 className='acc-title'>Account Privacy</h4>
                        <p className='acc-des'>Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.</p>
                        <Link className='link-acc' to='/more'>Privacy policy <span className='link-icon-mn'><FaArrowRightLong className='link-icon-sb'/></span></Link>
                    </div>

                </div>
                <div className="support-sp">

                </div>
                <div className="seller-stand">

                </div>
            </div>
            
        </div>
    );
};

export default HelpContents;