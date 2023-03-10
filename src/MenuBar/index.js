import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./MenuBar.css"
import icon1 from './menubar-icon-1.svg'
import icon2 from './menubar-icon-2.svg'

const MenuBar = () => {
  return (
    <div className="menu-bar d-flex justify-content-end py-3">
        <Form.Control className='bg-dark border-0 w-25' type="text" placeholder="Search..." />
        <Button variant="dark" className="menubar-logos-btn ms-4"><img src={icon1} alt="Messages" /></Button>
        <Button variant="dark" className="menubar-logos-btn mx-4"><img src={icon2} alt="Notifications" /></Button>
    </div>
  );
}

export default MenuBar;
