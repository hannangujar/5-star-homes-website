import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Accomudation1/Accomudation1.jpg';
import '/home/hannan/Code/ReactJs/five2/src/Accomudation1/Accomudation.css'

export default class Accomudation1 extends Component {
  render() {
    return (
      <div>
          <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">The Attic Loft</div>
        </div>
      </div>
    )
  }
}
