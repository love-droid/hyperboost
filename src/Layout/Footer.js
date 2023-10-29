import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Join the waitlist for </Card.Title>
        <Card.Title>Hyperboost</Card.Title>
        <Card.Text>
          Be the first to know: join the waitlist for exclusive offers and early access.
        </Card.Text>
        <TextField
          id="outlined-password-input"
          label="email address"
          type="email address"
          autoComplete="current-password"
        />
        <Button variant="warning" id="button-addon2" style={{marginLeft:'1em', padding:'0.9em'}}>
          Join Waitlist
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;