import React, { Component } from "react";

// router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import Header from "../header/Header";
import Description from "../description/Description";
import Cta from "../cta/Cta";
import Services from "../services/Services"
import Contact from "../Contact/Contact.js"
import Footer from "../footer/Footer.js"
import CarouselScreen from "../carousel/CarouselScreen"
import Form from "../form/Form"

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />

            <Route path="/contact" component={Form}/>

            <Route exact path="/" render={ () => (
                <div>
                  <Description />
                  <Cta />
                  <Services />
                  { window.innerWidth > 800 && <CarouselScreen /> }
                </div>
            )}/>

          <Contact />
          <Footer />
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
