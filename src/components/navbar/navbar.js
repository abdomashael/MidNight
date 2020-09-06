import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavLink,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../static/logo.svg";
import cssClasses from "./navbar.module.css";
import "./navbar.css";
import Logo from "../../components/logo/logo";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [classes, setClasses] = useState("fixed-top");

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    const scollClass = scrolled ? cssClasses.dark : cssClasses.transparent;
    setClasses("fixed-top " + scollClass);
  }, [scrolled]);

  return (
    <Navbar className={classes} expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <Logo/>
        {/* <img id="logo" src={"https://f1.pngfuel.com/png/119/663/684/facebook-art-masters-degree-school-logo-licentiate-baccalaureus-bird-owl-png-clip-art.png"} alt="logo" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={"mr-auto"}>
          <Link className="nav-link active" to="/">Home</Link>
          <Link className="nav-link" to="/movies">Movies</Link>
          <Link className="nav-link" to="/series">Series</Link>
          <Link className="nav-link" href="#link2">Kids</Link>
          {/* <Nav.Link href="#link3">مباشر</Nav.Link> */}
        </Nav>

        <Nav.Link href="#link2">
          <FontAwesomeIcon icon={faSearch} inverse />
        </Nav.Link>
        <Nav.Link href="#link2">Login</Nav.Link>
        {/* 
        <Nav.Link id="btn" className={cssClasses.button + " pl-4 pr-4 ml-4"}>
          <span className="pr-2">Sign in</span>
        </Nav.Link> */}

        <Nav.Link id="btn" className={cssClasses.button + " pl-3 pr-3 ml-4"}>
          <span className="pr-2">Sign up</span>
        </Nav.Link>
      </Navbar.Collapse>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    </Navbar>
  );
};

export default CustomNavbar;
