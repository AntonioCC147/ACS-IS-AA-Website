import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col sm={8}>
                    1
                </Col>
                <Col sm={4}>
                    2
                </Col>
            </Row>
            <Row>
                <Col>
                    3
                </Col>
            </Row>
        </Container>
    )
}