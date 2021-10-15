import React, { useState } from "react";

import {
  Card,
  Container,
  Button,
  Modal,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import { format, parseISO } from "date-fns";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";

class ExperienceEducation extends React.Component {
  constructor() {
    super();

    this.state = {
      workExperience: {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      },
      data: [],
      showModal: false,
      showModalEdit: false,
    };
  }

  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  showModalEdit = () => this.setState({ showModalEdit: true });
  closeModalEdit = () => this.setState({ showModalEdit: false });

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
                {/* this is our edit */}
                <Button onClick={this.showModalEdit} id="addExButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="Grey"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </Button>
                {this.state.showModalEdit ? (
                  <EditExperience
                    closeModalEdit={this.closeModalEdit}
                    showModalEdit={this.state.showModalEdit}
                    handleSubmit={this.handleSubmit}
                  />
                ) : null}

                {/* here ends edit then rest */}

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
              </>
            ))}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ExperienceEducation;
