import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Catalogue.css";

const Catalogue = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // products array input
  const products = ['Product 1','Product 2', 'Product 3','Product 4','Product 5','Product 6','Product 7','Product 8', 'Product 9'];

  const swiperSlideCount = Math.ceil(products.length / 4);

  function getProducts(start, end) {
    let content = [];
    for(let i = start; i < end; i++) {
      content.push(<div className="col">{products[i]}</div>);
    }
    return content;
  }

  function getProductsInSwiper() {
    let content = [];
    for(let i = 0, count = 0; i < swiperSlideCount; i++, count += 4) {
      content.push(<SwiperSlide>
        <div className="container">
          <div className="row row-cols-2">
            {getProducts(count, count + 4)}
          </div>
        </div>
      </SwiperSlide>)
    }
    return content;
  }

  
  return (
    <div className="catalogue">
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
        {getProductsInSwiper()}
      </Swiper>
      <div className="container d-flex flex-column align-items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ligula dolor, molestie eu dictum vel, pharetra non lorem. Nulla
          facilisi. Nullam magna lacus, convallis quis bibendum accumsan,
          efficitur non felis. Nulla finibus nunc vel porttitor accumsan. Duis
          scelerisque lacinia dapibus. Nulla viverra, nibh non varius aliquet,
          ante nulla cursus nulla, eu mollis quam sapien eu mauris. Praesent
          ultricies iaculis augue eu placerat. Etiam in gravida enim, ac
          porttitor sapien. Aliquam condimentum at nunc fermentum posuere. Morbi
          vulputate condimentum felis, eu vulputate eros vestibulum a. Donec
          varius id mi eu pretium. Donec vel ante non odio feugiat luctus eu
          venenatis nisi. Sed eu elementum libero, in euismod elit.{" "}
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Shop
        </button>
      </div>
    </div>
  );
};



export default Catalogue;
