import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Accomudation2/Accomudation2.jpg';
import '/home/hannan/Code/ReactJs/five2/src/Accomudation2/Accomudation2.css'

export default class Accomudation2 extends Component {
  render() {
    return (
      <div>
         <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">The Woodhouse</div>
        </div>
      </div>
    )
  }
}
