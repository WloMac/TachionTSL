import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Image1 from "./assets/Image-1.jpg";
import Image2 from "./assets/Image-2.jpg";
import "./App.css";

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <Container className="description-container mt-2">
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <div className="about-details">
                <h3 className="font-xlarge font-secondary-color poppins-extrabold">
                  <hr></hr>
                  Transport Kutno - przewozy kontenerów i tanków
                  <hr></hr>
                </h3>
                <p className="txt-in font-m font-primary-color"> 
                Od 18 lat dostarczamy niezawodne rozwiązania
                  w transporcie drogowym na rynku krajowym
                  i międzynarodowym. Specjalizujemy się
                  w przewozach kontenerów i tanków, oferując
                  także przewozy plandekowe. Nasza siedziba
                  w Siemienicach zanjduje się w pobliżu terminala
                  kontenerowego w Kutnie oraz terminali w Łodzi, Strykowie i Pruszkowie, co pozwala na szybkie i
                  efektywnie działania. Dzięki wieloletniemu doświadczeniu oraz
                  znajomości rynku zapewniamy elastyczne, bezpieczne i terminowe usługi, dostosowane do
                  indywidualnych potrzeb naszych klientów.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="about-image">
                <Image className="image-1" src={Image1} fluid></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="coop-section" id="coop">
        <Container className="coop-container">
          <Row>
            <Col xs={12} md={6}>
              <Image className="image-2" src={Image2} fluid></Image>
            </Col>
            <Col xs={12} md={6}>
            <div className="coop-details">
              <h3 className="font-secondary-color font-xlarge poppins-extrabold">
                <hr></hr>
                WSPÓŁPRACA
                <hr></hr>
              </h3>
              <p className="font-primary-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis fugiat dolorem optio aliquid? Culpa, sed reiciendis
                tenetur ullam nihil possimus, quaerat nemo, laboriosam rem
                numquam voluptatibus reprehenderit illum ratione asperiores ipsa
                et? Ipsa pariatur ex repellendus numquam at! Ad, ratione nulla?
                Minima dolorum numquam blanditiis iusto tenetur vero eaque
                deserunt.
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
