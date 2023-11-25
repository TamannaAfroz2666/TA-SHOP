import React from 'react';
import './StoryContent.css';

const StoryContent = () => {
    return (
        <div className='storyContent'>
            <div className="bg-story"> 
            </div>
            <div className="team-content">
                <div className="teamTitle">
                    <h5 className='aboutUs-Little'>About us</h5>
                    <h1 className='title'>Our team is what we value the most</h1>
                </div>
                <div className="teamDes">
                    <h3 className='title'>With great people, modern and cool products emerge.</h3>
                    <p className='des-story1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. Nulla varius dolor ac eros posuere, nec interdum justo condimentum. Phasellus lacinia sit amet tellus at pulvinar. Maecenas faucibus porta quam. 
                    </p>
                    <p className='des-story2'>
                    Ut in lorem ullamcorper velit facilisis pellentesque. In tincidunt metus eget arcu congue, ac aliquam velit ultricies. Aliquam posuere eu arcu et elementum. Donec pulvinar eget orci et pellentesque. Aenean at ultricies quam. Nunc feugiat sapien quis pharetra tincidunt. Etiam a viverra nulla. Pellentesque consectetur libero est, sed ullamcorper diam convallis ac. Praesent a convallis ante. Suspendisse potenti. Sed sed cursus erat, et auctor metus.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default StoryContent;