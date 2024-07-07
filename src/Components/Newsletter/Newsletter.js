import { Form,InputGroup,Button } from "react-bootstrap";
const Newsletter=()=>{
return (
    <div>
       <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" style={{color:"white"}}>
          Subscribe Newsletter
        </Button>
        <Form.Control
          aria-label="Enter Your Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
);
}
export default Newsletter;