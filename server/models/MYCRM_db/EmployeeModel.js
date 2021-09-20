import EmployeeModelGenerated from "./generated/EmployeeModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EmployeeModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await EmployeeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EmployeeModelGenerated,
  ...customModel
};
