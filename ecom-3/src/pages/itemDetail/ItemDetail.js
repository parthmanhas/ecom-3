import React, { useState } from "react";

import Carousel_1 from "../../assets/carousel_1.png";
import Oil_1 from '../../assets/oil_1.jpg';
import Oil_2 from '../../assets/oil_2.jpg';
import Oil_3 from '../../assets/oil_3.jpg';
import Oil_4 from '../../assets/oil_4.jpg';
import Oil_5 from '../../assets/oil_5.jpg';
import Oil_6 from '../../assets/oil_6.jpg';

import "./ItemDetail.css";

const ItemDetail = () => {

  const [activeImage, setActiveImage] = useState(0);

  const itemImages = [Oil_1, Oil_2, Oil_3, Oil_4, Oil_5, Oil_6];

  return (
    <div className="container-fluid d-flex flex-row">
      <div className="w-50 d-flex flex-row align-items-center">
        <div className="product-detail-side-image-container">
          <img className="product-detail-side-image" src={itemImages[0]} onClick={() => setActiveImage(0)} />
          <img className="product-detail-side-image" src={itemImages[1]} onClick={() => setActiveImage(1)}/>
          <img className="product-detail-side-image" src={itemImages[2]} onClick={() => setActiveImage(2)}/>
          <img className="product-detail-side-image" src={itemImages[3]} onClick={() => setActiveImage(3)}/>
        </div>
        <div>
          <img className="product-image" src={itemImages[activeImage]} />
        </div>
      </div>
      <div className="w-50 d-flex flex-column p-3">
        <h2>Oil Brand Name</h2>
        <p>Oil Product Description</p>
        <h2>Product Price</h2>
        <p>inclusive of all taxes</p>
        <h2>Select Qty</h2>
        <input className="w-50" placeholder="Enter Quantity" />
        <div className="d-flex w-50 justify-content-between flex-row pt-2">
          <button className="btn btn-primary product-detail-buttons">
            Add To Cart
          </button>
          <button className="btn btn-primary product-detail-buttons">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
