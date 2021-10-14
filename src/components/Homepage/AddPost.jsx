import React from "react";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";

class AddPost extends React.Component {
  state = {
    text: "",
    
  };
  han;


  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.text),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
            "Content-type": "application/json",
          },
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

  fetchProfile = async () => {
    
  }

  render() {
    console.log("in add post", this.props.profile)
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
                src=  {this.props.profile.image}
                width={20}
                width={20}
               />
              </Col>
              <Col xs={5}>
               <p className="d-inline-flex">{this.props.profile.name} {this.props.profile.surname}</p>
              </Col>
              </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
                onChange={(e) => this.setState({ text: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddPost;
