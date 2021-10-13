
import { Card, Col, Button, Row } from "react-bootstrap";
import "../NewFeedSection.css";
import logo from "../data/logo.png";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";




export default function NewFeedSection() {

  return (
    <div>
      

      <Card className="mt-3 mb-3">
        <Card.Body>
          <Row>
            <Col className="col-md-1 mr-2">
              <Card.Img
                variant="top-left"
                className="shopifylogo"
                src=""
              />
            </Col>
            <Col className="col-md-9">
              <Card.Subtitle className="shopifysubtitle cardtitle mb-1">
              The Cyber Security Hub 
              </Card.Subtitle>
              <Card.Text className="shopifytitle text-muted small">
                1,200,223 followers
                <br />
                Promoted
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <Card.Text className="shopifytext mt-2">
              Users think 52% of support calls could have been resolved through optimized content.
               What are you doing to help your customers get the right answer
                <br />
                Everywhere.
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Img
          variant="bottom"
          className="mb-3" 
          src=""
        />
        <div
          id="interaction"
          className="d-flex justify-content-around flex-end mb-1"
        >
     
          <Button className="midbutton pb-3" variant="light">
            <AiOutlineLike style={{ color: "#6b6b6b" }} size="1.3rem" /> Like
          </Button>
       
          <Button className="midbutton pb-3" variant="light">
            <BiCommentDetail style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
            Comment
          </Button>
          <Button className="midbutton pb-3" variant="light">
            <RiShareForwardLine style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
            Share
          </Button>
          <Button className="midbutton pb-3" variant="light">
            <RiSendPlaneFill style={{ color: "#6b6b6b" }} size="1.3rem" /> Send
          </Button>
        </div>
      </Card>

     
    </div>
  );
};

