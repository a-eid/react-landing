import React from "react";
import "./NavMobile.css";

export default ({ active , close }) => {
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
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  ) 
};
