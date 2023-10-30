import { Container } from '@mui/material';
import './Initial.css';
import { Button, Col, Row } from 'react-bootstrap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Initial() {
  return (
    <div className='testbody'>
    <div className='backimg'>
      <Container>
        <Row>
          <Col md={5} xs={7}>
            <Row>
              <h1 style={{ marginTop: '7em'}}>Automate marketing</h1>
            </Row>
            <Row>
              <h1>with just one Click</h1>
            </Row>
            <Row>
              <p style={{ marginTop: '1rem' }}>we handle end-to-end marketing using AI-powered automations.</p>
            </Row>
            <Row>
              <Button variant="primary" color="primary" style={{ marginTop: '1rem', width: '10rem', padding: '10px', marginLeft: '10px' }}>
                <span>Book a Demo </span>
                <ArrowRightAltIcon />
              </Button>
            </Row>
          </Col>
          {/* ----------------------------------------------------------------------- */}
          <Col md={7} xs={5}>
            <img className="sideimage" src="/assets/images/image1new.png" alt=""/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Initial