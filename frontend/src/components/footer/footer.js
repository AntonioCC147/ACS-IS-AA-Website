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
                            <p>
                                Site realizat pentru prezentarea materiilor, profesorilor și nu numai a seriei AA din cadrul Facultății de "Automatică și Calculatoare".
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Site-uri Personale</h6>
                            <p>
                                <a href="https://bogdanvalentin.github.io/" target="blank" className="text-reset">
                                    Craia Bogdan-Valentin
                                </a>
                            </p>
                            <p>
                                <a href="https://antoniocrantea.software/" target="blank" className="text-reset">
                                    Crantea Antonio-Cristian
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <MDBIcon icon="envelope" className="mb-4" />
                                <span className="fw-bold">Gmail - Craia Bogdan-Valentin:</span> bogdanvalentin977@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="mb-4" />
                                <span className="fw-bold">Gmail - Crantea Antonio-Cristian:</span> antoniocrantea@gmail.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="text-center p-4 fw-bold" style={{ backgroundColor: "#0000000d", color: "gray" }}>
                © {new Date().getFullYear()} Copyright | <i>Craia Bogdan-Valentin</i> și <i>Crantea Antonio-Cristian</i>, studenți la Facultatea de "Automatică și Calculatoare"
            </div>
        </MDBFooter>
    );
}