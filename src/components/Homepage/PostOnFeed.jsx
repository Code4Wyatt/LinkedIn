import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddPost from './AddPost'

class PostOnFeed extends React.Component {
    state = {
        showModal: false,
      };
    
      showModal = () => this.setState({ showModal: true });
      closeModal = () => this.setState({ showModal: false });

  render() {
    console.log("post on feed", this.props.userId)
    return (
      <>
        <Container>
          <Row className="homeContainer">
            <Row
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                paddingRight: "10px",
                width: "100%"
              }}
            >
              <Col xs={2}>
              
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="CornflowerBlue"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "15px" }}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Col>
              <Col xs={10}>
                <Button variant="light" id="postModalBtn" onClick={this.showModal}>Start a post</Button>
                {this.state.showModal ? (
              <AddPost
                closeModal={this.closeModal}
                showModal={this.state.showModal}
                handleSubmit={this.handleSubmit}
                userId={this.props.userId}
              />
            ) : null} 
              </Col>
            </Row>
            <Row
              className="justify-content-between"
              style={{ marginLeft: "15px", marginRight: "15px", width: '100%', marginBottom: '5px' }}
            >
              <div className="d-inline-flex hoverIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="DeepSkyBlue"
                  class="bi bi-card-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                </svg>
                <p className="postFileName">Photo</p>
              </div>
              <div className="d-inline-flex hoverIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="LimeGreen"
                  class="bi bi-play-btn-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <p className="postFileName">Video</p>
              </div>
              <div className="d-inline-flex hoverIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="Orange"
                  class="bi bi-calendar-date"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <p className="postFileName">Event</p>
              </div>
              <div className="d-inline-flex hoverIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="Salmon"
                  class="bi bi-card-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                </svg>
                <p className="postFileName">Write article</p>
              </div>
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}

export default PostOnFeed;
