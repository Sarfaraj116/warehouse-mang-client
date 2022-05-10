import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='carosol-container'>
            <Carousel className='container'>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Come To Fulfill Your Dream</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/ekgUjyWe1Yc/maxresdefault.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Now or Never</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: '600px'}}
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/WIVsziiUPnU/maxresdefault.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Gain your Confidence Again</h3>
                    <p> </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;