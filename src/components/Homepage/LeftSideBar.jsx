import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcKey } from "react-icons/fc";
import { BsFillBookmarkFill } from "react-icons/bs";

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
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}`,
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
    /* try {
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
    } */
  }

  render() {
    return (
      <>
        <Card className="leftSideBarCard" style={{ width: "14rem" }}>
          <Card.Img
            className="sideBarBanner"
            variant="top"
            src="../assets/profilebanner.png"
          />
          <Card.Img
            className="sideBarAvatar"
            variant="top"
            src="../assets/profilepicture.png"
          />
          <Card.Body className="leftSideBarCard">
            <div class="leftSideBarTitles">
              <Card.Title>
                {this.state.data.name} {this.state.data.surname}{" "}
              </Card.Title>
              <Card.Title>{this.state.data.bio}</Card.Title>
              <hr />
            </div>
            <div className="leftSideBarButtonsSection">
              <div>
                <a href="/connections">
                  <h5 className="connections-btn">Connections</h5>
                  <h7 className="connections-btn-expand">
                    Expand your network
                  </h7>
                </a>
              </div>
              <hr />
              <a href="/connections">
                <div className="access-tools-btn">
                  <p>Access exclusive tools & insights</p>
                  <b>
                    <FcKey /> Try premium for free
                  </b>
                </div>
              </a>
              <hr />
              <div className="my-items-btn d-flex">
                <BsFillBookmarkFill /> <b>My items</b>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LeftSideBar;
