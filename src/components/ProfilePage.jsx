
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
  state = {
    showModal: false,
  };

  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    console.log("props are", this.props.match.params.userId)
    return (
      <Row>
        <Col xs={4}> {/* here leftside bar */}
                     
                        </Col>
        <Col xs={12} md={8}>
          <Container className="d-flex flex-column">
            <ProfileJumbotron
              userId={this.props.match.params.userId} /* className="justify-content-end" */
            />
            <FirstCard />
            <SecondCard />
            <Deshboard />
            <ProfileSkill />
            <ExperienceEducation />

            <Button onClick={this.showModal}>Add experience</Button>

           {this.state.showModal ? (
              <AddExperience
                closeModal={this.closeModal}
                showModal={this.state.showModal}
                handleSubmit={this.handleSubmit}
              />
            ) : null} 
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
