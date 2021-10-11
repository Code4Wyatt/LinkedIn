import { Card, Button, Row, Col } from "react-bootstrap";

const SecondCard = () => {
  return (
    <Card>
      <Card.Body>
        <div className="header-div">
          <div>
            <h2>Strengthen your profile</h2>
          </div>
          <div style={{ display: "inline-flex" }}>
            <div style={{ marginRight: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              Previous
            </div>
            <div style={{ marginLeft: "10px" }}>
              {" "}
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </div>
        <Card.Text>
          <div>
            <Row>
              <Col sm={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="currentColor"
                  class="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div style={{ display: "flex", flexDirection: "start" }}>
                      <h1>
                        Let’s update your headline to match your current
                        education
                      </h1>
                    </div>
                    <div style={{ display: "flex", flexDirection: "start" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Card.Text>
        <Row style={{ flexFlow: "row-reverse" }}>
          <div>
            <Button style={{ marginRight: "10px" }}>Not Now</Button>
            <Button variant="primary" style={{ borderRadius: "25px" }}>
              Update headline
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SecondCard;
