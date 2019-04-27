import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/task";

export class Form extends Component {
  state = {
    state: "",
    text: ""
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.state]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { state, text } = this.state;
    const task = { state, text };
    this.props.addTask(task);
    this.setState({
      state: "",
      text: ""
    });
  };

  render() {
    const { state,  text } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Status</label>
            <input
              className="form-control"
              type="text"
              name="status"
              onChange={this.onChange}
              value={status}
            />
          </div>
         
          <div className="form-group">
            <label>Text</label>
            <textarea
              className="form-control"
              type="text"
              name="text"
              onChange={this.onChange}
              value={text}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);