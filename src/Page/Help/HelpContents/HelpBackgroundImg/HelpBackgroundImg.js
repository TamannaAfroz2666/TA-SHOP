import React from 'react';
import './HelpBackgroundImg.css';
import { Link } from 'react-router-dom';


const HelpBackgroundImg = () => {
    return (
        <div className='helpBgImg'>
            <div className="helpBgSub">
                <div className="hrBg">
                    <hr className='hrBgTi' />
                </div>
                <h1 className='needHelp'>Still need help?</h1>
                <div className="btnHelp">
                    <Link to='help'>
                        <button className='helpBtn-con'>contact us</button>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default HelpBackgroundImg;
