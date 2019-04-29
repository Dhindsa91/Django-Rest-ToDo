import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/task";


export class Form extends Component {
  state = {
    status: '',
    text: '',
    dueDate: ''
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
    const { status, text, dueDate} = this.state;
    const task = { status, text, dueDate };
    this.props.addTask(task);
    this.setState({
        status: "",
        text: "",
        dueDate: ""
        
      });

  };

  render() {
    const { status,  text, dueDate } = this.state;
    return (
     <Fragment>
      <div>
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>

      
        <div className="form-group">
            <label>Status</label>

           
          <select className="form-control" value={this.status}  onChange={this.onChange} name="status">
                    <option name="status"  onChange={this.onChange} value={this.status}></option>
                    <option name="status"  onChange={this.onChange} value={this.status}>To Do</option>
                    <option name="status"  onChange={this.onChange} value={this.status}>In Progress</option>
                    <option name="status"  onChange={this.onChange} value={this.status}>Done</option>
                </select>
              </div>

            <div className="form-group">
            <label>Due Date</label>
            <input
              className="form-control"
              type="date"
              name="dueDate"
              onChange={this.onChange}
              value={this.dueDate}
            />
          </div>
              

         
          <div className="form-group">
            <label>Text</label>

            <textarea
              className="form-control"
              type="text"
              name="text"
              onChange={this.onChange}
              value={this.text}
            />
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>
    </div>
    </Fragment>
    
    );
  }

}

export default connect(
  null,
  { addTask }
)(Form);

