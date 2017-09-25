import React from "react"
import {Link} from "react-router-dom";
import "./Nav.css"



export default () => (
<div className="nav">
  <ul>
    <li>Reactjs</li>
    <li>Developers</li>
    <li>Pricing</li>
  </ul>
  <button className="btn nav__submit">
    <Link to="/contact"> Submit Project </Link>
  </button>
</div>
)