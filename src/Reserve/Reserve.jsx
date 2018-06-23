import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Reserve/headerReserve.jpg';
import '/home/hannan/Code/ReactJs/five2/src/Reserve/Reserve.css'
export default class Reserve extends Component {
  render() {
    return (
      <div>
        <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">Reserve</div>
        </div>
      </div>
    )
  }
}
