import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import { Row, Col, Button } from "react-bootstrap";
import ProfileJumbotron from "./components/ProfileJumbotron";
import AddExperience from "./components/AddExperience";
import React from "react";

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
          <Row>
            <Col xs={12} md={8}>
              <ProfileJumbotron />
              <Button onClick={this.showModal}>Add experience</Button>

              {this.state.showModal ? (
                <AddExperience
                  closeModal={this.closeModal}
                  showModal={this.state.showModal}
                  handleSubmit={this.handleSubmit}
                />
              ) : null}
            </Col>
            <Col xs={12} md={4}>
              <SideBar />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default App;
