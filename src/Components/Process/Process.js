import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Process.css";
// import Timeline from "./Timeline";

function Process() {
  return (
    <Container className="backbody mt-5">
      <Row className="justify-content-center ">
        <img
          src="/assets/images/laddericon.png"
          alt=""
          className="laddericon mx-auto"
        />
      </Row>

      <Row className="text-center">
        <Col md={3}>
        </Col>
        <Col md={6}>
          <h2 className="processtext">A simple, yet powerful and efficient process</h2>
        </Col>
        <Col md={3}>
        </Col>
      </Row>

      <Row className="justify-content-center text-center mb-5">
        <img src="/assets/images/contentnew.png" alt="" className="content mx-auto" />
      </Row>

      {/* <Row className="justify-content-center mb-5">
        <Timeline/>
        </Row> */}
    </Container>
  );
}

export default Process;
