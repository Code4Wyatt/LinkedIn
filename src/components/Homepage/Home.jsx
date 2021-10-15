import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostOnFeed from "./PostOnFeed";
import { withRouter } from "react-router";
import LeftSideBar from "./LeftSideBar";
import "./Home.css";
import SinglePost from "./SinglePost";
import Posts from "./Posts";
import HomeSideBar from "./HomeSideBar";

class Home extends React.Component {

    state= {
        profile: ""
    }

    fetchProfile = async () => {
        try {
        
            const response = await fetch(
              `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.userId}`,  { headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0',
                'Content-type': 'application/json',
    
              }}
            );
      
            const profile = await response.json();
      
            console.log("right after the fetch", profile);
      
            if (response.ok) {
             
              this.setState({
                profile: profile,
              });
              console.log("from the fetch", this.state.profile);
            } else {
              console.log("inside the else of Fetch");
            }
          } catch (e) {
       
            console.log("outside the try block", e);
          }

    }

    componentDidMount = async () => {
        this.fetchProfile()
    }

  render() {
    console.log(this.props.match.params.userId);
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              {" "}
              {/* left bar and posts column */}
              <Row>
                <Col xs={12} lg={4}>
                  {" "}
                  {/* here leftside bar */}
                  <LeftSideBar profile={this.state.profile} />
                </Col>
                <Col xs={12} lg={8}>
                  {" "}
                  {/* here we have posts */}
                  <PostOnFeed profile={this.state.profile} />
                  <Posts />
                 
                </Col>
              </Row>
              ssdad{/* ¢ */}
            </Col>
            <Col xs={12} lg={4}>
              {" "}
              {/* sideBar col */}
              <HomeSideBar />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withRouter(Home);
