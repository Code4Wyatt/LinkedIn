import React from 'react'
import LinkedinLogo from "../data/linkedin_logo.png";
import { Container, Row, Form } from 'react-bootstrap'
import { IoSettingsSharp } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";

import "../Footer.css";


export default function ProfileFooter() {
    return (
        <>
        <div id='footer'>
            <Container>
                <Row><div id ='linked'>Linked<img src={LinkedinLogo} alt=""style={{width: '20px', height:'20px',marginBottom:'4px'}} /></div></Row>
                <Row className='pb-2'>
                    <div className='listgroup'>
                        <ul>
                            <li>About</li>
                            <li>Community Guidelines</li>
                            <li>Privacy & Terms</li>
                            <li>Sales Solutions</li>
                            <li>Safety Center</li>
                        </ul>
                        <ul>
                            <li>Accessibiliy</li>
                            <li>Careers</li>
                            <li>Ad Choices</li>
                            <li>Mobile</li>
                        </ul>
                        <ul>
                            <li>Talent Solution</li>
                            <li>Marketing Solutions</li>
                            <li>Advertising</li>
                            <li>Small Businesses</li>
                        </ul>
                        <div className='settings'>
                            <div className='d-flex'>
                                <div><BsQuestionCircleFill /></div>
                                <div>
                                    <h5>Questions?</h5>
                                    <p>Visit our help center.</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div><IoSettingsSharp /></div>
                                <div>
                                    <h5>Manage your account and privacy</h5>
                                    <p>Go to your Settings.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Form.Group controlId="exampleForm">
                                <Form.Label>Select language</Form.Label>
                                <Form.Control as="select">
                                    <option>English</option>
                                    <option>Italiano</option>
                                    <option>Dutch</option>
                                    <option>Spanish</option>
                                    <option>Russian</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                </Row>
                <Row className='copyright'><p>LinkedIn Corporation © 2021</p></Row>
               
            </Container>
           

        </div>
       
         </>
    )
}