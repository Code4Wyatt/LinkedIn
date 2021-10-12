import React from 'react'
import '../Skill.css'
import { Card ,Button} from "react-bootstrap";
export default function ProfileSkill() {

    return (
        <div className="contaier ml-9" id='ProfileSkill'>
           <Card className="skill-card" style={{ width: "50rem"}}>
        <div className="skill-section ">
          <h5 className="ml-4">Skills & endorsements</h5>
          <Button className="btn ml-4">Take Skill quiz</Button>
          <Card.Body>
            <div className="d-flex">
             
              <div className="skill-content-section">
                 <h6>Customer Service Operations</h6>
                     </div>
                <hr />
                </div>
          </Card.Body>
          <Card.Body>
            <div className="d-flex">
              
              <div className="skill-content-section">
                    <h6>Customer Service System</h6>
                     </div>
                 <hr />
                 </div>
          </Card.Body>
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
    )
}


