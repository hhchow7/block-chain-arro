import React from "react";
import { Navbar, Nav} from "react-bootstrap";

import "./style.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navBar">
        <Navbar.Brand href="/" style={{marginRight:"auto"}}>Arrokoth Venture</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/gen-eth-keypair">
              Generate Ethereum Keypair
            </Nav.Link>
            <Nav.Link href="/smart-contract"> 
              Communicate With Smart Contract
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
