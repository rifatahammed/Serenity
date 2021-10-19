import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
const Menu = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">SERENITY</Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/faq">
                FAQ
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                {user?.email ? <h6>Signed in as</h6> : <h3> </h3>}

                <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Menu;
