import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton,
  ListGroup,
} from "react-bootstrap";

class ProfileJumbotron extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      error: false,
      toggle: false,
    };
  }

  async fetchProfiles(props) {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/: + ${this.props.userId}`,
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
      console.log(error.message);
      this.setState({ error: true });
    }
  }

  toggleSelected = (e) => e.preventDefault;

  async componentDidMount() {
    // this.fetchProfiles();
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
      <Container className="profile-container">
        <Row>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <div className="profile-banner-container">
                  <img
                    className="profile-banner img-fluid w-100"
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
                          {this.state.data.area}{" "}
                          <a className="contact-info-link" href="#">
                            Contact Info
                          </a>
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
                <div className="profile-buttons-section d-flex">
                  <Button variant="primary buttons">Connect</Button>
                  <Button variant="outline-dark buttons">Message</Button>
                  <DropdownButton
                    align="end"
                    id="dropdown-menu-align-end"
                    title="Add Selection"
                  >
                    <Dropdown.ItemText>Add Selection</Dropdown.ItemText>
                    <Dropdown.Item className="dropdown" as="button">
                      <div className="justify-content-space-between btns">
                        <p>Intro</p>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      About{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <ListGroup>
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Dropdown.Item as="button">
                      Featured{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      /*onclick={(e) => {
                        this.toggleSelected;
                      }} */
                    >
                      Background{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Skills{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Accomplishments{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Additional information{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Supported languages{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                  </DropdownButton>
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
