import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import FAQ1 from '../../components/faq/faq1';
import FAQ2 from '../../components/faq/faq2';

import './materii.css';

export default function Materii() {
    const [view, setView] = useState("1");

    return (
        <div className="backgroundMaterii">
        <Container>
            <h1 className="text-center" style={{paddingTop: "100px"}}>Materii - Feedback</h1>
            <div className="selectYear">
                <Button variant="dark" className={view === "1" ? "selectButton" : "noSelectButton"} onClick={() => setView("1")}>Anul 1</Button>
                <Button variant="dark" className={view === "2" ? "selectButton" : "noSelectButton"} onClick={() => setView("2")}>Anul 2</Button>
            </div>
            <Row>
                {view === "1" && <FAQ1/>}
                {view === "2" && <FAQ2/>}
            </Row>
        </Container>
        </div>
    )
}