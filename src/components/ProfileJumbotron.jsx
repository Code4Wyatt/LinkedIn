import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class ProfileJumbotron extends React.Component {
  render() {
    return (
      <Container>
        <Row className="row-cols-8">
          <Col>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <img
                  className="profile-banner"
                  src="./assets/profilebanner.png"
                />
                <img
                  className="profile-picture"
                  src="./assets/profilepicture.jfif"
                />
                <div className="profile-info">
                  <Card.Title>Diego Banovaz</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    COO & Co-Founder @ Strive School (YC S20) - WE ARE HIRING
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Berlin, Berlin, Germany <a href="#">Contact Info</a>
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </div>
                <div className="mutual-connections">
                  <Card.Subtitle className="mb-2 text-muted">
                    500+ connections
                  </Card.Subtitle>
                  <img
                    className="mutual-connections-images"
                    src="./assets/Tobias.jfif"
                  ></img>
                  <img
                    className="mutual-connections-images-2"
                    src="./assets/stefano.jfif"
                                ></img>
                                <a className="mutual-connections-link" href="#">12 mutual connections: Tobia De Angelis, Stefano Casasasola and 10 others</a>
                </div>

                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileJumbotron;
