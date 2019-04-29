import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CustomModal = ({
  show, 
  handleChange, 
  handleClose, 
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
  <Modal show={ show } onHide={ handleClose }>
    <Modal.Header closeButton>
      <Modal.Title>Add Map</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Control type="text" placeholder="enter location"
          onChange={handleChange}
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" type='submit' onClick={handleSubmit}>
        Add Map
      </Button>
    </Modal.Footer>
  </Modal> 
  </form>
);
export default CustomModal;