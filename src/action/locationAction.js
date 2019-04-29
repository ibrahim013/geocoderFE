import axios from 'axios';
import { 
  GET_ERRORS,
  GET_ALL_LOCATIONS,
  ADD_NEW_LOCATION,
  REMOVE_LOCATION,
  UPDATE_LOCATION
} from './types'
import config from '../config'


export const getError = (errors) => ({
  type: GET_ERRORS,
  payload: errors
});

export const getAllLocation = (locations) => ({
  type: GET_ALL_LOCATIONS,
  payload: locations
});

export const addNewLocation = (location) => ({
  type: ADD_NEW_LOCATION,
  payload: location
});

export const updatedLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location
});

export const removeLocation = (deletedLocation) => ({
  type: REMOVE_LOCATION,
  payload: deletedLocation
});

export const allLocation = () => dispatch => {
  axios.get(`${config.BASE_URL}/locations`)
    .then(location => dispatch(getAllLocation(location.data)))
    .catch(err => dispatch(getError(err)))
}

export const addLocation = (data) => dispatch => {
  axios.post(`${config.BASE_URL}/create-location`, data)
    .then(location => dispatch(addNewLocation(location.data)))
    .catch(err => dispatch(getError(err)))
}

export const updateLocation = (data, locationId) => dispatch => {
  axios.put(`${config.BASE_URL}/edit-location/${locationId}`, data)
    .then(location => dispatch(updatedLocation(location.data)))
    .catch(err => dispatch(getError(err)))
}

export const deleteLocation = (data) => dispatch => {
  axios.delete(`${config.BASE_URL}/delete-location/${data.locationId}`)
    .then((deletedLocation) => dispatch(removeLocation(deletedLocation.data)))
    .catch(err => dispatch(getError(err)))
}