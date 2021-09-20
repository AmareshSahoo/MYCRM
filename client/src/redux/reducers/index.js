import { combineReducers } from "redux";

// START IMPORT REDUCERS
import EmployeeEditReducer from "./EmployeeEditReducer";
import EmployeeListReducer from "./EmployeeListReducer";
import HomeReducer from "./HomeReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	EmployeeEditReducer,
	EmployeeListReducer,
	HomeReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
