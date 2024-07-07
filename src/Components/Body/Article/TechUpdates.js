import ArticleCard from "./ArticleCard";
import {Row,Col} from "react-bootstrap";
import HighlightArticle from "./HighlightArticle";
const TechUpdates=()=>{
    return (
        <div style={{borderRadius:"8px",padding:".2rem"}}>
            <h4>Tech Updates</h4>
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
        </div>
    );
}
export default TechUpdates;