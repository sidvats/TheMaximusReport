import TakeALookBody from "./TakeALook/TakeALookBody";
import AdvertismentBody from "./Advertisment/AdvertismentBody";
import { Row,Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
const Body=()=>{
    
    return (    
    <div style={{padding:".5rem",margin:"0rem .5rem 0rem .5rem"}}>
                <Row>
                    <Col sm={2} style={{padding:".5rem"}}><TakeALookBody/></Col>
                    <Col sm style={{padding:".5rem"}}><Outlet/></Col>
                    <Col  sm={2}  style={{padding:".5rem"}}><AdvertismentBody/></Col>
                </Row>    
    </div>
    );
}
export default Body;