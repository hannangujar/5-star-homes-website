import React from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navigation extends React.Component {
constructor(props) {
super(props);

this.toggle = this.toggle.bind(this);
this.state = {
isOpen: false
};
}
toggle() {
this.setState({
isOpen: !this.state.isOpen
});
}
render() {
return (
<div>
    <Navbar color="color" light expand="md">
            <NavbarBrand href="/">FiveStartHomes</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto1" navbar>
                <NavItem>
                    <Link to="/">
                        <NavLink>Home</NavLink>
                    </Link>
                </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Accomudation
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                        <Link to="/accomudation1">
                                    <NavLink>Accomudation1</NavLink>
                                        </Link>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <Link to="/accomudation2">
                                    <NavLink>Accomudation2</NavLink>
                                        </Link>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <Link to="/accomudation3">
                                    <NavLink>Accomudation3</NavLink>
                                </Link>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                            </UncontrolledDropdown>
                <NavItem>
                    <Link to="/testimonial">
                        <NavLink>Testimonial</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/reserve">
                <NavLink>Reserve</NavLink>
                    </Link>
                </NavItem>
                
                <Link to="/contact">
                    <NavItem>
                        <NavLink>Contact</NavLink>    
                    </NavItem>
                </Link>
                <NavItem>
                    <Link to="/blog">
                        <NavLink>Blog</NavLink>
                    </Link>
                </NavItem>
                <div id="follow">
                <a>
                <NavItem><NavLink>Follow Us</NavLink></NavItem>
                </a>
                </div>
            </Nav>
            
        </Collapse>
    </Navbar>
    
</div>
);
}
}