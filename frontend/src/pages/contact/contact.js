import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import Swal from 'sweetalert2'

import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import ContactImg from '../../assets/contact/contact.png';

import './contact.css';

const styles = {
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
};
  
const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    user_email: Yup.string().email(<span style={styles.error}>Adresa de email este invalidă</span>).required(<span style={styles.error}>Adresa de email este obligatorie</span>),
    message: Yup.string().required(<span style={styles.error}>Mesajul este obligatoriu</span>),
});

export default function Contact() {
    const [isVerify, setIsVerify] = React.useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        emailjs.send('service_3f0shha', 'template_o21xcg4', values, 'wgJFpA_4E1G_XA6V-')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    function onChange(value) {
        setIsVerify(true);
    }

    return (
        <div className="backgroundContact">
            <Container>
                <p className="title" style={{paddingTop: "7%"}}><b>Contactează-ne</b></p>
                <Formik
                    initialValues={{
                        user_name: '',
                        user_email: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (!isVerify || !values.user_name || !values.user_email || !values.message) {
                            setSubmitting(false);
                            return;
                        }
                        sendEmail(values);
                        resetForm();
                        Swal.fire({
                            icon: "success",
                            title: "Mesajul a fost trimis cu succes!",
                            showConfirmButton: false,
                            timer: 3000
                        });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="contactContainer">
                            <div className="text-center">
                                <img src={ContactImg} style={{ width: '300px' }} alt="Contact" />
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <b><label htmlFor="user_name">Nume:</label></b>
                                        <Field type="text" name="user_name" className="form-control formAppearance" />
                                        <ErrorMessage name="user_name" component="div" className="error-message" />
                                        <b><label htmlFor="user_email">Email:</label></b>
                                        <Field type="email" name="user_email" className="form-control formAppearance" />
                                        <ErrorMessage name="user_email" component="div" className="error-message" />
                                    </Row>
                                    <Row>
                                        <div className="CAPTCHA">
                                            <ReCAPTCHA sitekey="6LcqbzgnAAAAAPnOkwQCkaTqVl_gV22aExZHjMIJ" onChange={onChange} />
                                        </div>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <b><label htmlFor="message">Mesaj:</label></b>
                                    <Field as="textarea" name="message" className="form-control formAppearance" rows="8" cols="50" />
                                    <ErrorMessage name="message" component="div" className="error-message" />
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <div className="buttonContainer">
                                    <Button
                                        variant="dark"
                                        type="submit"
                                        className="d-flex align-items-center justify-content-center contactButton"
                                        disabled={isSubmitting || isFormSubmitted}
                                    >
                                        {isFormSubmitted ? 'Trimite' : 'Trimite'}
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
}