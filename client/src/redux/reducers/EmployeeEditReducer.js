// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  employee: {}
};

// Reducer
export default function EmployeeEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.payload };
    case types.UPDATE_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.payload };
    case types.GET_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}