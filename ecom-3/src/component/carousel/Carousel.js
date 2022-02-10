import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Carousel.css";

import Carousel_1 from "../../assets/carousel_1.png";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="carousel">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper-small-image" src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-small-image" src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-small-image" src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-small-image" src={Carousel_1} alt="carousel-1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
