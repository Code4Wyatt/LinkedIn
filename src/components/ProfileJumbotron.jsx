import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class ProfileJumbotron extends React.Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-8">
          <Col>
            <Card style={{ width: "50rem" }}>
                        <Card.Body>
                       <div className="profile-banner-container"><img
                  className="profile-banner"
                  src="./assets/profilebanner.png"
                            /></div>     
                
                            
                <img
                  className="profile-picture"
                  src="./assets/profilepicture.jfif"
                />
                <div class="container">
                  <div class="row">
                    <div class="col-xs-8">
                      <div className="profile-info">
                        <Card.Title>Diego Banovaz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          COO & Co-Founder @ Strive School (YC S20) - WE ARE
                          HIRING
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">
                          Berlin, Berlin, Germany <a href="#">Contact Info</a>
                        </Card.Subtitle>
                      </div>
                    </div>
                    <div class="col-xs-4">
                      <div className="profile-experiences-preview">
                        <div>
                          <img
                            className="experiences-img"
                            src="./assets/striveschool.jfif"
                          ></img>{" "}
                          Strive School
                        </div>
                        <div>
                          <img
                            className="experiences-img"
                            src="./assets/ycombinator.jfif"
                          ></img>{" "}
                          Y Combinator
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mutual-connections">
                  <Card.Subtitle className="mb-2 connections-title d-flex">
                    <p className="connections-amount">500+</p> connections
                  </Card.Subtitle>
                  <div className="d-flex mutual-section">
                    <img
                      className="mutual-connections-images"
                      src="./assets/Tobias.jfif"
                    ></img>
                    <img
                      className="mutual-connections-images-2"
                      src="./assets/stefano.jfif"
                    ></img>
                    <a className="mutual-connections-link text-muted" href="#">
                      <p className="mutual">
                        <b>12 mutual connections:</b> Tobia De Angelis, Stefano
                        Casasasola and 10 others
                      </p>
                    </a>
                  </div>
                </div>
                <div className="profile-buttons-section">
                  <Button variant="primary buttons">Connect</Button>
                  <Button variant="outline-dark buttons">Message</Button>
                  <Button variant="outline-dark buttons">More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileJumbotron;
