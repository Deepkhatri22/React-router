import React from 'react'
import Slider from 'react-slick'
import CarouselItem from './CarouselItem';

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const images = [card1, card2, card3, card4, card5];
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };

    const renderImages = () => 
        images.map((image, index) => <CarouselItem key={index} image={image} />);
    

    return (
        <div className="flex items-center justify-center">
            <div className="w-full">
                <Slider {...settings}>
                    {renderImages()}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
