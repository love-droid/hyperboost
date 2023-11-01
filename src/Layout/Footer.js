import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import "./Footer.css";
import { Link } from "@mui/material";

function Footer() {
  return (
    <Card className="container-fluid text-center footercard">
      <Card.Body>
        <Card.Title className="cardtitle">Join the waitlist for </Card.Title>
        <Card.Title className="hyperboost">Hyperboost</Card.Title>
        <Card.Text>
          Be the first to know: join the waitlist for exclusive offers and early
          access.
        </Card.Text>
        

        <a href="https://join.hyperboost.in">
        <Button
          variant="warning"
          id="button-addon2"
          style={{ marginLeft: "1em", padding: "0.9em" }}
        >
          Join Waitlist
        </Button>
        </a>
        

        <Form style={{ marginTop: "1rem" }}>
          {["checkbox"].map((type) => (
            <div
              key={`custom-${type}`}
              className="mb-3 d-flex justify-content-center"
            >
              
            </div>
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Footer;
