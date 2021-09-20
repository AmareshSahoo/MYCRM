import EmployeeApiGenerated from "./generated/EmployeeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class EmployeeApi extends EmployeeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Employee List
  static getEmployeeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/employees")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default EmployeeApi;