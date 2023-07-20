import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FAQ from '../../components/faq/faq';

import './materii.css';

export default function Materii() {
    return (
        <Container>
            <h1 className="text-center" style={{marginTop: "8%"}}>Materii - Feedback</h1>
            <Row>
                <FAQ/>
            </Row>
        </Container>
    )
}