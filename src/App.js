
   
import ProfileNavbar from "./components/ProfileNavbar";
import ProfileFooter from "./components/ProfileFooter";
import { Button, Form, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Homepage/Home";


class App extends React.Component {
  state = {
    ourProfile: "",
  };

  handleSubmit = (e) => this.setState({ ourProfile: e.target.value });



  render() {
    return (
      <>
       <div className="App">
          <ProfileNavbar userId={this.state.ourProfile} />
          <Router>
            <Switch>
              <Route path="/home/:userId">
                <Home />
                </Route>
            <Route path="/profile/:userId">
                <ProfilePage />
              </Route>
              <Route path="/">
                <Container className="loginContainer">
                  <Form id="loginForm">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          this.setState({ ourProfile: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Link
                      to={"/profile/" + this.state.ourProfile}
                      className="btn btn-primary"
                      style={{
                        width: "100px",
                        marginTop: "20px",
                        color: "blue",
                      }}
                      onClick={(e) =>
                        alert(
                          `${this.state.ourProfile} profile is about to be shown`
                        )
                      }
                    >
                      Login
                    </Link>
                    <Link
                      to={"/home/" + this.state.ourProfile}
                      className="btn btn-primary"
                      style={{
                        width: "100px",
                        marginTop: "20px",
                        color: "blue",
                      }}
                      onClick={(e) =>
                        alert(
                          `${this.state.ourProfile} profile is about to be shown`
                        )
                      }
                    >
                      Home
                    </Link> 
                  </Form>
                </Container>
              </Route>
              
             
            </Switch>
          </Router>
          <ProfileFooter />
        </div>
      </>
    );
  }
}

export default App;
