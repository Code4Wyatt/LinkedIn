import ProfileNavbar from "./components/ProfileNavbar";
import ProfileFooter from "./components/ProfileFooter";
import ProfileSkill from "./components/ProfileSkill";
import Deshboard from "./components/hicards/DeshBoard";
import FirstCard from "./components/hicards/FirstCard";
import SecondCard from "./components/hicards/SecondCard";
import NewFeedSection from "./components/NewFeedSection";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import { Row, Col, Button, Container } from "react-bootstrap";
import ProfileJumbotron from "./components/ProfileJumbotron";
import AddExperience from "./components/AddExperience";
import React from "react";
import ExperienceEducation from "./components/ExperienceEducation";


class App extends React.Component {
  state = {
    showModal: false,
  
  };

  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });


  render() {
    return (
      <>
        <div className="App">
          <ProfileNavbar />
          <Row>
            <Col xs={12} md={8}>
              <Container className="d-flex flex-column">
                <ProfileJumbotron />
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
          <NewFeedSection />
          <ProfileFooter />
        </div>
      </>
    );
  }
}

export default App;
