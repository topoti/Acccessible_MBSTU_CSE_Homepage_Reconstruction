import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SubmenuItems from "./SubmenuItems";
import logo from "../../../images/MBSTU_Logo.png";

// Dropdown Sub-menu items

const menuItems = [
  {
    title: "Program",
    submenu: [
      {
        title: "Undergraduate",
      },
      {
        title: "Graduate",
      },
      {
        title: "Professional",
      },
      {
        title: "Others",
      },
    ],
  },
  {
    title: "Admission",
    submenu: [
      {
        title: "Undergraduate",
      },
      {
        title: "Graduate",
      },
    ],
  },
  {
    title: "Curriculum",
    submenu: [
      {
        title: "Undergraduate",
      },
      {
        title: "Graduate",
      },
    ],
  },
];

const Navigationbar = () => {
  return (
    <Navbar expand="lg" className="nav-link main-nav-link py-0 pt-lg-2">
      <Container className="bgcolor" fluid>
        <img
          width="70px"
          className="logo"
          style={{ paddingLeft: "15px" }}
          src={logo}
          alt="MBSTU logo"
        />
        <h1 className="mbl-menu-dept-name">
          <span className="mbl-menu-dept-name-576">
            Computer Science{" "}
            <span style={{ textTransform: "lowercase" }}>and</span> Enigneering,
            MBSTU
          </span>
          <span className="mbl-menu-dept-name-less">CSE,MBSTU</span>
        </h1>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="align-items-lg-center align-items-left mx-auto"
            navbarScroll
          >
            {/* Home */}
            <Nav.Link
              className="text-white px-lg-0 ps-1 ms-3 mx-lg-2 navmenu"
            >
              Home
            </Nav.Link>

            {/* About */}
            <NavDropdown
              title={
                <span className="navmenu" style={{ padding: "9px 0" }}>
                  About
                </span>
              }
            >
              <NavDropdown.Item href="#action3">
                Message from Department
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Message from Chairman
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                History of CSE, MBSTU
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Why CSE, MBSTU?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Our Mission and Vision
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Achievements</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Facilities</NavDropdown.Item>
            </NavDropdown>

            {/* Academic */}
            <NavDropdown
              title={
                <span className="navmenu" style={{ padding: "9px 0" }}>
                  Academic
                </span>
              }
            >
              {/* Program + admission + curriculum */}
              <nav>
                <ul className="menus">
                  {menuItems.map((menu, index) => {
                    return <SubmenuItems items={menu} key={index} />;
                  })}
                </ul>
              </nav>

              <NavDropdown.Item href="#action5">Calender</NavDropdown.Item>
            </NavDropdown>

            {/* People */}
            <NavDropdown
              title={
                <span className="navmenu" style={{ padding: "9px 0" }}>
                  People
                </span>
              }
            >
              <NavDropdown.Item href="#action3">Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Student</NavDropdown.Item>
            </NavDropdown>

            {/* Research */}
            <NavDropdown
              title={
                <span className="navmenu" style={{ padding: "9px 0" }}>
                  Research
                </span>
              }
            >
              <NavDropdown.Item href="#action3">Publication</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Project</NavDropdown.Item>
            </NavDropdown>

            {/* Article */}
            <Nav.Link
              href="#"
              className="text-white px-lg-0 ps-1 ms-3 mx-lg-2 navmenu"
            >
              Article
            </Nav.Link>

            {/* Announcement */}
            <NavDropdown
              title={
                <span className="navmenu" style={{ padding: "9px 0" }}>
                  Announcement
                </span>
              }
            >
              <NavDropdown.Item href="#action3">News</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Notice</NavDropdown.Item>
            </NavDropdown>

            {/* Alumni */}
            <Nav.Link
              href="#"
              className="text-white px-lg-0 ps-1 ms-3 mx-lg-2 navmenu"
            >
              Alumni
            </Nav.Link>

            {/* Contact */}
            <Nav.Link
              href="#"
              className="text-white px-lg-0 ps-1 ms-3 mx-lg-2 navmenu"
            >
              Contact
            </Nav.Link>

            {/* M.Sc Admission */}
            <Nav.Link
              href="#"
              className="px-lg-0 ps-1 ms-3 mx-lg-2 navmenu"
              style={{ color: "#F4F800" }}
            >
              <span>M.Sc Admission</span>
              <span className="ms-1">&#42;</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
