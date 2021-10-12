import React from "react";
import "../Skill.css";
import { BsPencil } from "react-icons/bs";
import { Card, Button,Modal} from "react-bootstrap";
import { useState, useEffect } from "react";


export default function ProfileSkill() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="contaier ml-9" id="ProfileSkill">
      <div className="row">
        <div className="col-4">
          <Card className="skill-card" style={{ width: "50rem" }}>
            <div className="skill-section">
              <h5 className="ml-4 " style={{ marginTop: "20px" }}>
                Skills & endorsements
              </h5>
              <Button
                className="btn ml-4"
                style={{ color: "rgb(79, 113, 206)", fontWeight: "700" ,background:'white'}}
              >
                Take Skill quiz
              </Button>
              <Card.Body>
                <div className="d-flex">
                  <div className="skill-content-section">
                    <h6>Customer Service Operations</h6>
                  </div>
                </div>
              </Card.Body>
              <hr />
              <Card.Body>
                <div className="d-flex">
                  <div className="skill-content-section">
                    <h6>Customer Service System</h6>
                  </div>
                </div>
              </Card.Body>
              <hr />
            </div>
            <div className="education-section">
              <Card.Body>
                <div className="d-flex">
                  <div className="skill-content-section">
                    <h6>Knowledge Management</h6>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>
        </div>
        <div className="col-6 mt-4 mr-6">
          <div className="row">
            <div className="col-3 " id="add-new">
            <h6 variant="primary" onClick={handleShow}>
            Add a new skill
      </h6>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div className="col-2">
        <span id="editprofilediv">
          <BsPencil className="editprofileicon"onClick={handleShow} />
        </span>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    </div>
    </div>
      </div>
   
  );
}
