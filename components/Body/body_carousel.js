import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card} from "react-bootstrap";

export default class BodyCarousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    let urlImage = [
      "a1_bedinner.png",
      "a1_elementary.png",
      "a2.png",
      "b1.png",
      "b2.gif",
    ]
    return (
      <div className="slide">
        <Slider {...settings}>
          {urlImage.map(el => {
            return (
              <Card.Img  src={el}/>
            )
          })}
        </Slider>
      </div>
    );
  }
}
