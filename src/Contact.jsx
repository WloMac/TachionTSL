import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
  
    function sendEmail(e) {
    e.preventDefault();

    if (!recaptchaValue) {
        alert("Proszę potwierdzić, że nie jesteś robotem.");
        return; // Jeśli reCAPTCHA nie zostało zweryfikowane, nie wysyłamy formularza
      }

    emailjs
      .sendForm(
        "service_kl2ztvq", // Replace with your EmailJS service ID
        "template_2c8hus5", // Replace with your EmailJS template ID
        e.target,
        "ZAzd5HijIhF3Cl8Wo" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Dziękujemy za wiadomość");
        },
        (error) => {
          alert("Nie udało się wysłać wiadomości, spróbuj ponownie.");
        }
      );
    e.target.reset();
    setRecaptchaValue(null); // Resetowanie wartości reCAPTCHA po wysłaniu
  }
  function handleRecaptchaChange(value) {
    setRecaptchaValue(value);
  }

  return (
    <>
      <section className="contact-section" id="contact">
        <Container className="contact-container mt-5">
          <Row className="justify-content-center">
            <Col md="auto">
              <h3 className="font-xlarge font-secondary-color poppins-extrabold mt-5">
                Kontakt
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-center text-center font-m font-primary-color poppins-semibold mt-5 ">
            <Col md="auto">            
                    <p>Tachion TSL</p>
                    <p>Emil Gierańczyk </p>                   
                    <p>Siemienice</p>
                    <p>NIP: 7752589105</p>
                    <p>REGON: 529281512</p>
            </Col>
          </Row>
          <Row className="justify-content-center font-primary-color mt-5">
            <Col md="6">
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.013217859118!2d19.3668362!3d52.2268896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c511ea40c219f%3A0x348bc349e9fc1ed5!2sSiemienice%2C%20%C5%81%C3%B3dzkie!5e0!3m2!1spl!2spl!4v1234567890123" // Replace v parameter with the actual map embed URL
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
            <Col md="6">
              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="form-group mt-3">
                <ReCAPTCHA
                  sitekey="6LfJ6LMqAAAAADQKs1fvfu5ccvSff4rO205Fqcd4" // Użyj swojego klucza strony
                  onChange={handleRecaptchaChange}
                />
              </div>

                <button type="submit" className="button-primary mt-3">
                  Wyślij
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;