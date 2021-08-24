import React, { useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

const MainNavbar = ({ handleLogout }) => {
  const {
    user: { email },
  } = useAuth();
  console.log({ email });

  let nav = {
    zIndex: 1000,
    height: "4.5vw",
    display: "block",
    position: "fixed",
    width: "100%",
    top: 0,
    // backgroundColor: "transparent",
    backdropFilter: "blur(5px) saturate(65%) contrast(160%)",
  };
  let navscr = {
    zIndex: 1000,
    height: "4.5vw",
    display: "block",
    position: "fixed",
    width: "100%",
    top: 0,
    backgroundColor: "transparent",
    // backdropFilter: "blur(5px) saturate(65%) contrast(160%)",
  };

  let navFont = {
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    lineHeight: 2,
    color: "#fff",
    transition: "all 0.5s ease-in-out",
    fontSize: "1.3vw",
    letterSpacing: "0.09vw",
    fontFamily: "'Gothic A1', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };
  let navMid = {
    lineHeight: 2.5,
    display: "inline-block",
    verticalAlign: "middle",
    textDecoration: "none",
    lineHeight: 2,
    color: "#fff",
    transition: "all 0.5s ease-in-out",
    fontSize: "1.3vw",
    letterSpacing: "0.09vw",
    fontFamily: "'Gothic A1', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  //changing navbar on scrolling
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  //changing navbar on scrolling end

  return (
    <Navbar style={colorChange ? nav : navscr} collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand style={navFont} href="#">
            HOME
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/tour">
              <Navbar.Brand style={navMid}> | </Navbar.Brand>
              <Navbar.Brand href="#" style={navFont}>
                TOUR
              </Navbar.Brand>
            </Link>
            <Navbar.Brand style={navMid}> | </Navbar.Brand>
            <Link to="/merch">
              <Navbar.Brand style={navFont}>MERCH</Navbar.Brand>
            </Link>

            <Navbar.Brand style={navMid}> | </Navbar.Brand>

            <Link to="/chat">
              <Navbar.Brand style={navFont}>CHAT</Navbar.Brand>
            </Link>
            <Navbar.Brand style={navMid}> | </Navbar.Brand>

            <Link to="/contactUs">
              <Navbar.Brand style={navFont}>CONTACT US</Navbar.Brand>
            </Link>
          </Nav>
          <Nav>
            {email ? (
              <Link to="/auth">
                <Navbar.Brand onClick={handleLogout} style={navFont}>
                  LOG OUT
                </Navbar.Brand>
              </Link>
            ) : null}
            {email ? null : (
              <Link to="/auth">
                <Navbar.Brand style={navFont}>SIGN IN</Navbar.Brand>
              </Link>
            )}

            {email === ADMIN ? (
              <Link to="/addItem">
                <Navbar.Brand style={navFont}>ADD ITEM</Navbar.Brand>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
