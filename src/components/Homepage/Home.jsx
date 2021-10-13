import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import PostOnFeed from "./PostOnFeed"
import { withRouter } from "react-router";
import LeftSideBar from "./LeftSideBar";
import "./Home.css"
class Home extends React.Component {


    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} lg={8}> {/* left bar and posts column */}
                    <Row>
                        <Col xs={12} lg={4}> {/* here leftside bar */}
                         <LeftSideBar />
                        </Col>
                        <Col xs={12} lg={8}> {/* here we have posts */}
                        <PostOnFeed />
                        </Col>
                    </Row>
                      ssdad{/* ¢ */}
                    </Col>
                    <Col xs={12} lg={4}>  {/* sideBar col */}

                    </Col>
                </Row>
            </Container>
            
             </>
        )
    }
}

export default withRouter(Home) 