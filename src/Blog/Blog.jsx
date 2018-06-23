import React, { Component } from 'react';
import headerImage from '/home/hannan/Code/ReactJs/five2/src/Blog/headerBlog.jpg';
import '/home/hannan/Code/ReactJs/five2/src/Blog/Blog.css';

export default class Blog extends Component {
  render() {
    return (
      <div>
         <div id="header-image" >
          <img src={headerImage} alt="This is Header" />
          <div id="centered">Blog</div>
        </div>
      </div>
    )
  }
}
