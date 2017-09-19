import React, { Component } from "react";

import Header from "../header/Header";
import Description from "../description/Description";
import Form from "../form/Form.js";
import Services from "../services/Services"
import Contact from "../Contact/Contact.js"
import Footer from "../footer/Footer.js"


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Form />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
