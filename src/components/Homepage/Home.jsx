import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import PostOnFeed from "./PostOnFeed"
import { withRouter } from "react-router";
import LeftSideBar from "./LeftSideBar";
import "./Home.css"
import SinglePost from "./SinglePost";
import Posts from "./Posts";

class Home extends React.Component {


    render() {
        console.log(this.props.match.params.userId)
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
                        <PostOnFeed userId={this.props.match.params.userId}/>
                        <Posts />
                        <SinglePost />
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