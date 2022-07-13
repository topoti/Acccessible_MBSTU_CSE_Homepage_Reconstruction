import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SubmenuItems from "./SubmenuItems";


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
    <Navbar expand="lg" className="nav-link main-nav-link">
      <Container className="bgcolor" fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="align-items-center mx-auto"
            style={{ height: "51px" }}
            navbarScroll
          >
            {/* Home */}
            <Nav.Link
              href="#action1"
              className="text-white me-2 px-0 navmenu"
              style={{ fontWeight: 700 }}
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
              {/* Program */}

              <nav>
                <ul className="menus">
                  {menuItems.map((menu, index) => {
                    return <SubmenuItems items={menu} key={index} />;
                  })}
                </ul>
              </nav>

              {/* <button
                tabIndex="0"
                value="program"
                className="submenu-btn d-flex justify-content-between"
                {...buttonProps}
              >
                <span>Program</span>
                <span>
                  <FontAwesomeIcon
                    style={{ fontSize: "12px" }}
                    aria-label="Click to expend program menu"
                    icon={faAngleRight}
                  />
                </span>
              </button>
              <div
                onClick={() => {
                  open("program");
                }}
                id={isOpen ? "visible-program" : ""}
                role="menu"
                name="menu-program"
              >
                <a
                  className="dropdown-submenu"
                  {...itemProps[0]}
                  href="https://example.om"
                >
                  Undergraduate
                </a>
                <a
                  className="dropdown-submenu"
                  {...itemProps[1]}
                  href="https://example.co"
                >
                  Graduate
                </a>
                <a
                  className="dropdown-submenu"
                  {...itemProps[2]}
                  href="https://example.om"
                >
                  Professional
                </a>
                <a
                  className="dropdown-submenu"
                  {...itemProps[3]}
                  href="https://emple.com"
                >
                  Others
                </a>
              </div> */}

              {/* Admission */}
              {/* <button
                tabIndex="1"
                className=".dropdown-submenu d-flex justify-content-between"
                {...buttonProps}
              >
                <span>Admission</span>
                <span>
                  <FontAwesomeIcon
                    style={{ fontSize: "12px" }}
                    aria-label="Click to expend admission menu"
                    icon={faAngleRight}
                  />
                </span>
              </button>
              <div
                id={isOpen ? "visible-admission" : ""}
                role="menu"
                name="menu-admission"
              >
                <a
                  className="dropdown-submenu"
                  {...itemProps[0]}
                  href="https://exale.com"
                >
                  Undergraduate
                </a>
                <a
                  className="dropdown-submenu"
                  {...itemProps[1]}
                  href="https://ample.com"
                >
                  Graduate
                </a>
              </div> */}

              {/* Curriculum */}

              {/* <button
                tabIndex="2"
                className="submenu-btn d-flex justify-content-between"
                {...buttonProps}
              >
                <span>Curriculum</span>
                <span>
                  <FontAwesomeIcon
                    style={{ fontSize: "12px" }}
                    aria-label="Click to expend admission menu"
                    icon={faAngleRight}
                  />
                </span>
              </button>
              <div
                id={isOpen ? "visible-curriculum" : ""}
                role="menu"
                name="menu-curriculum"
              >
                <a
                  className="dropdown-submenu"
                  {...itemProps[0]}
                  href="https://exale.com"
                >
                  Undergraduate
                </a>
                <a
                  className="dropdown-submenu"
                  {...itemProps[1]}
                  href="https://ample.com"
                >
                  Graduate
                </a>
              </div> */}
              {/* <NavDropdown
                title={<span style={{ padding: "1px 12px" }}>Curriculum</span>}
              >
                <NavDropdown.Item href="#action3">
                  Undergraduate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Graduate</NavDropdown.Item>
              </NavDropdown>*/}

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
              className="text-white px-0 mx-2 navmenu"
              style={{ fontWeight: 700 }}
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
              className="text-white px-0 mx-2 navmenu"
              style={{ fontWeight: 700 }}
            >
              Alumni
            </Nav.Link>

            {/* Contact */}
            <Nav.Link
              href="#"
              className="text-white px-0 mx-2 navmenu"
              style={{ fontWeight: 700 }}
            >
              Contact
            </Nav.Link>

            {/* M.Sc Admission */}
            <Nav.Link
              href="#"
              className="px-0 mx-2 navmenu"
              style={{ color: "#F4F800", fontWeight: 700 }}
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
