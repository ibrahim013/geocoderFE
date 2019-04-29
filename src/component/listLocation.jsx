import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ListLocations = ({
  id,
  checkLocation,
  locationName, 
  lat,
  lng, 
  handleDelete,
  handleEditing, 
  handleUpdate,
  handleChange,
  isEditing 
}) => {
  return(
    <Card.Body style={{ width: '18rem' }}>
      {isEditing && (id === checkLocation) ? (
        <Form>
          <Form.Control 
            type="text" 
            placeholder="new location"
            onChange={handleChange}
          />
        </Form>) :
        <Card.Title>{locationName.split(',')[0]}</Card.Title>
      }
      <Card.Text className="mb-1 text-muted">{`latitude: ${lat}`}</Card.Text>
      <Card.Text className="mb-3 text-muted">{`longitude: ${lng}`}</Card.Text>
      {isEditing && (id === checkLocation) ? (
        <Button variant="outline-dark"  onClick={handleUpdate}>Add Map</Button>
        ) : 
        <Button variant="outline-dark"  onClick={handleEditing}>Edit</Button>
      } 
        <span> or </span>
        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
    </Card.Body>
  )}


export default ListLocations;