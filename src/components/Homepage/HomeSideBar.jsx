import React from "react";
import { Container, ListGroup, Row, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import linkedinlogo from "./linkedin_logo.png";
import { AiOutlinePlus } from "react-icons/ai";
import logo from "./logo.png";



class HomeSideBar extends React.Component {
  state = {
    people: [],
  };

  fetchProfiles = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
            "Content-type": "application/json",
          },
        }
      );

      const profiles = await response.json();

      console.log("right after the fetch", profiles);

      if (response.ok) {
        this.setState({
          people: profiles,
        });
        console.log("from the fetch", this.state.people);
      } else {
        console.log("inside the else of Fetch");
      }
    } catch (e) {
      console.log("outside the try block", e);
    }
  };

  componentDidMount = async () => {
    this.fetchProfiles();
  };

  render() {
    const viewedPeople = this.state.people.slice(0, 3);
    const knowPeople = this.state.people.slice(6, 11);
    console.log("in the render", knowPeople);

    return (
      <>
        <Container fluid className="sideBarCon">
        <Row className="row ">
            <div className="sideBarRow" style={{ minHeight: "fit" ,width:'350px'}}>
              <p className="p-3" style={{ fontWeight: "bold" }}>
               Add to your feed
              </p>

              {viewedPeople.map((p) => (
                <Row
                  className="d-inline-flex p-4 m-0"
                  style={{ height: "170px" }}
                >
                  <Col xs={4} className="d-flex sideImgCol">
                    <div className="d-flex" style={{marginBottom:'28rem'}}>
                      <img
                        className="img-fluid h-100 w-100 "
                        src={logo}
                        style={{ borderRadius: "80px"}}
                      />
                    </div>
                  </Col>
                  <Col xs={8} className="sideBarPeople" style={{marginBottom:'20px'}}>
                    <p className="title" style={{fontsize:'5px'}}>
                      {p.name} {p.surname}
                    </p>
                    <p style={{fontsize:'8px'}}>{p.title}</p>
                    <Button
                      style={{
                        width: "130px",
                        borderRadius: "30px",
                        border: "1px solid grey",
                        color: "grey",
                        fontWeight: "400",
                        backgroundColor: "white",
                        fontsize:"10px",
                       
                      }}
                    >
                  <AiOutlinePlus/>FOLLOW
                    </Button>
                   
                  </Col>
                  
                </Row>
              ))}
            </div>
            </Row>
        

         
          <footer className="footer mr-2 mt-4">
        <div className="container-fluid">
          <div className="col-md-12" id="footer-font">
            <div className="row ">
              <p>About Accessibility Help Center </p>

            </div>
            <div className="row ">
              <p>Impressum Privacy and Terms</p>
             
            </div>
            <div className="row ">
              <p>Ad Choices Advertising Business Services</p>
             
            </div>
            <div className="row " style={{fontsize:'5px'}}>
             
              <p>Get the Linkedin app More</p>
            </div>
           

            <div className="row">
              <img
                alt=""
                
                src={linkedinlogo}
                className="footerlogo d-inline-block align-top mr-1 ml-1" style={{width:'20px',height:'20px'}}
              />
              <p> Corporation © 2021</p>
            </div>
          </div>
        </div>
      </footer>
      
        </Container>
      </>
    );
  }
}

export default withRouter(HomeSideBar);
