import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, ListGroup, Navbar, Row, Table } from 'react-bootstrap';
import './App.css';
import UserList from './components/UserList'



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className='text-center'>Company Name</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
            <Col lg={4}>
              <ListGroup>
                <ListGroup.Item>Dashboard</ListGroup.Item>
                <ListGroup.Item>Accounts</ListGroup.Item>
                <ListGroup.Item>Orders</ListGroup.Item>
                <ListGroup.Item>Products</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <UserList />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

