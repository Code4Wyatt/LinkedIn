import React from "react";
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'



class AddExperience extends React.Component {
 
  state = {
    name: ""
  }

  handleChange = (e) => this.setState({name: e.target.value})
  handleSubmit(event) {
    alert('E\' stato inserito un nome: ' + this.state.name); 
    event.preventDefault();
    
  }
  render() {

  return (
    <>
     
      <Modal 
        show={this.props.showModal} 
        onHide={this.props.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group >
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" onChange={this.handleChange} value={this.state.name} placeholder="name input"/>           
          </Form.Group>
        {/* <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Example file input"
              />
            </Form.Group>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
              Submit
          </Button>
      </Modal.Footer>
      </Modal>
    </>
  
    );
  }
}
  
  
export default AddExperience;
