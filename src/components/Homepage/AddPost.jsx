import React from "react";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import UploadPostPic from './UploadPostPic'


class AddPost extends React.Component {
  state = {
    text: "",
    showPhotoModal: false,
  };
  

  showPhotoModal = () => this.setState({ showPhotoModal: true });
  closePhotoModal = () => this.setState({ showPhotoModal: false });

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify({text: this.state.text}),
          headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0',
            'Content-type': 'application/json',

          }
        }
      );

      if (response.ok) {
        alert("Post successfully added!");
        this.setState({ text: "" });
      } else {
        alert("Something went wrong ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchProfile = async () => {};

  render() {
    console.log("in add post", this.props.profile);
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Create a post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={1}>
                <img
                  alt=""
                  src={this.props.profile.image}
                  width={55}
                  width={55}
                  style={{borderRadius: '80px'}}
                />
              </Col>
              <Col xs={5} className="d-inline-flex" style={{flexDirection: 'column'}}>
                <p className="d-inline-flex mb-0" style={{fontWeight: 'bolder'}}>
                  {this.props.profile.name} {this.props.profile.surname}
                </p>
                <Button className="addPost-btn d-inline-flex mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={13}
                    fill="currentColor"
                    className="bi bi-globe mr-2 mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                  Anyone
                </Button>
              </Col>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            
              <Form.Control
                id='textAreaPost'
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
                onChange={(e) => this.setState({ text: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
         
          <Modal.Footer className="d-flex justify-content-between">
          <div className="d-inline-flex hoverIcons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="DeepSkyBlue"
                  class="bi bi-card-image"
                  viewBox="0 0 16 16"
                  onClick= {this.showPhotoModal}
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                </svg>
                <p className="postFileName">Photo</p>
              </div>
              {this.state.showPhotoModal ? (
              <UploadPostPic
                closeModal={this.closePhotoModal}
                showModal={this.state.showPhotoModal}
               /*  handleSubmit={this.handleSubmit}
                profile={this.props.profile} */
              />
            ) : null} 
            <Button
             id="submit-addpost"
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddPost;
