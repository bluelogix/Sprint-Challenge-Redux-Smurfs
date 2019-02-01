/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURF_START,
  SMURF_SUCCESS,
  SMURF_FAILURE,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_FAILURE,
  DELETE_SMURF,
  DELETE_SUCCESS,
  DELETE_FAILURE
}
from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null,
  //  updatingSmurf: false,
   deleteSmurf: false,
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
      case SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false
        }
        case SMURF_FAILURE:
          return {
            ...state,
            error: action.payload,
            fetchingSmurfs: false
          }
          case ADD_SMURF:
              return {
                  ...state,
                  // fetchingSmurfs: true,
                  addingSmurf: true,
              }
        case ADD_SUCCESS:
              return {
                  ...state,
                  fetchingSmurfs: false,
                  addingSmurf: false,
                  error: null,
                  friends: action.payload
                
              }
              case ADD_FAILURE:
              return {
                ...state,
                error: action.payload,
                addingSmurf: false,
              }
              case DELETE_SMURF:
              return {
                  ...state,
                  deleteSmurf: true
              }
              case DELETE_SUCCESS:
              return {
                  ...state,
                  fetchingSmurfs: false,
                  error: null,
                  smurfs: action.payload
                
              }
              case DELETE_FAILURE:
              return {
                ...state,
                error: action.payload,
                fetchingSmurfs: false
              }

          default:
            return state;
  }
}

export default smurfReducer;