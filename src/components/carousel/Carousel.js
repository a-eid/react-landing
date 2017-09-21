import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel"

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import "./Carousel.css"

export default class CustomCarousel extends Component {
  render(){
      // <Carousel showArrows={true} onChange={this.onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
    return (
      <Carousel showThumbs={false} showStatus={false} autoPlay={true} showArrows={false}>
        <div>
            <img src="http://via.placeholder.com/350x150" alt="" />
        </div>
        <div>
            <img src="http://via.placeholder.com/350x150" alt="" />
        </div>
        <div>
            <img src="http://via.placeholder.com/350x150" alt="" />
        </div>
      </Carousel>
    )
  }
}
