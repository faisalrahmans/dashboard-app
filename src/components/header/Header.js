import React from "react";
import './Header.scss';
// import { ReactComponent as Logo } from '../../assets/logo.png';
import LogoSmall from "../../assets/logo-small.png";
import Logo from "../../assets/logo.png";
import Profile from '../../assets/Profile/Profile.png';
import Logout from '../../assets/logout/logout.png';
// import { AiOutlineUser } from "react-icons/ai";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";

const Header = () => {
  return (
    <Container>
      <Row className="header-content">
        <Col>
          <Row className="logo-section">
            <Col><img src={Logo} className="logo" /></Col>
            <Col className="poweredby">powered by</Col>
            <Col className="navbar"><img src={LogoSmall} className="small-logo" /></Col>
          </Row>
        </Col>
        <Col>
          <Row className="profile-section">
            <Col>
              <Row className="username">Username</Row>
              <Row className="company">Company Name</Row>
            </Col>
            <Col><img src={Profile} /></Col>
            <Col className="logout-icon"><img src={Logout} /></Col>
          </Row>
        </Col>
      </Row>
      {/* <NavbarBrand className="navbar" href="/">
            <img src={Logo} className="logo" />
          </NavbarBrand>
          <NavbarBrand className="poweredby" >powered by </NavbarBrand>
          <NavbarBrand className="navbar" href="/">
            <img src={LogoSmall} className="small-logo" />
          </NavbarBrand> */}
    </Container>

  );
};

export default Header;