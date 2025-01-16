import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faRetweet, faCubes } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Service() {
  return (
    <>
      <section className="service-section" id="service">
        <Container className="mt-5">          
          <Row className="mt-3">
            <Col xs={12} md={4}>
              <Card className="card-basic card-transport">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-secondary-color">Transport</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faRoad} className="fa-2x font-secondary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-secondary-color">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-basic card-sped">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-secondary-color">Spedycja</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faRetweet} className="fa-2x font-secondary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-secondary-color">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-basic card-logistics">
                <Card.Body>
                  <Card.Title><h3 className="poppins-semibold font-secondary-color">Logistyka</h3></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faCubes} className="fa-2x font-secondary-color" />
                  </Card.Subtitle>
                  <Card.Text><p className="poppins-semibold font-secondary-color">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.</p>
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
