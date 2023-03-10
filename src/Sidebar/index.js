import { Nav, NavItem, NavLink } from 'react-bootstrap';
import React from 'react';
import logo from './Logo.svg';
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import icon5 from './icon5.svg'
import icon6 from './icon6.svg'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column  sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <Nav className="flex-column text-light">
        <NavItem className="mx-3">
          <NavLink href="#" className="selected">
          <img src={icon1} alt="Dashboard" className="me-3 d-inline logo" /> Dashboard
          </NavLink>
        </NavItem>
        <NavItem className="mx-3">
          <NavLink href="#">
          <img src={icon2} alt="Sentiment" className="me-3 d-inline logo" /> Sentiment
          </NavLink>
        </NavItem>
        <NavItem className="mx-3">
          <NavLink href="#">
          <img src={icon3} alt="Statistical" className="me-3 d-inline logo" /> Statistical
          </NavLink>
        </NavItem>
        <NavItem className="mx-3">
          <NavLink href="#">
          <img src={icon4} alt="Past Trends" className="me-3 d-inline logo" /> Past Trends
          </NavLink>
        </NavItem>
        <NavItem className="mx-3">
          <NavLink href="#">
          <img src={icon5} alt="News" className="me-3 d-inline logo" /> News
          </NavLink>
        </NavItem>
        <NavItem className="mx-3">
          <NavLink href="#">
          <img src={icon6} alt="Settings" className="me-3 d-inline logo" /> Settings
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Sidebar;
