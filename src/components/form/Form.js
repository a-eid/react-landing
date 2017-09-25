import React , {Component} from "react"

import "./Form.css"

export default class Form extends Component {
  render(){

    return(
      <div className="form__container">
        <div className="form__card">

          <label htmlFor="" className="card__label">
            <i className="fa fa-info-circle card__icon-left" aria-hidden="true"></i>
            Project Title
          </label>
          <input className="card__input" placeholder="project title" type="text"/>
          <i className="fa fa-chevron-circle-down card__icon-right" aria-hidden="true"></i>

        </div>

        <div className="form__card form__card--description">
          <label htmlFor="" className="card__label">
            <i className="fa fa-info-circle card__icon-left" aria-hidden="true"></i>
            Description
          </label>
          <textarea className="card__input" placeholder="TODO" />
          <i className="fa fa-chevron-circle-down card__icon-right" aria-hidden="true"></i>
        </div>

        <div className="form__card">
          <label htmlFor="" className="card__label">
            <i className="fa fa-info-circle card__icon-left" aria-hidden="true"></i>
            Budget
          </label>
          <div>
            <input type="radio" id="pay-by-hour" name="budget" />
            <label htmlFor="pay-by-hour">Pay By Hour</label>

            <input type="radio" id="fixed-price" name="budget" />
            <label htmlFor="fixed-price">Fixed Price</label>
          </div>
          <i className="fa fa-chevron-circle-down card__icon-right" aria-hidden="true"></i>
        </div>

        <div className="form__card">

        <label htmlFor="" className="card__label">
            <i className="fa fa-info-circle card__icon-left" aria-hidden="true"></i>
            upload files
          </label>
          <input className="card__input" type="file" multiple />
          <i className="fa fa-chevron-circle-down card__icon-right" aria-hidden="true"></i>

        </div>
        <div className="form__card  cdata">

          <label htmlFor="" className="card__label">
              <i className="fa fa-info-circle card__icon-left" aria-hidden="true"></i>
             Contact Data
          </label>

          <div>
            <input className="card__input card__input--block" placeholder="Full Name" type="text"/>
            <input className="card__input card__input--block" placeholder="Company Name" type="text"/>
            <input className="card__input card__input--block" placeholder="Company Address" type="text"/>
          </div>

          <i className="fa fa-chevron-circle-down card__icon-right" aria-hidden="true"></i>
          </div>

      </div>
    )
  }
}