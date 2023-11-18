import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const bb = (props) => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return (
        <div>
            <Carousel>
            {
                items.map( (item, i) => <p key={i} item={item} /> )
            }
        </Carousel>
            
        </div>
    );
};

export default bb;