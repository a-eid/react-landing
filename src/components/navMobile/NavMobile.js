import React , { Component } from "react";
import "./NavMobile.css";


export default class NavMobile extends Component {

  componentWillReceiveProps(nextProps){
    // just in case you wanna hook on some styles to the button and the container 
    if(nextProps.active) {
      document.querySelector(".nav__mobile--contain--button").classList.add("active")
    }else{
      document.querySelector(".nav__mobile--contain--button").classList.remove("active")
    }
  }

  render() {
    const {active , close} = this.props 
    let classes = ["nav__mobile"]
    active && classes.push("nav__mobile--active") 
    
    return (
      <div className= { classes.join(" ") } >
      <div className="nav__mobile--contain--top">
        <nav className="nav__mobile--top">
          <span className="close" onClick={ close }>X</span>
          <ul>
            <li><a onClick={e => e.preventDefault() } href="">Developers</a></li>
            <li><a onClick={e => e.preventDefault() } href="">About</a></li>
            <li><a onClick={e => e.preventDefault() } href="">Pricing</a></li>
          </ul>
          <button className="btn nav__mobile--button">SUBMIT PROJECT</button>
        </nav>
      </div>
        
      <div className="nav__mobile--contain--bottom">
          <section className="nav__mobile--bottom">
            <div className="ul__container">
              <ul>
                <li>Contact</li>
                <li>Support</li>
              </ul>
              <ul>
                <li>Terms</li>
                <li>FAQ</li>
              </ul>
            </div>
          </section>
        <div className="nav__mobile--contain--button">
          <div>
            <button className="btn signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )};
}
