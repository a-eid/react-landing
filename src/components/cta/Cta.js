import React, { Component } from "react";
import "./Cta.css";

export default class extends Component {
  state = {};

  render() {
    return (
      <div className="cta__container">
        <div className="cta__card">
          <h3 className="cta__card--header">
            Lorem Ipsum
          </h3>
          <p className="cta__card--content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio iusto voluptas velit adipisci deleniti dolor eligendi et, a deserunt ducimus in doloremque voluptatibus consequuntur ut laudantium error dolorem possimus.</p>
          <button className="cta__card--button btn">START NOW</button>
        </div>
      </div>
    );
  }
}
