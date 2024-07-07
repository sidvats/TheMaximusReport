import { Row, Col, Form, Button } from "react-bootstrap";
const YourStory = () => {
  return (
    <div>
      <h4 style={{ fontFamily: "Kalnia", textAlign: "center" }}>
        Pulish Your Success Story With Us
      </h4>
      <div>
        <h6>Introduction</h6>
        <hr></hr>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name Of Startup</Form.Label>
              <Form.Control type="text" placeholder="Enter Startup Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Website/App Link</Form.Label>
              <Form.Control type="url" placeholder="URL" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email Id (Founder)</Form.Label>
              <Form.Control type="Email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Contact No. (Founder)</Form.Label>
              <Form.Control type="number" placeholder="Contact" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Registered Name of the Company</Form.Label>
            <Form.Control placeholder="Company Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>CIN</Form.Label>
            <Form.Control placeholder="CIN No." type="numer" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Founding Year</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Based at</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Name of Founding Members</Form.Label>
            <Form.Control />
          </Form.Group>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>LinkedIn Url(Founder)</Form.Label>
                <Form.Control type="url" placeholder="Founder Linkedin" />
            </Form.Group>
            <br></br>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>LinkedIn Url(Company)</Form.Label>
                <Form.Control type="url" placeholder="Company Linkedin" />
            </Form.Group>
          </Row>
          <br></br>
          <h6>Startup Overview</h6>
          <hr></hr>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mission and Purpose of your Startup</Form.Label>
              <Form.Control type="text" placeholder="Startup Mission" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Unique Value Proposition</Form.Label>
              <Form.Control type="url" placeholder="Unique Value Proposition" />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Target Audience</Form.Label>
            <Form.Control type="name" placeholder="Target Audience" />
          </Form.Group>
          <br></br>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Stage Of Funding</Form.Label>
            <Form.Control type="url" placeholder="Bootstrap / Pre-seed / Seed / Series" />
          </Form.Group>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Funding Raised Till Date</Form.Label> &#8377;
              <Form.Control type="text" placeholder="Raised Funding" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Current Valuation &#8377;</Form.Label>
              <Form.Control type="url" placeholder="Current Valuation" />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name Of Investors (if any)</Form.Label>
            <Form.Control type="name" placeholder="Investors" />
          </Form.Group>
          <br></br>
          <h6>Product/Service Details</h6>
          <hr></hr>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Product / Service Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Describe Your Services/Product"
            />
          </Form.Group>
          <br></br>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Key Feature / Benefits</Form.Label>
            <Form.Control type="name" placeholder="Features" />
          </Form.Group>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technology Used</Form.Label>
              <Form.Control type="text" placeholder="Technology Used" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Innovation in Idea</Form.Label>
              <Form.Control type="url" placeholder="Innovation in Idea" />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Market Validation (any feedback, testimonials, etc.)
            </Form.Label>
            <Form.Control type="name" placeholder="Feedbacks / testimonials" />
          </Form.Group>
          <br></br>
          <h6>Revenue Streams</h6>
          <hr></hr>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>What is the Revenue Model</Form.Label>
            <Form.Control type="name" placeholder="Revenue Model" />
          </Form.Group>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Last financial year revenue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last financial year revenue"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last month revenue</Form.Label>
              <Form.Control type="url" placeholder="Last month revenue" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Future growth plans</Form.Label> 
              <Form.Control type="text" placeholder="Future growth plans" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Potential Competitors, if any</Form.Label>
              <Form.Control type="url" placeholder="Competitors" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default YourStory;
