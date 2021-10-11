import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class ProfileJumbotron extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: new Headers({
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ error: false, data });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <div className="profile-banner-container">
                  <img
                    className="profile-banner"
                    src="./assets/profilebanner.png"
                  />
                </div>

                <img className="profile-picture" src={this.state.data.image} />
                <div className="container">
                  <div className="row">
                    <div className="col-xs-8">
                      <div className="profile-info">
                        <Card.Title>
                          {this.state.data.name} {this.state.data.surname}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {this.state.data.bio}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">
                          {this.state.data.area} <a className="contact-info-link" href="#">Contact Info</a>
                        </Card.Subtitle>
                      </div>
                    </div>
                    <div className="col-xs-4">
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
