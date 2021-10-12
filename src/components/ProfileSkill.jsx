import React from 'react'
import '../Skill.css'
import { BsPencil } from "react-icons/bs";
import { Card ,Button} from "react-bootstrap";
export default function ProfileSkill() {

    return (
        <div className="contaier ml-9" id='ProfileSkill'>
            <div className="row">
                <div className="col-4">
           <Card className="skill-card" style={{ width: "50rem"}}>
        <div className="skill-section">
          <h5 className="ml-4 "style={{marginTop:'20px'}}>Skills & endorsements</h5>
          <Button className="btn ml-4" style={{color:'rgb(79, 113, 206)', fontWeight:'700'}}>Take Skill quiz</Button>
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
              <div  className="col-3 "id="add-new">
              <a href="" style={{color:'rgb(61, 60, 60)',textdecoration:'none'}}>Add a new skill</a>
              </div>
              <div  className="col-2">
              <a href="" id="pen-icon"style={{color:'rgb(61, 60, 60)',textdecoration:'none'}}><BsPencil/></a>
              </div>
              
              </div>     
   </div>
      </div>
      
        </div>
    )
}


