import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function NavBarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/vouchers")}
        >
          Client-Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/vouchers")}
            >
              Vouchers
            </Nav.Link>
            <Nav.Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/clients")}
            >
              Clients
            </Nav.Link>
            <Nav.Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/transactions")}
            >
              Transactions
            </Nav.Link>
            <Nav.Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/attendants")}
            >
              Attendant
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Navbar.Text className="d-lg-none">
              <Nav.Link
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/profile")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Logout
              </Nav.Link>
            </Navbar.Text>
            <Dropdown align="end" className="d-none d-lg-flex">
              <Dropdown.Toggle
                id="dropdown-profile"
                style={{ background: "none", border: "none" }}
              >
                <AccountCircleRoundedIcon fontSize="large" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/login")}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
