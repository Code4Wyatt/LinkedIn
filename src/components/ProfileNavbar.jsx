import React from 'react'
import '../Navbar.css'
import LinkedinLogo from "../data/linkedin_logo.png";
import { Navbar, Nav, NavDropdown, Form, FormControl, Row ,InputGroup,Button} from 'react-bootstrap'
import { AiTwotoneHome } from 'react-icons/ai'
import { ImUsers} from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";



export default function ProfileNavbar() {



    return (
        <div id='ProfileNavbar'>
            <Navbar className='justify-content-between align-items-center p-0 flex-nowrap mt-2'>
                <Row className=' align-items-center flex-nowrap' style={{marginLeft:'160px'}}>
                    <Navbar.Brand > <img src={LinkedinLogo} alt="logo"style={{width: '40px',marginTop:'12px'}} /> </Navbar.Brand>
                    
                    <InputGroup className="flex-row mb-2 mt-4">
                <InputGroup.Text
                  style={{
                    height: "2.4rem",
                    width: "2.5rem",
                    borderRadius: "0.25rem 0px 0px 0.25rem",
                    backgroundColor: "#EEF3F8",
                    borderRight: 0,
                    paddingLeft: "1rem",
                    paddingRight: "0",
                  }}
                >
                 <IoSearchSharp />
                </InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Search" />
              </InputGroup>
                </Row>
                <Row  style={{marginRight:'160px'}}>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='menuItems'>
                            
                            <div  style={{ fontSize: '30px' }}><AiTwotoneHome   /></div>
                                <Nav.Link>Home</Nav.Link>
                            </div>
                            
                            <div className='menuItems'>
                              <div style={{ fontSize: '30px' }}><ImUsers /></div>
                                <Nav.Link>My Network</Nav.Link>
                            </div>
                            <div className='menuItems'>
                               <div  style={{ fontSize: '30px' }}> <IoIosBriefcase /></div>
                                <Nav.Link>Jobs</Nav.Link>
                            </div>
                            <div className='menuItems'>
                              <div   style={{ fontSize: '30px' }}><RiMessage3Fill /></div>
                                <Nav.Link>Messaging</Nav.Link>

                            </div>
                            <div className='menuItems'>
                               <div  style={{ fontSize: '30px' }}> <FaBell /></div>
                                <Nav.Link>Notifications</Nav.Link>
                            </div>
                            <div className='menuItems line'>
                           
                                <NavDropdown title="Me" id="navbarScrollingDropdown">
                                    <Button id="Nav button">View Profile</Button>
                                    <NavDropdown.Item href="one">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="two">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="three"> Help</NavDropdown.Item>
                                    <NavDropdown.Item href="six"> Language</NavDropdown.Item>
                                    <NavDropdown.Item href="four">manage</NavDropdown.Item>
                                    <NavDropdown.Item href="five"> Posts and Activity</NavDropdown.Item>
                                    
                                    <NavDropdown.Item href="seven"> Job Posting Account</NavDropdown.Item>
                                    <NavDropdown.Item href="eight">Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className="menuItems">
                               <div  style={{ fontSize: '30px' }}><CgMenuGridR /></div>
                                <NavDropdown title="Work" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className='menuItems'>
                                <h5> Try Premium for free</h5>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Row>

            </Navbar>
        </div>
    )
}