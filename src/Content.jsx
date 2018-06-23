import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Home from '/home/hannan/Code/ReactJs/five2/src/Home/Home.jsx';
import Accomudation1 from '/home/hannan/Code/ReactJs/five2/src/Accomudation1/Accomudation1.jsx';
import Accomudation2 from '/home/hannan/Code/ReactJs/five2/src/Accomudation2/Accomudation2.jsx';
import Accomudation3 from '/home/hannan/Code/ReactJs/five2/src/Accomudation3/Accomudation3.jsx';
import Testimonial from '/home/hannan/Code/ReactJs/five2/src/Testimonial/Testimonial.jsx';
import Reserve from '/home/hannan/Code/ReactJs/five2/src/Reserve/Reserve.jsx';
import Contact from '/home/hannan/Code/ReactJs/five2/src/Contact/Contact.jsx';
import Blog from  '/home/hannan/Code/ReactJs/five2/src/Blog/Blog.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/accomudation1" component={Accomudation1} />
        <Route exact path="/accomudation2" component={Accomudation2} />
        <Route exact path="/accomudation3" component={Accomudation3} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/reserve" component={Reserve} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    )
  }
}
