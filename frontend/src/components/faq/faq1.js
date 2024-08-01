import { Accordion, Card, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sem1Examen from './anul1sem1/examen.json';
import sem1Verificare from './anul1sem1/verificare.json';
import sem1Optionale1 from './anul1sem1/optionale1.json';
import sem1Optionale2 from './anul1sem1/optionale2.json';

import sem2Examen from './anul1sem2/examen.json';
import sem2Verificare from './anul1sem2/verificare.json';

import plus from '../../assets/faq/plus.png';
import minus from '../../assets/faq/minus.png';

import './faq.css';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <button
            type="button"
            className="my-accordion-button d-flex w-100"
            onClick={decoratedOnClick}
        >
            <img src={ isCurrentEventKey ? minus : plus } className="accordion-icon m-auto" alt="#"/>
            <div className='flex-grow-1 d-flex flex-row ps-3 text-start'>
                {children}
            </div>
        </button>
    );
}

function FAQName(props) {
    const { name, title, subtitle } = props;

    return (
        <div className='m-auto faq-container'>
            <p className="faq-title">{title}</p>
            <p className="faq-subtitle">{subtitle}</p>
            <Accordion flush>
                {name.map((faq, index) => {
                    return (
                        <Card key={index}
                            className={"p-0 m-3 border-white " + (index === 0 ? "border-top-0" : "")}>
                            <Card.Header>
                                <div className='d-flex flex-row p-1 pb-2'>
                                   <ContextAwareToggle eventKey={index + 1}><b>{faq.materie}</b></ContextAwareToggle>
                                </div>                                
                            </Card.Header>
                            <Accordion.Collapse eventKey={index + 1}>
                            <Card.Body className="card-answer">
                                <b>Credite:</b> {faq.credite}<br/>
                                <b>Titular de curs:</b> {faq.curs}<br/>
                                <b>Titular de seminar / laborator:</b> {faq.seminar}<br/><br/>
                                <b>Descriere:</b> {faq.descriere}
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default function FAQ1(props) {
    return (
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <FAQName name={sem1Examen} title="Materii cu Examen" subtitle="Anul I, Semestrul I"/>
                </Col>
                <Col sm={6}>
                    <FAQName name={sem2Examen} title="Materii cu Examen" subtitle="Anul I, Semestrul II"/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FAQName name={sem1Verificare} title="Materii cu Verificare" subtitle="Anul I, Semestrul I"/>
                </Col>
                <Col sm={6}>
                    <FAQName name={sem2Verificare} title="Materii cu Verificare" subtitle="Anul I, Semestrul II"/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <FAQName name={sem1Optionale1} title="Materii Opționale - Setul 1" subtitle="Anul I, Semestrul I"/>
                    
                </Col>
                <Col sm={6}>
                    <FAQName name={sem1Optionale2} title="Materii Opționale - Setul 2" subtitle="Anul I, Semestrul I"/>
                </Col>
            </Row>
        </Container>
    );
}