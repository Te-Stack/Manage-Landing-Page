import { Component } from "react";
import styles from "./carousel.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../button/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';




export default class Carousels extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
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
        <div className={styles.carousel}>
          <AnimationOnScroll initiallyVisible={true} delay={2000} animateIn="animate__wobble">
            <h1 className="text-2xl text-center xl:text-3xl font-bold"> What they've said </h1>
          </AnimationOnScroll>
          <Slider {...settings}>
            <div className={styles.carouselCard}>
                <img src="/images/avatar-anisha.png" />
              <h3 className="text-lg xl:text-xl font-bold text-center">Anisha Li</h3>
              <p>"Manage has Supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
            </div>

            <div  className={styles.carouselCard}>
                <img src="/images/avatar-ali.png" />
                <h3 className="text-lg xl:text-xl font-bold text-center">Ali Bravo</h3>
                <p>"We have been able to cancel so many other subscriptions since using Manage. There is no more cross channel confusion and everyone is much focused."</p>
            </div>

            <div  className={styles.carouselCard}>
                <img src="/images/avatar-richard.png" />
              <h3 className="text-lg xl:text-xl font-bold text-center">Richard Watts</h3>
              <p>"Manage allows us to provide structure and provide structure and process. it keeps us organized and focused. i can't stop recommending them to everyone I talk to!"</p>
            </div>

            <div  className={styles.carouselCard}>
                <img src="/images/avatar-shanai.png" alt="me" />
              <h3 className="text-lg xl:text-xl font-bold text-center">Shanai Gough</h3>
              <p>"Their software allows us to track, manage and collaborate on our projects from anywhere. it keeps the whole team in-sync without being intrusive"</p>
            </div>
          </Slider>

          <Button text={"Get Started"}  />
        </div>
      );
    }
}