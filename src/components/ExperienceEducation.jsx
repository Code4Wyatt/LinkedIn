import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { format, parseISO } from 'date-fns'

class ExperienceEducation extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
   
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          headers: new Headers({
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0MWYwMWE4OTBjYzAwMTVjZjA3ZWYiLCJpYXQiOjE2MzM5NTE0ODksImV4cCI6MTYzNTE2MTA4OX0.vx77x7lAtcX0LJjTGsp1uSzKGgE5K7MlKFsN70cMX5Q",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({data: data});
        console.log("experiences data:", data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <Container>
       
        {this.state.data.map(work =>
        <>
        <Card className="experience-card">
          <Card.Body>
            <div style={{ paddingLeft: "12px" }}>
              <h5>Experience</h5>
            </div>
            <div className="d-flex">
              <div className="experience-images-section">
                <img
                  className="experience-images"
                  src="./assets/striveschool.jfif"
                />
              </div>
              <div className="experience-content-section">
                <div className="experience-titles-section-education ml-2">
                  <a href="#">
                    <h6>{work.role}</h6>
                    <h7>{work.company}</h7>
                    <br />
                    <h8>{format(parseISO(work.startDate), 'MMMM do yyyy')}-{format(parseISO(work.endDate), 'MMMM do yyyy')}</h8>
                  </a>
                </div>
                <div className="experience-content-section ml-2">
                  <p>
                    {work.description}
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </Card.Body>
          
        </Card>
        </>
         )}
      </Container>
    );
  }
}

export default ExperienceEducation;
