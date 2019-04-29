import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './map';

import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import LocationModal from './locationModal';
import ListLocations from './listLocation';

// actions
import { allLocation, deleteLocation, updateLocation } from '../action/locationAction';

const STATIC_LOCATION_LAT = 51.165691;
const STATIC_LOCATION_LNG = 10.451526;

class Location extends Component{

  state = {
    isEditing: false,
    locationId:'',
    address:''
  };

  componentDidMount(){
    this.props.allLocation()
  };

  handleDelete = (locationId) => {
    this.props.deleteLocation({ locationId });
    this.props.allLocation();
  };

  handleEditing = (location) => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      locationId:location
    }))
  };

  handelChange = (event) => {
    this.setState({address: event.target.value })
  };

  handleUpdate = (locationId) => {
    if(!this.state.address){
      return this.setState({isEditing: false}); 
    }
    this.props.updateLocation({location: this.state.address}, locationId);
    this.setState({isEditing: false});
  };
  render() {
    let content;

    const {locations} = this.props;

    if(!locations) {
      return <div><h4>Please Wait Loading...</h4></div>
    }
    if(Object.keys(locations).length >= 1) {

      content = locations.map(location => (
        <div key={location._id}>
          <ListLocations
            id = {location._id}
            locationName = {location.formattedAddress}
            lat = {location.lat}
            lng = {location.lng}
            isEditing={this.state.isEditing}
            handleChange = {this.handelChange}
            checkLocation={this.state.locationId}
            handleDelete = {() => this.handleDelete(location._id)}
            handleEditing={() => this.handleEditing(location._id)}
            handleUpdate={()=> this.handleUpdate(location._id)}
          />
        </div>
      ));
    };
    return (
      <Container fluid>
        <Row>
          <Col>
            <Map
              id='map'
              options= {{
                zoom: 8,
                center: { lat: STATIC_LOCATION_LAT, lng: STATIC_LOCATION_LNG }
              }}
              onMapLoad={map => {
              locations.forEach(cord => {
                let point = new window.google.maps.LatLng(
                  parseFloat(cord.lat),
                  parseFloat(cord.lng));
                  new window.google.maps.Marker({
                  position: point,
                  map: map,
                });
              })
            }}
          />
          </Col>
          <Col>
          <div className="grid-item">
            <LocationModal/>
            <CardGroup>
              { content }
            </CardGroup>
          </div>
          </Col>
        </Row>
        </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  locations: state.location
})
export default connect(mapStateToProps, { 
  allLocation, 
  deleteLocation, 
  updateLocation
})(Location);