import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Testimonial/headerTestimonial.jpg'

export default class Testimonial extends Component {
  render() {
    return (
      <div>
         <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">Testimonial</div>
        </div>
      </div>
    )
  }
}
