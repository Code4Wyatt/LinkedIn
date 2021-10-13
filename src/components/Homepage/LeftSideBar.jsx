import React from "react";
import { Card, Container, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcKey } from "react-icons/fc";
import { BsFillBookmarkFill } from "react-icons/bs";
import Row from "react-bootstrap/Row";

class LeftSideBar extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      error: false,
      toggle: false,
    };
  }

  async fetchSideBarData() {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q",
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        this.setState({ data: data });
        console.log("after the fetch", data);
      }
    } catch (error) {
      console.log(error.message);
      this.setState({ error: true });
    }
  }

  toggleSelected = (e) => e.preventDefault;

  async componentDidMount() {
    this.fetchSideBarData();
  }

  render() {
    return (
      <>
        <Container className="homeContainer">
          <Row>
            <img
              className="img-fluid w-100 sideBarBanner"
              alt=""
              src="../assets/profilebanner.png"
            />
            <img
              className="sideBarAvatar"
              alt=""
              src="../assets/profilepicture.png"
            />
          </Row>
          <Row className="justify-content-center borderBottomRow">
            <span
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
              className="welcomeName"
            >
              Welcome, {this.state.data.name}!
            </span>
            <span style={{ padding: "10px" }}>{this.state.data.bio}</span>
          </Row>
          <Row
            className="justify-content-between borderBottomRow hoverRow"
            style={{ padding: "10px" }}
          >
            <p>
              <span style={{ color: "grey", fontWeight: "bolder" }}>
                Connections
              </span>
              <span style={{ fontWeight: "bolder" }}>Grow your network</span>
            </p>

            <span class="badge" style={{ color: "blue" }}>
              28
            </span>
          </Row>
          <Row className="borderBottomRow hoverRow">
            <div style={{ padding: "10px" }}>
              <p>Access exclusive tools & insights</p>
              <b className="hoverTextBold">
                <FcKey /> Try premium for free
              </b>
            </div>
          </Row>
          <Row className="hoverRow" style={{ padding: "10px" }}>
            <div className="d-flex">
              <BsFillBookmarkFill style={{ color: "grey" }} /> <b>My items</b>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default LeftSideBar;
