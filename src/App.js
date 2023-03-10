import './App.css';
import SideBar from './Sidebar';
import MenuBar from './MenuBar';
import { Row, Col } from 'react-bootstrap';
import "@fontsource/poppins";
import MainContent from './MainContent';

function App() {
  return (
      <Row className="h-100 g-0">
        <Col md={2} className="p-0">
          <SideBar />
        </Col>
        <Col className="h-100 Myheight">
          <MenuBar />
          <MainContent />
        </Col>
      </Row>
  );
}

export default App;
