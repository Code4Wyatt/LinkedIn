import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import {Row, Col} from 'react-bootstrap'

class AddExperience extends React.Component {
  state = {
    workExperience: {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  }
  };

  handleInput = (propertyName, value) => {
    this.setState({
      workExperience: {
            ...this.state.workExperience,
            [propertyName]: value
        }
    })
}

handleSubmit = async (e) => {
  e.preventDefault()
  
  console.log(this.state.workExperience)
  let id = "6163fc59a890cc0015cf07ed"
  try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/:${id}/experiences`, {
          method: 'POST',
          body: JSON.stringify(this.state.workExperience),
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0',
            'Content-type': 'application/json',
              
          }
      })
      console.log(response)
      if (response.ok) {
          alert('Work experience successfully added!')
          this.setState({
              // this is the initial state of my form!
              workExperience: {
                role: "",
                company: "",
                startDate: "",
                endDate: "",
                description: "",
                area: "",
              }
          })
      } else {
          alert('Something went wrong ')
      }
  } catch (error) {
      console.log(error)
  }
}

  
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Add experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form.Group>
              <Form.Label className="workFormLabel">Title° </Form.Label>
              <Form.Control
                type="text"
                onChange={e => this.handleInput('role', e.target.value)}
                value={this.state.workExperience.role}
                placeholder="Ex: Full-Stack Developer"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="workFormLabel" className="workFormLabel">Employment type</Form.Label >
              <Form.Control as="select">
                <option>Please select</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Apprenticeship</option>
                <option>Seasonable</option>
              </Form.Control>
              <Form.Label >Country-specific employment types </Form.Label>
               <div className="workFormLabel">
                <a href="#" style={{ fontWeight: "bold" }}>
                 
                  Learn more
                </a>
              </div> 
            </Form.Group>
          <Form.Group>
              <Form.Label className="workFormLabel">Company name° </Form.Label>
              <Form.Control
                type="text"
                onChange={e => this.handleInput('company', e.target.value)}
                value={this.state.workExperience.company}
                placeholder="Ex: Microsoft"
              />
            </Form.Group>
              <Form.Group>
              <Form.Label className="workFormLabel">Location </Form.Label>
              <Form.Control
                type="text"
                onChange={e => this.handleInput('area', e.target.value)}
                value={this.state.workExperience.area}
                placeholder="Ex: London, United Kindom"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="workFormLabel">Start date°</Form.Label>
                  <Form.Control 
                    as="select"
                  >
                    <option>Month</option>
                    <option>Jenuary</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                <Form.Label className="workFormLabel invLabel"> aa </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={e => this.handleInput('startDate', e.target.value)}
                    value={this.state.workExperience.startDate}
                    placeholder="Year"
                  />
                </Form.Group>
              </Col>
            </Row>
           <Row> 
              <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="workFormLabel">End date°</Form.Label>
                  <Form.Control as="select">
                    <option>Month</option>
                    <option>Jenuary</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                <Form.Label className="workFormLabel invLabel">aa</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={e => this.handleInput('endDate', e.target.value)}
                    value={this.state.workExperience.endDate}
                    placeholder="Year"
                  />
                </Form.Group>
              </Col>
            </Row>
             <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="workFormLabel">Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
              onChange={e => this.handleInput('description', e.target.value)}
              value={this.state.workExperience.description}
              />
            </Form.Group>
            
            {/*  <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Example file input"
              />
            </Form.Group>  */}
         
        
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

export default AddExperience;

