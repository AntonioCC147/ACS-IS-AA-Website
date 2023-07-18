import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FAQ from '../../components/faq/faq';

export default function Materii() {
    return (
        <Container>
            <h1 className="text-center">Materii - Feedback</h1>
            <Row>
                <FAQ/>
            </Row>
        </Container>
    )
}