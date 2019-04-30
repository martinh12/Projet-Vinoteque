import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="Header container">
                <div className="burger col-4">
                    <Navbar color="faded" light>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink exact to="/" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}} >Accueil</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contactform" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

                <div className="main-title col-4">
                    <NavLink exact to="/" ><h1>JeBoisQuoi.com</h1></NavLink>
                </div>

                <div className="log-admin col-4">
                    <img className="logoAdmin" src="logoadmin.png" alt="logo admin"/> <NavLink to="/adminPage" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}} >Log in </NavLink>
                </div>

            </div>

        );
    }
}
