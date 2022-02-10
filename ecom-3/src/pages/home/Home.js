import React from "react";
import { connect } from "react-redux";
import Carousel from "../../component/carousel/Carousel";

const Home = (props) => {

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {this.props.items.map(item => {
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
              </div>
              <div className="card-content">
                <p>{item.desc}</p>
                <p><b>Price: Rs.{item.price}</b></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    
  )

    
};


const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Home);
