import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import AddExperience from "./AddExperience";

class ExperienceEducation extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      showModal: false,
    };
  }

  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  async componentDidMount() {
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
        this.setState({ data: data });
        console.log("experiences data:", data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <Container style={{ paddingBottom: "30px" }}>
        <Card className="experience-card">
          <Card.Body>
            <div
              className="d-flex justify-content-between"
              style={{ paddingLeft: "12px", marginBottom: "15px" }}
            >
              <h5>Experience</h5>
             
              <Button onClick={this.showModal} id="addExButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="Grey"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  fill="#000"
                />
              </svg>
              </Button>

              {this.state.showModal ? (
                <AddExperience
                  closeModal={this.closeModal}
                  showModal={this.state.showModal}
                  handleSubmit={this.handleSubmit}
                />
              ) : null}
            </div>
            {this.state.data.map((work) => (
              <>
                <div className="d-flex" style={{ paddingLeft: "12px" }}>
                  <div className="experience-content-section">
                    <div className="experience-titles-section-education ml-2">
                      <a href="#">
                        <h6>{work.role}</h6>
                        <h7>{work.company}</h7>
                        <br />
                        <h8>
                          {format(parseISO(work.startDate), "MMMM do yyyy")}-
                          {format(parseISO(work.endDate), "MMMM do yyyy")}
                        </h8>
                      </a>
                    </div>
                    <div className="experience-content-section ml-2">
                      <p>{work.description}</p>
                    </div>
                    <hr />
                  </div>
                </div>
              </>
            ))}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ExperienceEducation;
