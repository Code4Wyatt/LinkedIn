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
                            <img className="profile-banner" src="./assets/profilebanner.png" />
                            <img className="profile-picture" src="./assets/profilepicture.png" />
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
