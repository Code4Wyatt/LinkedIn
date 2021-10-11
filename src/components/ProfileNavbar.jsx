import React from 'react'
import '../Navbar.css'
import LinkedinLogo from "../data/linkedin_logo.png";
import { Navbar, Nav, NavDropdown, Form, FormControl, Row } from 'react-bootstrap'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaUsers, FaBell } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";



export default function ProfileNavbar() {



    return (
        <div id='topNavbar'>
            <Navbar className='justify-content-between align-items-center p-0 flex-nowrap mt-2'>
                <Row className=' align-items-center flex-nowrap' style={{marginLeft:'160px'}}>
                    <Navbar.Brand > <img src={LinkedinLogo} alt="logo" /> </Navbar.Brand>
                    <Form style={{width: '250px'}}>
                        <IoSearchSharp />
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
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
                            
                            <AiTwotoneHome  />
                                <Nav.Link>Home</Nav.Link>
                            </div>
                            
                            <div className='menuItems'>
                                <FaUsers />
                                <Nav.Link>My Network</Nav.Link>
                            </div>
                            <div className='menuItems'>
                                <IoIosBriefcase />
                                <Nav.Link>Jobs</Nav.Link>
                            </div>
                            <div className='menuItems'>
                               <RiMessage3Fill />
                                <Nav.Link>Messaging</Nav.Link>

                            </div>
                            <div className='menuItems'>
                                <FaBell />
                                <Nav.Link>Notifications</Nav.Link>
                            </div>
                            <div className='menuItems line'>
                             <img src="" alt="profile" />
                                <NavDropdown title="Me" id="navbarScrollingDropdown">
                                    
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5"> Help</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">manage</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5"> Posts and Activity</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">  Company</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5"> Job Posting Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className="menuItems">
                                <CgMenuGridR />
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