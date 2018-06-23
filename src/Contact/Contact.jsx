import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Contact/headerContact.jpg';
import '/home/hannan/Code/ReactJs/five2/src/Contact/Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">Contact</div>
        </div>
      </div>
    )
  }
}
