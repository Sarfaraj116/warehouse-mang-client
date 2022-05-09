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
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
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
                    src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg"
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
                    src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brw/public/field/image/2021/04/surface-laptop-4-amd-2021-hero.jpg"
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