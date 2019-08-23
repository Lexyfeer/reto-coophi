import React, { Component, Fragment } from "react";
import Logo from '../assets/images/logo.svg';
import { NavLink, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import AllPost from '../components/AllPost'
import PostForm from '../components/PostForm';



export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <img className="App-logo-image" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                  <NavLink className="navMenuLink" exact to="/">
                    <h6>Notas</h6>
                  </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" exact to="/PostForm">
                  <h6>Crear Nueva Nota</h6>
                </NavLink>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={AllPost} />
        <Route path="/PostForm" component={PostForm} />

      </Fragment>
    );
  }
}
