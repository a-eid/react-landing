import React, { Component } from "react";
import "./Form.css";

export default class extends Component {
  state = {};

  render() {
    return (
      <div className="form__container">
        <div className="form__card">
          <h3 className="form__card--header">
            Lorem Ipsum
          </h3>
          <p className="form__card--content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio iusto voluptas velit adipisci deleniti dolor eligendi et, a deserunt ducimus in doloremque voluptatibus consequuntur ut laudantium error dolorem possimus.</p>
          <button className="form__card--button btn">START NOW</button>
        </div>
      </div>
    );
  }
}
