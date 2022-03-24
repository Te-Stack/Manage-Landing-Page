import { Component } from "react";
import styles from "./carousel.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class Carousels extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <h1 className="text-lg text-center xl:text-3xl font-bold"> What they've said </h1>
          <Slider {...settings}>
            <div>
              <h3 className="text-lg xl:text-2xl font-bold">Anisha Li</h3>
            </div>

            <div>
                <h3 className="text-lg xl:text-2xl font-bold">Ali Bravo</h3>
            </div>

            <div>
              <h3 className="text-lg xl:text-2xl font-bold">Richard Watts</h3>
            </div>
          </Slider>
        </div>
      );
    }
}