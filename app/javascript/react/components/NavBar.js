import React from 'react';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = props => {
  return(
  <div>
    <Navbar inverse collapseOnSelect id="nav-bar" fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLinkContainer to="/">
            <img src="/ClearFeRoxLogo.png"/>
          </IndexLinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            <IndexLinkContainer to="/maps">
              <p className="fa fa-map fa-2x"> </p>
            </IndexLinkContainer>
          </NavItem>
          <NavItem eventKey={2}>
            <IndexLinkContainer to="/posts">
              <p className="fa fa-comments fa-2x"> </p>
            </IndexLinkContainer>
          </NavItem>
          <NavItem eventKey={3}>
            <IndexLinkContainer to="/users">
              <p className="fa fa-users fa-2x"> </p>
            </IndexLinkContainer>
          </NavItem>
          <NavItem eventKey={4}>
            <IndexLinkContainer to="/users">
              <p className="fa fa-calendar fa-2x"> </p>
            </IndexLinkContainer>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} >
            <IndexLinkContainer to='/users/:id'>
              <p className="fa fa-user fa-2x"> </p>
            </IndexLinkContainer>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
    {props.children}
    </div>
    </div>
  )
}

export default NavBar;
