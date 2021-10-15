
import ProfileSkill from "./ProfileSkill";
import Deshboard from "./hicards/DeshBoard";
import FirstCard from "./hicards/FirstCard";
import SecondCard from "./hicards/SecondCard";
import SideBar from "./SideBar";
import { Row, Col, Button, Container } from "react-bootstrap";
import ProfileJumbotron from "./ProfileJumbotron";
 import AddExperience from "./AddExperience"; 
import React from "react";
import ExperienceEducation from "./ExperienceEducation";
import { withRouter } from "react-router";
import LeftSideBar from "./Homepage/LeftSideBar";


class ProfilePage extends React.Component {
 

  render() {
    console.log("props are", this.props)
    return (
      <Row>
        {/* <Col xs={12} md={4}> 
                     
        </Col> */}
        <Col xs={12} md={8}>
          <Container className="d-flex flex-column">
            <ProfileJumbotron
              userId={this.props.match.params.userId} /* className="justify-content-end" */
            />
            <FirstCard />
            <SecondCard />
            <Deshboard />
            <ProfileSkill />
            <ExperienceEducation userId= {this.props.match.params.userId}/>

          
          </Container>
        </Col>
        <Col xs={12} md={4}>
          <SideBar />
        </Col>
      </Row>
    );
  }
}

export default withRouter(ProfilePage)
