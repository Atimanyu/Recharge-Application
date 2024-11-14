import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true
  };
  return (
    <div className="carousel-container">
      <Slider className="carousel" {...settings}>
        <div>
          <img src="Carousel-images/Desk-Vi-GAmes-New.webp" alt="" />
        </div>
        <div>
          <img
            src="Carousel-images/get unlimited talktime.png"
            style={{ borderRadius: "25px" }}
            alt=""
          />
        </div>
        <div>
          <img src="Carousel-images/kota-factory-on-netflix-desk.webp" alt="" />
        </div>
        <div>
          <img src="Carousel-images/mirzapur-on-amazon-desk.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
