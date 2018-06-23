import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Accomudation3/Accomudation3.jpg'
import '/home/hannan/Code/ReactJs/five2/src/Accomudation3/Accomudation3.css'

export default class Accomudation3 extends Component {
  render() {
    return (
      <div>
         <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">The Country Annex</div>
        </div>
      </div>
    )
  }
}
