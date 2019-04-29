import { 
  GET_ALL_LOCATIONS, 
  ADD_NEW_LOCATION, 
  REMOVE_LOCATION, 
  UPDATE_LOCATION
} from '../action/types'


export const locationReducer = (state = [], action) => {
  switch(action.type){
    case GET_ALL_LOCATIONS:
    return[
      ...action.payload
    ]
    case ADD_NEW_LOCATION:
    return[
      ...state,
      action.payload
    ]
    case UPDATE_LOCATION:
    return state.map((location) => {
      if(location._id === action.payload._id){
        return {
          ...location,
          ...action.payload
        }
      }
      return location
    });
    case REMOVE_LOCATION:
    return state.filter(location => location._id !== action.payload._id);
    default:
      return state;
  }
}