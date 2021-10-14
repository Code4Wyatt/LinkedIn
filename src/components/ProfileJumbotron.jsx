import React, {useEffect, useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  DropdownButton,
  ListGroup,
} from "react-bootstrap";
import UploadPic from "./unploadPicture/UploadPic";

function ProfileJumbotron(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showModal, setshowModal] = useState(false);
  
  
  const idHeader = () => {
    const claudiaToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0";
    const paulToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q";
    const claudiaId = "6163fc59a890cc0015cf07ed";
  };

  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0",
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setData( data );
        console.log("after the fetch", data);
      }
    } catch (error) {
      console.log(error.message);
      setError({ error: true });
    }
  }

  const toggleSelected = (e) => e.preventDefault;

  useEffect(() => {
    fetchProfiles();

   
  }, [data])
  /* toggleShowModel = () => ({ showModal: e.target.value }); */

  
    return (
      <Container className="homeContainer">
        <Row style={{paddingBottom: '0'}}>
        <img
              className="img-fluid w-100 sideBarBanner"
              alt=""
              src="../assets/profilebanner.png"
            />
             <img
              className=" profile-picture"
              alt=""
              src={data.image}
            
            />
          </Row>
          <Row style={{padding: "15px", paddingBottom: '0', paddingTop: '0'}}>
          <div>
          <p>{data.name} {data.surname}</p>
          <p className="mb-2 text-muted"> {data.bio}</p>
          <p className="text-muted"> {data.area}{" "}
                          <a className="contact-info-link" href="#">
                            Contact Info
                          </a></p>
          </div>
            </Row>
            <Row style={{padding: "15px", paddingBottom: '0'}}>
            <div className="col-xs-4">
                      <div>
                        <div>
                          <img
                            className="experiences-img"
                            src="./assets/striveschool.jfif"
                            alt=""
                          />
                          Strive School
                        </div>
                      </div>
                      
                    </div>
            </Row>
            <Row style={{padding:'15px',  paddingBottom: '0'}}> 
            <div className="mb-2 connections-title d-flex">
            <p className="connections-amount">500+</p> connections
            </div>

            </Row>
            <Row style={{padding: '15px',  paddingBottom: '0'}}>

            <div className="d-flex">
                
                    <a className="mutual-connections-link text-muted" href="#">
                      <p className="mutual">
                        <b>12 mutual connections:</b> Tobia De Angelis, Stefano
                        Casasasola and 10 others
                      </p>
                    </a>
                  </div>
            </Row>
            <Row  style={{padding: '15px'}} >

          {/*   <div className=" d-flex justify-content-between" style={{flexDirection: "row", justifyContent: 'space-between!important'}}> */}
                  <Button variant="primary buttons" style={{marginRight: '10px'}}>Connect</Button>
                  <Button variant="outline-dark buttons" style={{marginRight: '10px'}}>Message</Button>
                  <DropdownButton
                    align="end"
                    id="dropdown-menu-align-end"
                    title="Add Selection"
                  >
                    <Dropdown.ItemText>Add Selection</Dropdown.ItemText>
                    <Dropdown.Item className="dropdown" as="button">
                      <div className="justify-content-space-between btns">
                        <p>Intro</p>{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                        </div>
                      </Dropdown.Item>
                      <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                      </ListGroup>
                      <Dropdown.Item as="button">
                        Featured{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        /*onclick={(e) => {
                        this.toggleSelected;
                      }} */
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Additional information{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                      Supported languages{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Dropdown.Item>
                  </DropdownButton>
                {/* </div> */}
            </Row>
      </Container>
    );
  }

export default ProfileJumbotron;
