import React from "react";
import { Container, ListGroup, Row, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";

class HomeSideBar extends React.Component {
  state = {
    people: [],
  };

  fetchProfiles = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
            "Content-type": "application/json",
          },
        }
      );

      const profiles = await response.json();

      console.log("right after the fetch", profiles);

      if (response.ok) {
        this.setState({
          people: profiles,
        });
        console.log("from the fetch", this.state.people);
      } else {
        console.log("inside the else of Fetch");
      }
    } catch (e) {
      console.log("outside the try block", e);
    }
  };

  componentDidMount = async () => {
    this.fetchProfiles();
  };

  render() {
    const viewedPeople = this.state.people.slice(0, 5);
    const knowPeople = this.state.people.slice(6, 11);
    console.log("in the render", knowPeople);

    return (
      <>
        <Container fluid className="sideBarCon">
          <Row>
            <div className="sideBarRow">
              <ListGroup variant="flush" style={{ borderRadius: "10px" }}>
                <ListGroup.Item className="d-flex justify-content-between align-content-center my-auto">
                  {" "}
                  <p>Edit public profile {"&"} URL</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                  </svg>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-content-center">
                  {" "}
                  <p>Add profile in another language</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                  </svg>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Row>

          <Row>
            <div className="sideBarRow d-flex justify-content-center">
              <img
                className="jobImg w-100"
                src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                alt=""
              />
            </div>
          </Row>

          <Row>
            <div className="sideBarRow" style={{ minHeight: "fit" }}>
              <p className="p-3" style={{ fontWeight: "bold" }}>
                People also viewed
              </p>

              {viewedPeople.map((p) => (
                <Row
                  className="d-inline-flex p-4 m-0"
                  style={{ height: "50px" }}
                >
                  <Col xs={4} className="d-flex sideImgCol">
                    <div className="d-flex">
                      <img
                        className="img-fluid h-100 w-100"
                        src={p.image}
                        style={{ borderRadius: "80px" }}
                      />
                    </div>
                  </Col>
                  <Col xs={8} className="sideBarPeople">
                    <p>
                      {p.name} {p.surname}
                    </p>
                    <p>{p.title}</p>
                    <Button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        border: "1px solid grey",
                        color: "grey",
                        fontWeight: "600",
                        backgroundColor: "white",
                      }}
                    >
                      {" "}
                      Connect{" "}
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
          </Row>

          <Row>
            <div className="sideBarRow">
              <p className="p-3" style={{ fontWeight: "bold" }}>
                People you may know
              </p>

              {knowPeople.map((p) => (
                <Row
                  className="d-inline-flex p-4 m-0"
                  style={{ height: "50px" }}
                >
                  <Col xs={4} className="d-flex sideImgCol">
                    <div className="d-flex">
                      <img
                        className="img-fluid h-100 w-100"
                        src={p.image}
                        style={{ borderRadius: "80px" }}
                      />
                    </div>
                  </Col>
                  <Col xs={8} className="sideBarPeople">
                    <p>
                      {p.name} {p.surname}
                    </p>
                    <p>{p.title}</p>
                    <Button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        border: "1px solid grey",
                        color: "grey",
                        fontWeight: "600",
                        backgroundColor: "white",
                      }}
                    >
                      {" "}
                      Connect{" "}
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
          </Row>

          <Row>
            <div className="sideBarRow" style={{ minHeight: "fit" }}>
              <p className="p-3" style={{ fontWeight: "bold" }}>
                People also viewed
              </p>

              {viewedPeople.map((p) => (
                <Row
                  className="d-inline-flex p-4 m-0"
                  style={{ height: "50px" }}
                >
                  <Col xs={4} className="d-flex sideImgCol">
                    <div className="d-flex">
                      <img
                        className="img-fluid h-100 w-100"
                        src={p.image}
                        style={{ borderRadius: "80px" }}
                      />
                    </div>
                  </Col>
                  <Col xs={8} className="sideBarPeople">
                    <p>
                      {p.name} {p.surname}
                    </p>
                    <p>{p.title}</p>
                    <Button
                      style={{
                        width: "90px",
                        borderRadius: "30px",
                        border: "1px solid grey",
                        color: "grey",
                        fontWeight: "600",
                        backgroundColor: "white",
                      }}
                    >
                      {" "}
                      Connect{" "}
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
          </Row>

          <Row>
            <div className="sideBarRow">
              <p className="p-3" style={{ fontWeight: "bold" }}>
                Claudia, learn what hiring managers look for in answers to top
                interview questions
              </p>

              <Row className="d-inline-flex p-4 m-0" style={{ height: "50px" }}>
                <Col xs={4} className="d-flex sideImgCol">
                  <div className="d-flex">
                    <img className="img-fluid h-100 w-100" src="" alt="" />
                  </div>
                </Col>
                <Col xs={8} className="sideBarPeople">
                  <p>
                    {" "}
                    Tell me about a time you surpassed people's expectations.{" "}
                  </p>
                </Col>
              </Row>
              <Row className="d-inline-flex p-4 m-0" style={{ height: "50px" }}>
                <Col xs={4} className="d-flex sideImgCol">
                  <div className="d-flex">
                    <img className="img-fluid h-100 w-100" src="" alt="" />
                  </div>
                </Col>
                <Col xs={8} className="sideBarPeople">
                  <p>
                    {" "}
                    Tell me about a time you had to manage conflicting
                    priorities.{" "}
                  </p>
                </Col>
              </Row>
              <Row className="d-inline-flex p-4 m-0" style={{ height: "50px" }}>
                <Col xs={4} className="d-flex sideImgCol">
                  <div className="d-flex">
                    <img className="img-fluid h-100 w-100" src="" alt="" />
                  </div>
                </Col>
                <Col xs={8} className="sideBarPeople">
                  <p> Describe your leadership style. </p>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(HomeSideBar);
