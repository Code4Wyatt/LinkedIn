import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import PostOnFeed from "./PostOnFeed"
import { withRouter } from "react-router";
import LeftSideBar from "./LeftSideBar";

class Home extends React.Component {


    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} md={8}> {/* left bar and posts column */}
                    <Row>
                        <Col xs={4}> {/* here leftside bar */}
                        <LeftSideBar />
                        </Col>
                        <Col xs={8}> {/* here we have posts */}
                        <PostOnFeed />
                        </Col>
                    </Row>

                    </Col>
                    <Col xs={12} md={4}>  {/* sideBar col */}

                    </Col>
                </Row>
            </Container>
            
             </>
        )
    }
}

export default withRouter(Home) 