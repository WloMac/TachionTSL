import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRecycle, faRoute, faDiamond, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Service() {
  return (
    <>
      <section className="service-section" id="service">
        <Container className="mt-5">  
          <Row className="justify-content-center">
            <h3 className="font-xlarge font-secondary-color poppins-extrabold">NASZA SPECJALNOŚĆ</h3>
            <hr></hr>
          </Row>
          <Row className="mt-3 justify-content-center">
            <Col xs={12} md={3}>
              <Card className="card-basic card-transport">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-primary-color">TRANSPORT ODPADÓW</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faRecycle} className="fa-2x font-primary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-primary-color">Bezpieczny i ekologiczny
                   </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic card-zwierz">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-primary-color">TRANSPORT PRODUKTÓW POCHODZENIA ZWIERZĘCEGO</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faDiamond} className="fa-2x font-primary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-primary-color">
                    Kategoria 3
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic card-sent">
                <Card.Body>
                  <Card.Title><h3 className="font-primary-color">PRZEWÓZ TOWARÓW OBJĘTYCH MONITOROWANIEM</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faRoute} className="fa-2x font-primary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-primary-color">
                    SENT</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic card-gps">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-primary-color">SYSTEM LOKALIZACJI POJAZDÓW GPS</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faLocationDot} className="fa-2x font-primary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-primary-color">
                    Bieżąca lokalizacja całej floty</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Service;
