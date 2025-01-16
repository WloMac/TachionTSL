import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'


function Hero(){
    return(
    <> 
    <Navbar className="navbar" expand="lg">

        <Container className="navbar-container container-fluid me-auto"> 
            <Navbar.Brand href="#home" className="me-auto">Tachion</Navbar.Brand>
            <Nav className="ms-auto justify-content-end">
            <Nav.Link href="#service">Usługi</Nav.Link>
            <Nav.Link href="#about">O nas</Nav.Link>
            <Nav.Link href="#coop">Współpraca</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    
    <section className="hero-section">
        <Container className="mt-5">
            <Row className="title">            
                <Col>
                <h1 className="poppins-extrabold font-xxxlarge">Tachion TSL</h1> 
                <h2 className="poppins-semibold">Transport Spedycja Logistyka</h2>
                <p className="quote"><h3 className="poppins-extralight">Twój ładunek zasługuje na <span className="poppins-extrabold font-secondary-color">specjalne</span> traktowanie</h3> </p>
                </Col>  
                               
            </Row>
            <Row className="buttons poppins-semibold justify-content-center mt-5">
                <Col xs={6} lg={2} className="text-center">
                <button className="button-primary"  
                onClick={() => window.location.href = '#service'}>Więcej</button>
                </Col>
                <Col xs={6} lg={2} className="text-center">   
                <button className="button-primary" 
                 onClick={() => window.location.href = '#contact'}>Kontakt</button>
                </Col>
            </Row>
        </Container>
    </section>
    </>
)};

export default Hero