import { Container } from "@mui/material";
import "./Initial.css";
import { Button, Col, Row } from "react-bootstrap";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Initial() {
  return (
    <div className="testbody">
      <div className="backimg">
        <Container>
          <Row>
            <Col md={5} xs={7}>
              <Row>
                <h1 className="initialheading1">
                  <span style={{ color: "black" }}>Automate </span>
                  <span style={{ color: "#4D56A2" }}>marketing</span>
                </h1>
              </Row>
              <Row>
                <h1 className="initialheading2"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "bold",
                    fontSize: "3rem",
                    textShadow: "0.5px 0.5px 0.5px black",
                  }}
                >
                  with just one Click
                </h1>
              </Row>
              <Row>
                <p style={{ marginTop: "1rem" }}>
                  we handle end-to-end marketing using AI-powered automations.
                </p>
              </Row>
              <Row>
                <a href="https://calendly.com/ranaaditya">
                <Button
                  variant="primary"
                  color="primary"
                  style={{
                    marginTop: "1rem",
                    width: "10rem",
                    padding: "10px",
                    marginLeft: "10px",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <span>Book a Demo </span>
                  <ArrowRightAltIcon />
                </Button>
                </a>
                
              </Row>
            </Col>
            {/* ----------------------------------------------------------------------- */}
            <Col md={7} xs={5}>
              <img
                className="sideimage"
                src="/assets/images/image1new.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Initial;
