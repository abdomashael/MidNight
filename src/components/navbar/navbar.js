import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
 
} from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../static/logo.svg";
import cssClasses from "./navbar.module.css";
import "./navbar.css";
import Logo from "../../components/logo/logo";
import cx from "classnames";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeClasses, setActive] = useState("nav-link active");

  let location = useLocation();

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Navbar className={cx("fixed-top",scrolled ? cssClasses.dark : cssClasses.transparent)} expand="lg" variant="dark">
      <Navbar.Brand>
        <Link
          className={location.pathname === "/" ? activeClasses : "nav-link"}
          to="/"
        >
          <Logo />
        </Link>      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={"mr-auto"}>
          <Link
            className={location.pathname === "/" ? activeClasses : "nav-link"}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/movies" ? activeClasses : "nav-link"
            }
            to="/movies"
          >
            Movies
          </Link>
          <Link className="nav-link" to="/series">
            Series
          </Link>
          <Link className="nav-link" to="/series">
            Kids
          </Link>
          {/* <Nav.Link href="#link3">مباشر</Nav.Link> */}
        </Nav>

        <Nav.Link className="pb-0" href="#link2">
          <FontAwesomeIcon icon={faSearch} inverse />
        </Nav.Link>
        <Link className="nav-link" to="/auth?type=login">
          Login
        </Link>

        <Link
          to="/auth/type=signup"
          id="btn"
          className={cx(cssClasses.button, "nav-link")}
        >
          Sign up
        </Link>
      </Navbar.Collapse>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    </Navbar>
  );
};

export default CustomNavbar;
