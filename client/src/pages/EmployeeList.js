// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import EmployeeActions from "../redux/actions/EmployeeActions";

// END IMPORT ACTIONS

/** APIs

* actionsEmployee.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsEmployee.list
*	@description CRUD ACTION list
*

**/


class EmployeeList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsEmployee.loadEmployeeList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsEmployee.deleteEmployee(this.state.idDelete).then(data => {
      this.props.actionsEmployee.loadEmployeeList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Department",
        type: "string",
        label: "Department"
      }, 
      {
        id: "Location",
        type: "string",
        label: "Location"
      }, 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "Role",
        type: "string",
        label: "Role"
      }, 
      {
        id: "Salary",
        type: "number",
        label: "Salary"
      },
    ];
    const link = "/employees/";

    return (
      <div>
        <h1>Employee List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/employees/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Department }</TableCell>
                <TableCell align="right">{ row.Location }</TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Role }</TableCell>
                <TableCell align="right">{ row.Salary }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/employees/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
EmployeeList.propTypes = { 
  actionsEmployee: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.EmployeeListReducer.listEmployee
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
