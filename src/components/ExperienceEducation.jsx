import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

class ExperienceEducation extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  async componentDidMount(props) {
    let id = "61641f01a890cc0015cf07ef";
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          headers: new Headers({
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ data });
        console.log("experiences data:", data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <Container>
        <Card className="experience-card">
          <Card.Body>
            <div style={{ paddingLeft: "12px" }}>
              <h5>Experience</h5>
            </div>

            <div className="d-flex">
              <div className="experience-images-section">
                <img
                  className="experience-images"
                  src="./assets/striveschool.jfif"
                />
              </div>
              <div className="experience-content-section">
                <div className="experience-titles-section-education ml-2">
                  <a href="#">
                    <h6>Student - Full Stack Web Development</h6>
                    <h7>Strive School</h7>
                    <br />
                    <h8>June 2021 - Present</h8>
                  </a>
                </div>
                <div className="experience-content-section ml-2">
                  <p>
                    Studying Full Stack web development using HTML, CSS,
                    JavaScript, React and Node.js.
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="d-flex">
              <div className="experience-images-section">
                <img className="experience-images" src="./assets/jagland.png" />
              </div>
              <div className="experience-content-section">
                <div className="experience-titles-section-education ml-2">
                  <a href="#">
                    <h6>Account Manager</h6>
                    <h7>Jaguar Land Rover</h7>
                    <br />
                    <h8>January 2018 - July 2021</h8>
                  </a>
                </div>
                <div className="experience-content-section ml-2">
                  <ul>
                    <li>Managed client accounts</li>
                    <li>Provided quotes and processed sales</li>
                    <li>Prospected new clients</li>
                  </ul>
                </div>
                <hr />
              </div>
            </div>
          </Card.Body>

          <Card.Body>
            <div style={{ paddingLeft: "12px" }}>
              <h5>Education</h5>
            </div>
            <div className="d-flex">
              <div className="experience-images-section ">
                <img
                  className="experience-image education-images"
                  src="./assets/striveschool.jfif"
                />
              </div>
              <div className="experience-content-section">
                <div className="experience-titles-section-education ml-2">
                  <a href="#">
                    <h6>Strive School</h6>
                    <h7>Full Stack Web Development</h7>
                    <br />
                    <h8>June 2021 - Present</h8>
                  </a>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ExperienceEducation;
