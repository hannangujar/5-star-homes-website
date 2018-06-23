import React, { Component } from 'react';
import footer from '/home/hannan/Code/ReactJs/five2/src/footer.jpg' 

export default class Footer extends Component {
  render() {
    return (
      <div>
        <img src={footer} alt="" style={{width:'100%'}}/>
      </div>
    )
  }
}
