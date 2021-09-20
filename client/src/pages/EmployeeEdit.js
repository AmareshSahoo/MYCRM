// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import EmployeeActions from "../redux/actions/EmployeeActions";

// END IMPORT ACTIONS

/** APIs

* actionsEmployee.create
*	@description CRUD ACTION create
*
* actionsEmployee.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsEmployee.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class EmployeeEdit extends Component {
  // Init employee
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsEmployee.loadEmployee(this.props.match.params.id);
    }
    
  }

  // Insert props employee in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      employee: props.employee
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.employee._id) {
      this.props.actionsEmployee.saveEmployee(this.state.employee).then(data => {
        this.props.history.push("/employees/");
      });
    } else {
      this.props.actionsEmployee.createEmployee(this.state.employee).then(data => {
        this.props.history.push("/employees/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Employee Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Department"
            label="Department"
            value={this.state.employee.Department || ""}
            onChange={Utils.handleChange.bind(this, "employee")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.employee.Department && this.state.employee.Department === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Location"
            label="Location"
            value={this.state.employee.Location || ""}
            onChange={Utils.handleChange.bind(this, "employee")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.employee.Location && this.state.employee.Location === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.employee.Name || ""}
            onChange={Utils.handleChange.bind(this, "employee")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.employee.Name && this.state.employee.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Role"
            label="Role"
            value={this.state.employee.Role || ""}
            onChange={Utils.handleChange.bind(this, "employee")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.employee.Role && this.state.employee.Role === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Salary"
            label="Salary"
            value={this.state.employee.Salary || ""}
            onChange={Utils.handleChange.bind(this, "employee")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.employee.Salary && this.state.employee.Salary === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/employees/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsEmployee: bindActionCreators(EmployeeActions, dispatch),
  };
};

// Validate types
EmployeeEdit.propTypes = { 
  actionsEmployee: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    employee: state.EmployeeEditReducer.employee
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEdit);
