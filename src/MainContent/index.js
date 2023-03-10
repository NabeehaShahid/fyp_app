import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftMain from '../LeftMain';
import Rightmain from '../Rightmain';

const MainContent = () => {
  return (
    <div className='bg-dark px-5'>
      // ! Remove h-100 here 
        <Row>
          <Col md="8">
            <LeftMain />
          </Col>
          <Col md="4">
           <Rightmain />
          </Col>
        </Row>
    </div>
  );
}

export default MainContent;
