import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen_tres from "../../img/Slidebar/imagen_tres.jpg";

export const Slidebar = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    
    <div className="w-11/12 mb-3 m-auto">
      <Slider {...settings}>
        <div>
          <img src={imagen_tres} alt="3" className="rounded-xl m-auto focus:outline-none w-full img-tres" />
        </div>
        <div>
          <img src={imagen_tres} alt="3" className="rounded-xl m-auto focus:outline-none w-full img-tres" />
        </div>
        <div>
          <img src={imagen_tres} alt="3" className="rounded-xl m-auto focus:outline-none w-full img-tres" />
        </div>
      </Slider>
    </div>
  );
};




