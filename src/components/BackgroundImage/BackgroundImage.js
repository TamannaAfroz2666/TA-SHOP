import React from 'react';
import './BackgroundImage.css';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/Image/43370.jpg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const BackgroundImage = () => {
    return (
        <div className='backgroundImage'>
            <h1>gg</h1>
            {/* <Button variant="primary">Primary</Button>{' '} */}
            <button type="button" class="btn btn-primary">Primary</button>
            <div className="carosel">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <image1 text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <image1 text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <image1 text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default BackgroundImage;