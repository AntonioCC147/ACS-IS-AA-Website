import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted" style={{paddingTop: "1px"}}>
            <section>
                <MDBContainer className="text-center text-md-start mt-5" style={{color: "gray"}}>
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem"/>
                                Despre site
                            </h6>
                            <p style={{textAlign: "justify"}}>
                                Site realizat pentru prezentarea materiilor, profesorilor și nu numai a seriei AA din cadrul Facultății de "Automatică și Calculatoare".
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Pagini</h6>
                            <p>
                                <a href="/#" target="blank" className="text-reset">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="/materii" target="blank" className="text-reset">
                                    Insight Materii
                                </a>
                            </p>
                            <p>
                                <a href="/contact" target="blank" className="text-reset">
                                    Contact
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon icon="gem"/>
                                Drive
                            </h6>
                            <p style={{textAlign: "justify"}}>
                                Drive-ul reprezintă un ajutor oferit de către studenții de ani mai mari.
                                Nu suntem responsabili de materialele aflate acolo.
                            </p>
                            <p>
                                <a href="https://drive.google.com/drive/folders/1eMQ8SWBM3jM8GEOB7-n3FvW93oXZtg1Z?usp=sharing" target="blank" className="text-reset">
                                    Accesează Drive-ul
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray" }}>
                © {new Date().getFullYear()} Copyright | Facultatea de "Automatică și Calculatoare", specializarea "Ingineria Sistemelor", seria "AA"
            </div>
        </MDBFooter>
    );
}