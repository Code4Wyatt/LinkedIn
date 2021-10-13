import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import PostOnFeed from "../PostOnFeed"

class Home extends React.Component {


    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col xs={12} md={8}> {/* left bar and posts column */}
                    <Row>
                        <Col xs={3}> {/* here leftside bar */}

                        </Col>
                        <Col xs={5}> {/* here we have posts */}
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

export default Home