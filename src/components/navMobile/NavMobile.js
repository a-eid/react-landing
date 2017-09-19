import React from "react";
import "./NavMobile.css";

export default ({ active }) => {
  let classes = ["nav__mobile"]
  active && classes.push("nav__mobile--active") 
  console.log(classes.join(" "))
  return (

    <div className={ classes.join(" ") }>
      <ul>
        <li><a onClick={e => e.preventDefault() } href="">About</a></li>
        <li><a onClick={e => e.preventDefault() } href="">Developers</a></li>
        <li><a onClick={e => e.preventDefault() } href="">Pricing</a></li>
      </ul>
    </div>

  ) 
};
