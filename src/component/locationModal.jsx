import React,{ Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import CustomModal from './customModal';

import { addLocation } from '../action/locationAction';

export class LocationModal extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      show: false,
      address:''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event){
    this.setState({address: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addLocation({location: this.state.address });
    this.handleClose();
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Map
        </Button>
        <CustomModal
          show={this.state.show}
          handleClose={this.handleClose}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}
export default connect(null, { addLocation })(LocationModal);