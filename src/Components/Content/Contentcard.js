import React from "react";
import "./Contentcard.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function Contentcard() {
  return (
    <Container fluid>
      <Row className="yellowcard">
        <Col md={6}>
          <Row>
            <Col md={3}>
              <Button variant="outline-dark" className="cardbutton">
                Marketing
              </Button>
            </Col>
            <Col md={3}></Col>
            <Col md={6}>
              <p className="cardtexts">SEPTEMBER 1 , 2023</p>
            </Col>
          </Row>
          <Row>
            <h4 style={{ textAlign: "start", marginTop: "1.5rem" }}>
              How to increase your Twitter reach by over 200% with this simple
              trick
            </h4>
          </Row>
          <Row>
            <p style={{ textAlign: "start", marginTop: "0.5rem" }}>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </p>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <Button variant="light" className="readmorebutton">
                <span>Read More</span>
                <ExpandCircleDownIcon
                  style={{
                    transform: "rotate(270deg)",
                    color: "blue",
                    fontSize: "1rem",
                    marginTop: "0.25rem",
                    marginLeft: "0.3rem",
                  }}
                />
              </Button>{" "}
            </Col>
          </Row>
        </Col>

        <Col md={1} xs={0}></Col>

        <Col md={5} xs={12}>
          <img
            src="assets/images/photo.png"
            alt=""
            style={{ borderRadius: "10px", width: "100%", marginTop: "1rem" }}
          />
        </Col>
      </Row>

      <Row className="bluecard">
        <Col md={5} xs={12}>
          <img
            src="assets/images/romom.png"
            alt=""
            style={{ borderRadius: "10px", width: "100%", marginTop: "1rem" }}
          />
        </Col>

        <Col md={1} xs={0}></Col>

        <Col md={6}>
          <Row>
            <Col md={3}>
              <Button variant="outline-dark" className="cardbutton">
                Content
              </Button>
            </Col>
            <Col md={3}></Col>
            <Col md={6}>
              <p className="cardtexts">SEPTEMBER 1 , 2023</p>
            </Col>
          </Row>
          <Row>
            <h4 style={{ textAlign: "start", marginTop: "1.5rem" }}>
              How to reach out for guest posts to increase your SEO authority
            </h4>
          </Row>
          <Row>
            <p style={{ textAlign: "start", marginTop: "0.5rem" }}>
              Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus
              ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna
              auctor.
            </p>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <Button variant="light" className="readmorebutton">
                <span>Read More</span>
                <ExpandCircleDownIcon
                  style={{
                    transform: "rotate(270deg)",
                    color: "blue",
                    fontSize: "1rem",
                    marginTop: "0.35rem",
                    marginLeft: "0.3rem",
                  }}
                />
              </Button>{" "}
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "2rem", marginBottom:"2rem"}}>
        <Col md={5}></Col>
        <Col md={2}>
          <Button variant="dark" style={{width:'100%', padding:'1rem', fontFamily: "'Nunito', sans-serif"}}>
            More Articles
            <ExpandCircleDownIcon
                  style={{
                    transform: "rotate(270deg)",
                    fontSize: "1rem",
                    marginLeft: "0.3rem",
                    marginBottom: "0.1rem",
                  }}
                />
            </Button>
        </Col>
        <Col md={5}></Col>
      </Row>
    </Container>
  );
}

export default Contentcard;
