import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from '/home/hannan/Code/ReactJs/five2/src/Navbar/Navbar.jsx';
import Content from '/home/hannan/Code/ReactJs/five2/src/Content.jsx';
import Footer from '/home/hannan/Code/ReactJs/five2/src/Footer.jsx'

class App extends Component {
render() {
return (

<div className="App">
  <div className="header">
    <header></header>
  </div>
  <Router>
  <div className="router">
        <div className="navigation">
          <nav>
            <Navbar/>
          </nav>
        </div>
        <div className="section">
          <section>
            <Content/>
          </section>
        </div>  
      <div className="body">
        <body>
          <h1>Its Body</h1>
        </body>
      </div>
  </div>
  </Router>
  <div className="footer">
    <footer>
      <Footer />
    </footer>
  </div>
  </div>
);
}
}

export default App;
