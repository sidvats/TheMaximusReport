import ArticleCard from "./ArticleCard";
import {Row,Col} from "react-bootstrap";
import HighlightArticle from "./HighlightArticle";
const LegalReports=()=>{
    return (
        <div style={{borderRadius:"8px",padding:".2rem"}}>
            <h4>Legal Reports</h4>
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
export default LegalReports;