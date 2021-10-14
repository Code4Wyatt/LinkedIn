import { Card, Col, Button, Row, Container, Form } from "react-bootstrap";
import "./Home.css";
import logo from "./logo.png";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";
import React from 'react'

class SinglePost extends React.Component {

  state= {
    post: ""
  }

  fetchSinglePost = async () => {

    try {
        
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.postId} `,  { headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0',
          'Content-type': 'application/json',

        }}
      );

      const data = await response.json();

      console.log("right after the fetch", data);

      if (response.ok) {
       
        this.setState({
          post: data,
        });
        console.log("from the fetch", this.state.post);
      } else {
        console.log("inside the else of Fetch");
      }
    } catch (e) {
 
      console.log("outside the try block", e);
    }
  }

  componentDidMount = async () => {
    this.fetchSinglePost()
  }
  
  render() {
    console.log(this.props.postId)

  return (
    
    <div>
      <Container className="homeContainer">
        <Card
          className="mt-3 mb-3"
          style={{ width: "100%", borderColor: "white" }}
        >
          <Card.Body>
            <Row>
              <Col className="col-md-2 mr-2 p-0">
                <Card.Img
                  variant="top-left"
                  className="shopifylogo"
                  style={{ borderRadius: "15px" }}
                  src={logo}
                  width={40}
                  height={40}
                />
              </Col>
              <Col className="col-md-9">
                <Card.Subtitle className="shopifysubtitle cardtitle mb-1">
                  {this.state.post.username}
                </Card.Subtitle>
                <Card.Text className="shopifytitle text-muted small">
                  1,200,223 followers
                  <br />
                  Promoted
                </Card.Text>
              </Col>
            </Row>

            <Row>
              <Col className="col-md-12">
                <Card.Text className="shopifytext mt-2">
                  {this.state.post.text}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
         {/*  <Card.Img
            variant="bottom"
            style={{ marginBottom: "30px", width: "200px", height: "30%" }}
            src={logo}
          /> */}
          <Card.Title>
            <div
              id="interaction"
              className="d-flex justify-content-between"
            >
              <Button className="midbutton pb-3" variant="light">
                <AiOutlineLike style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
                Like
              </Button>

              <Button className="midbutton pb-3" variant="light">
                <BiCommentDetail style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
                Comment
              </Button>
              <Button className="midbutton pb-3" variant="light">
                <RiShareForwardLine
                  style={{ color: "#6b6b6b" }}
                  size="1.3rem"
                />{" "}
                Share
              </Button>
              <Button className="midbutton pb-3" variant="light">
                <RiSendPlaneFill style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
                Send
              </Button>
            </div>
          </Card.Title>
          <div>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Add a Comment..." />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </Container>
    </div>
  );
}
}

export default SinglePost
