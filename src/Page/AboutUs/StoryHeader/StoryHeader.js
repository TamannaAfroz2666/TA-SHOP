import React from 'react';
import './StoryHeader.css';

const StoryHeader = () => {
    return (
        <div className='storyHeader'>
            <div className='helpHeader'>
                <h5 className='supportCls'>About us</h5>
                <h1 className='title'>Our story</h1>
                <div className="hr-sec">
                    <hr className='hrHelp' />
                </div>
            </div>

        </div>
    );
};

export default StoryHeader;