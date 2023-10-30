import { Col, Container, Row } from "react-bootstrap"
import "./Threepair.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function Threepair() {
  return (
    <div style={{ backgroundColor: '#292930' }}>
      <Container>
        <Row style={{ marginLeft: '3.5rem', paddingTop: '5rem', paddingBottom: '3rem' }}>
          <Col xs={3} md={1}>
            <img src="/assets/images/icon (3).png" alt="" className="stockimg" />
          </Col>

          <Col xs={7} md={4}>
            <p className="text">
              We handle the marketing heavy lifting for you
            </p>
          </Col>
        </Row>
        <Row className="cardrow">

          <Col md={4} xs={12} style={{ marginBottom: '2rem' }}>
            <Card className="cardbody">
              <Card.Img variant="top" src="/assets/images/icon.png" className="cardicons" />
              <Card.Body>
                <Card.Title>Complete Market Report</Card.Title>
                <Card.Text>
                  In-depth industry analysis, market presence assesment, competition analysis etc..
                </Card.Text>
                <Button variant="outline-warning" className="cardbutton"><span>Read More </span>
                  <ExpandCircleDownIcon style={{transform:'rotate(270deg)'}} />
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12} style={{ marginBottom: '2rem' }}>
            <Card className="cardbody">
              <Card.Img variant="top" src="/assets/images/icon (1).png" className="cardicons" />
              <Card.Body>
                <Card.Title>AI Content Generation</Card.Title>
                <Card.Text>
                  Generate relevant and engaging marketing content for multiple media platforms effortlessly.
                </Card.Text>
                <Button variant="outline-warning" className="cardbutton">
                  <span>Read More </span>
                  <ExpandCircleDownIcon style={{transform:'rotate(270deg)'}} />
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} xs={12} style={{ marginBottom: '2rem' }}>
            <Card className="cardbody">
              <Card.Img variant="top" src="/assets/images/icon (2).png" className="cardicons" />
              <Card.Body>
                <Card.Title>Advanced Analytics</Card.Title>
                <Card.Text>
                  Social media, ads platforms, and SEO/SEM analytics in one centralized dashboard.
                </Card.Text>
                <Button variant="outline-warning" className="cardbutton"><span>Read More </span>
                <ExpandCircleDownIcon style={{transform:'rotate(270deg)'}} />
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </div>
  )
}

export default Threepair