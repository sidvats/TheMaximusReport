import ArticleCard from "./ArticleCard";
import {Row,Col} from "react-bootstrap";
import HighlightArticle from "./HighlightArticle";
const StartupHub=()=>{
    return (
        <div style={{borderRadius:"8px",padding:".2rem"}}>
            <h4>StartUp Updates</h4>
                <HighlightArticle/>
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
            <div style={{border:"1px solid ",marginTop:"20vh",borderRadius:"8px",padding:".2rem",width:"100%",height:"30vh"}}>
                <marquee>Client Testimonials</marquee>
            </div>
        </div>
    );
}
export default StartupHub;