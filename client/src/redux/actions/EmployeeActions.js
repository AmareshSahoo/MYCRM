import actionsFunction from "./generated/EmployeeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import EmployeeApi from "../../api/EmployeeApi";
 
 actionsFunction.loadEmployeeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return EmployeeApi
     .getEmployeeList()
     .then(list => {
       dispatch(actionsFunction.loadEmployeeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
