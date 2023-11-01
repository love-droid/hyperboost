import React from 'react';
import './Content.css';
import { Col, Container, Row } from 'react-bootstrap';
import Contentcard from './Contentcard';

function Content() {
  return (
      <Container>
        <Row className="justify-content-center mt-5 mb-3">
          <img src="assets/images/iconnw.png" alt="placeholder" className='contents'/>
        </Row>
        <Row className='text-center mt-2 mb-5'>
          <Col md={3}>
          </Col>
          <Col md={6}>
          <h2 style={{fontFamily: "'Nunito', sans-serif",fontWeight:"600"}}>
            Browse our content on growth marketing
          </h2>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
        <Row className='justify-content-center text-center'>
          <Contentcard />
        </Row>
      </Container>
  )
}

export default Content