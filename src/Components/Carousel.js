import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import ReviewCard from './ReviewCard';

function Carousel (){

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 700
      };

    return(
        <div className="carousel">
          <Slider {...settings}>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu." />
            </div>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu." />
            </div>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu."
                        />
            </div>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu."/>
            </div>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu."/>
            </div>
            <div className="slide">
              <ReviewCard 
                        imageUrl="./Images/testimonial-1.jpg"
                        stars="⭐⭐⭐⭐☆"
                        name="John Doe"
                        designation="Student"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu."/>
            </div>
          </Slider>
        </div>
    )
}

export default Carousel;