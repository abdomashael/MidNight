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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../static/logo.svg";
import cssClasses from "./navbar.module.css";
import "./navbar.css";

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
        <img id="logo" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={"ml-auto mr-3 "}>
          <Nav.Link active href="#home">
            الرئيسية
          </Nav.Link>
          <Nav.Link href="#link">مسلسلات وبرامج</Nav.Link>
          <Nav.Link href="#link1">أفلام</Nav.Link>
          <Nav.Link href="#link2">تصفح</Nav.Link>
          <Nav.Link href="#link3">مباشر</Nav.Link>
        </Nav>

        <Nav.Link href="#link2">
          <FontAwesomeIcon icon={faSearch} inverse />
        </Nav.Link>

        <Nav.Link  href="#link2">
          الدخول
        </Nav.Link>
        <Nav.Link id="kids" href="#link2">
          جونيورز
        </Nav.Link>

        <Nav.Link id="btn" className={cssClasses.button + " pl-4 pr-4 ml-4"}>
          <span className="pl-2 pr-2">VIP جرب شاهد</span>
        </Nav.Link>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default CustomNavbar;
