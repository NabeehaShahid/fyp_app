import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './LeftMain.css'
import icon1 from './card-icon-1.svg'
import CardTop from './CardTop';
import CardAnalytics from '../CardAnalytics';

const LeftMain = () => {
  return (
    <div>
      <Row>
        <Col sm="3">
          <CardTop
            icon={icon1} percentage='+0.25' price='32,000.00' name='Bitcoin' credit='.2576' short='BTC'
          />
        </Col>
        <Col sm="3">
          <CardTop
            icon={icon1} percentage='+0.25' price='32,000.00' name='Bitcoin' credit='.2576' short='BTC'
          />
        </Col>
        <Col sm="3">
          <CardTop
            icon={icon1} percentage='+0.25' price='32,000.00' name='Bitcoin' credit='.2576' short='BTC'
          />
        </Col>
        <Col sm="3">
          <CardTop
            icon={icon1} percentage='+0.25' price='32,000.00' name='Bitcoin' credit='.2576' short='BTC'
          />
        </Col>
      </Row>
      <CardAnalytics className='m-3' />
      
    </div>
  );
}

export default LeftMain;
