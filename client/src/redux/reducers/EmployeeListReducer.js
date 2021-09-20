// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function EmployeeListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.payload };
    case types.LIST_EMPLOYEE_SUCCESS:
      return { ...state, listEmployee: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}