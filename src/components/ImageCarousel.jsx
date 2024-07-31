import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '../styles/carousel.css'

import eventImage1 from '../assets/images/eventimage1.jpg';
import eventImage2 from '../assets/images/eventimage2.jpg';
import eventImage3 from '../assets/images/eventimage3.jpg';

const ImageCarousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="image-holder">
                    <img src={eventImage1} alt="Event Image 1" width={450} />
                </div>
                <div className="image-holder">
                    <img src={eventImage2} alt="Event Image 2"width={450} />
                </div>
                <div className="image-holder">
                    <img src={eventImage3} alt="Event Image 3" width={450} />
                </div>
            </Slider>
        </div>
    )
};

export default ImageCarousel;