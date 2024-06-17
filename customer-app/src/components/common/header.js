import { Stack, TextField } from "@mui/material";
import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header class="header">
      <Stack
        direction="row"
        sx={{ height: "100%", paddingX: "30px" }}
        justifyContent="space-between"
      >
        <Stack sx={{ padding: "10px" }}>
          <img src="./images/pngegg.png" height="100%" />
        </Stack>
        <Stack sx={{ padding: "10px", justifyContent: "center" }}>
          <Navbar>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Nav.Link href="#home">Service</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
            </Nav>
          </Navbar>
        </Stack>
      </Stack>
    </header>
  );
}

export default Header;
