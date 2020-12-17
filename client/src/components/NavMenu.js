import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

export class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({

         isOpen: !this.state.isOpen
            
        });
    }

    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
                <div>
                <Container>
                <Navbar color="inverse" light expand="md">
                <NavbarBrand tag={Link} to="/"><img src={logo} className="logo" alt="" /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <NavLink  tag={Link} to="/" onClick={this.closeNavbar} > Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  tag={Link} to="/about" onClick={this.closeNavbar} >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/projects" onClick={this.closeNavbar} >Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  tag={Link} to="/contact" onClick={this.closeNavbar} >Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
           
            </Container>
           </div>
        );
    }
}

