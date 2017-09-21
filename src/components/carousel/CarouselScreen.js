import React , {Component} from "react" 
import Carousel from "./Carousel"

import "./CarouselScreen.css"


export default class CarouselScreen extends Component {
  render(){
    return (
      <div className="carousel-screen" >
        <div className="why__container">
          <div className="why"> 
            <h2>Why React Developers</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit, iusto sint accusantium voluptatibus consequuntur dolor at porro. Et aspernatur accusantium distinctio recusandae perspiciatis quod earum, volupta</p>
          </div>
        </div>
        <div className="carousel__contain">
          <div className="carousel__contain--info">

            <div>
              <h2>Lorem, ipsum</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis iure architecto nisi officia iste dolor facere doloremque debitis odit?</p>
            </div>
            <div>
              <h2>Lorem, ipsum</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis iure architecto nisi officia iste dolor facere doloremque debitis odit?</p>
            </div>
            <div>
              <h2>Lorem, ipsum</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis iure architecto nisi officia iste dolor facere doloremque debitis odit?</p>
            </div>

          </div>
          <div className="carousel__contain--carousel">
            <Carousel />
          </div>
        </div>
      </div>
    )
  }
}