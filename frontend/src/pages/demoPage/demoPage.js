// Link: https://reactrouter.com/en/main/components/link
import { Link } from "react-router-dom";

// Link: https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import images from "assets" folder
import Piggy1 from '../../assets/Piggy1.jpg';
import Piggy2 from '../../assets/Piggy2.jpg';
import Piggy3 from '../../assets/Piggy3.jpg';

// Import CSS file
import './demoPage.css';

export default function DemoPage() {
    return (
        <Container fluid>
            <Row className="text-center">
                <Col sm={4}>
                    <img src={Piggy1} className="fix-img" alt="Piggy1"></img>
                </Col>
                <Col sm={4}>
                    <img src={Piggy2} className="fix-img" alt="Piggy2"></img>
                </Col>
                <Col sm={4}>
                    <img src={Piggy3} className="fix-img" alt="Piggy3"></img>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    Link to <Link to="/">home</Link> :(
                </Col>
            </Row>
        </Container>
    )
}