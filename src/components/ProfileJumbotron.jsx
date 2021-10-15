import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton,
  ListGroup,
  Form,
  FormGroup,
  Modal,
} from "react-bootstrap";
import UploadPic from "./unploadPicture/UploadPic";
import { withRouter } from "react-router-dom";

function ProfileJumbotron(props) {
  /* let retrievedIdFromURL = match.params.userId; */
  const [data, setData] = useState({
    name: "",
    area: "",
    surname: "",
    bio: "",
    area: "",
  });
  const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const idHeader = () => {
    const claudiaToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0";
    const paulToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q";
    const claudiaId = "6163fc59a890cc0015cf07ed";
  };

  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        console.log("After the fetch", data);
      }
    } catch (error) {
      console.log(error.message);
      setError({ error: true });
    }
  };

  const toggleSelected = (e) => e.preventDefault;

  /*   const endpoint = retrievedIdFromURL
    ? "https://striveschool-api.herokuapp.com/api/profile/" + retrievedIdFromURL
    : "https://striveschool-api.herokuapp.com/api/profile/"; */

  const handleSubmit = async (event) => {
    event.preventDefault();
    // this is stopping the default behavior from the browser
    // about this specific event, which would instead refresh the page and insert some
    // querystrings into the address bar

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: /* retrievedIdFromURL ? */ "PUT" /* : "POST", */,
          body: JSON.stringify(data),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
          },
        }
      );

      if (response.ok) {
        const respEvent = await response.json();
        if (
          `https://striveschool-api.herokuapp.com/api/profile/${props.userId}`
        ) {
          alert(
            "success",
            "Profile with an id of " +
              respEvent._id +
              " was EDITED successfully"
          );
        } else {
          alert(
            "info",
            "Profile created successfully with an id of " + respEvent._id
          );
        }
      }
    } catch (err) {
      alert("danger", err.message);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <>
      <UploadPic
        showModal={showModal}
        setShowModal={setShowModal}
        profile={data}
      />
      
      <Container className="homeContainer">
        <Row style={{ paddingBottom: "0" }}>
          <img
            className="img-fluid w-100 sideBarBanner"
            alt=""
            src="../assets/profilebanner.png"
          />
          <img
            className=" profile-picture"
            alt=""
            src={data.image}
            value={showModal}
            onClick={() => setShowModal(true)}
          />
        </Row>
        <Row className="d-flex justify-content-between"style={{ padding: "15px", paddingBottom: "0", paddingTop: "0" }}>
          <div>
            <p>
              {data.name} {data.surname}
            </p>
            <p className="mb-2 text-muted"> {data.bio}</p>
            <p className="text-muted">
              {" "}
              {data.area}{" "}
              <a className="contact-info-link" href="#">
                Contact Info
              </a>
            </p>
          </div>
          <Button id="addExButton" >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="Grey"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
                onClick={handleShow}
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>EDIT PROFILE</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {" "}
                  <Container>
                    <Row id="add-skill-button">
                      {/* <div>
                        <p>
                          {data.name} {data.surname}
                        </p>
                        <p className="mb-2 text-muted"> {data.bio}</p>
                        <p className="text-muted">
                          {" "}
                          {data.area}{" "}
                          <a className="contact-info-link" href="#">
                            Contact Info
                          </a>
                        </p>
                      </div> */}
                      <form onsubmit={handleSubmit}>
                        <div className="form-group">
                          <label for="name">Your name</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={data.name}
                            onChange={(e) =>
                              setData({ ...data, name: e.target.value })
                            }
                            placeholder="Specify ur name..."
                          />
                        </div>
                        <div className="form-group">
                          <label for="name">Your surname</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={data.surname}
                            onChange={(e) =>
                              setData({ ...data, surname: e.target.value })
                            }
                            placeholder="Specify ur name..."
                          />
                        </div>
                        <div class="form-group">
                          <label for="description">Your Bio</label>
                          <textarea
                            id="description"
                            type="textarea"
                            className="form-control"
                            value={data.bio}
                            onChange={(e) =>
                              setData({ ...data, bio: e.target.value })
                            }
                            placeholder="Write a description"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="price">Your Location</label>
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={data.area}
                            onChange={(e) =>
                              setData({ ...data, area: e.target.value })
                            }
                            placeholder="Specify ur location..."
                          />
                        </div>

                        <button type="button" className="btn btn-secondary">
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ background: "blue" }}
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </form>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          </Button>
        </Row>
        <Row style={{ padding: "15px", paddingBottom: "0" }}>
          <div className="col-xs-4">
            <div>
              <div>
                <img
                  className="experiences-img"
                  src="./assets/striveschool.jfif"
                  alt=""
                />
                Strive School
              </div>
            </div>
          </div>
        </Row>
        <Row style={{ padding: "15px", paddingBottom: "0" }}>
          <div className="mb-2 connections-title d-flex">
            <p className="connections-amount">500+</p> connections
          </div>
        </Row>
        <Row style={{ padding: "15px", paddingBottom: "0" }}>
          <div className="d-flex">
            <a className="mutual-connections-link text-muted" href="#">
              <p className="mutual">
                <b>12 mutual connections:</b> Tobia De Angelis, Stefano
                Casasasola and 10 others
              </p>
            </a>
          </div>
        </Row>
        <Row style={{ padding: "15px" }}>
          {/*   <div className=" d-flex justify-content-between" style={{flexDirection: "row", justifyContent: 'space-between!important'}}> */}
          <Button variant="primary buttons" style={{ marginRight: "10px" }}>
            Connect
          </Button>
          <Button
            variant="outline-dark buttons"
            style={{ marginRight: "10px" }}
          >
            Message
          </Button>
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
          {/* </div> */}
        </Row>
      </Container>
    </>
  );
}

export default withRouter(ProfileJumbotron);
