import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Header = ({}) => {
  return (
    <Navbar className="bg-dark bg-gradient" variant="dark">
      <Container>
        <Navbar.Brand>Todo-List</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
