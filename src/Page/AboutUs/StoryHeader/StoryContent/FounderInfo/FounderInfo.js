import React from 'react';
import './FounderInfo.css'
import FounderTitle from './FounderTitle/FounderTitle';

const FounderInfo = () => {
    return (
        <div className='founderInfo'>
            <div className="info-bg">
                <div className="hrBg">
                    <hr className='hrBgTi1' />
                </div>
                <h1 className='needHelpFounder'>Simplicity carried to an extreme becomes elegance</h1>

            </div>
            <div className="founderContent">
                <div className="founderTitleHead">
                    <FounderTitle/>
                </div>
                <div className="founderSection">
                    <div className="infoSection">
                        <h3 className='aboutFounder'>About the founder</h3>
                        <div className="hrFounder">
                            <hr className='hrFounderTi'/>
                        </div>
                        <p className='founderDes'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quaerat, itaque soluta officiis nostrum voluptates cupiditate pariatur! Sit similique, quam veritatis amet totam ullam porro quaerat voluptatum, ducimus quisquam itaque.
                        </p>
                        <p className='founderDes'>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.</p>

                    </div>
                    <div className="imgSection">

                    </div>


                </div>
            </div>

        </div>
    );
};

export default FounderInfo;