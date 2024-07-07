import ArticleCard from "./ArticleCard";
import {Row,Col} from "react-bootstrap";
const StudentsCorner=()=>{
    return (
        <div style={{borderRadius:"8px",padding:".2rem"}}>
                <h4>Students corner Form</h4>
                <form style={{margin:"auto",textAlign:"center"}}>
                    UserName :
                    <input type="text">
                    </input> &nbsp;
                    Password :
                    <input type="text">
                    </input>
                    <button>Submit</button>
                </form>
                <hr></hr>
                Students Article
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
            <Row>
                <Col><ArticleCard/></Col>
                <Col><ArticleCard/></Col>
            </Row>
        </div>
    );
}
export default StudentsCorner;