import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faTruck, faTrailer, faTruckRampBox, faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Fleet() {
  return (
    <>
      <section className="fleet-section" id="fleet">
        <Container className="mt-5">  
          <Row className="justify-content-center">
            <h3 className="font-xlarge font-secondary-color poppins-extrabold">Flota</h3>
            <hr></hr>
          </Row>
          <Row className="mt-3 justify-content-center">
            <Col xs={12} md={3}>
              <Card className="card-basic2 card-unit">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faTruck} className="fa-2x" />
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Title><h3 className="poppins-semibold">Dwu i trzy osiowe ciągniki siodłowe</h3></Card.Title>
                  
                  <Card.Text><p className="poppins-semibold">Przeznaczone do rozładunku materiałów sypkich lub płynnych - w tym materiałów niebezpiecznych.
                   </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic2 card-trailer">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faTrailer} className="fa-2x" />
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Title><h3 className="poppins-semibold ">Naczepy podkontenerowe 3 osiowe</h3></Card.Title>
                  
                  <Card.Text><p className="poppins-semibold">
                    Przeznaczone także do przewozu towarów niebezpiecznych
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic2 card-skip">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faTruckRampBox} className="fa-2x" />
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Title><h3 className="poppins-semibold">Podwozie samowyłodawcze</h3></Card.Title>
                  
                  <Card.Text><p className="poppins-semibold">
                    Kompatybilne z kontenerami 20', 30', 40' i 45'</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-basic2 card-dgsa">
                <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faHelmetSafety} className="fa-2x" />
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Title><h3 className="poppins-semibold">Bezpośredni nadzór DGSA</h3></Card.Title>
                  
                  <Card.Text><p className="poppins-semibold">
                  Zatrudniamy doradcę do spraw bezpieczeństwa przewozu
                  towarów niebezpiecznych w zakresie transportu drogowego</p>
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

export default Fleet;
