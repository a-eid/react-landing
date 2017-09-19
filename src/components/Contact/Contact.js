import React , {Component} from "react"

import "./Contact.css"


export default class Contact extends Component{
  state = {

  }

  render(){
    return (
      <div className="contact__container">
        <div className="contact">
          <h3 className="contact__header">Looking For Work?</h3>
          <p className="contact__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ab aliquam officia impedit error alias, quibusdam iste eaque. Eius dolor assumenda iste, aspernatur aperiam voluptatibus? Consequuntur corporis neque hic perspiciatis.</p>
          <button className="btn contact__button collision">get in touch</button>
        </div>
      </div>
    )
  }
}