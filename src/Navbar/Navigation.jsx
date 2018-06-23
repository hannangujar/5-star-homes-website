import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import '/home/hannan/Code/ReactJs/five2/src/Navbar/Navbar.css'


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { navHeight: 10 };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e = null) {
    this.setState({ navHeight: ReactDOM.findDOMNode(this._navbar).offsetHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    return (
      <div style={{ paddingTop: this.state.navHeight }}>
        <Navbar ref={(e) => this._navbar = e} fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="logo">FiveStarHome</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>

            
            <Nav>
              <NavItem eventKey={1}>
                <a id="nav-elements"><NavLink to="/home" style={{ textDecoration: 'none',color: 'rgb(0, 0, 0)' }} activeStyle={{color: 'red' }}> Home</NavLink></a>
              </NavItem>
              <NavDropdown eventKey={2} title="Accomudation" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}><a id="nav-elements"><NavLink to="/accomudation1" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>The Attic Loft</NavLink></a></MenuItem>
                <MenuItem eventKey={2.2}><a id="nav-elements"><NavLink to="/accomudation2" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>The Woodhouse</NavLink></a></MenuItem>
                <MenuItem eventKey={2.3}><a id="nav-elements"><NavLink to="/accomudation3" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>The Country Annex</NavLink></a></MenuItem>
              </NavDropdown>
              <NavItem eventKey={3}>
                <a id="nav-elements"><NavLink to="/testimonial" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}> Testimonial</NavLink></a>
              </NavItem>
              <NavItem eventKey={4}>
                <a id="nav-elements"><NavLink to="/reserve" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>Reserve</NavLink></a>
              </NavItem>
              <NavItem eventKey={5}>
                <a id="nav-elements"><NavLink to="/contact" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>Contact</NavLink></a>
              </NavItem>
              <NavItem eventKey={6}>
                <a id="nav-elements"><NavLink to="/blog" style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }} activeStyle={{ color: 'red' }}>Blog</NavLink></a>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={7}>
                Follow
      </NavItem>
              <NavItem eventKey={8}>
                Login/SignUp
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    )
  }
}
