import React, {Component} from 'react';
import {connect} from 'react-dom';
import propTypes from 'prop-types';
import {getTask} from '../../actions/task';

export class Task extends Component {
    static propTypes = {
        task: PropTypes.array.isRequired,
    };

    componentDidMount(){
        this.props.getTask();
    }

    render() {
        return (
            <div>

            <h1>Task List</h1>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    task: state.task.task,
});

export default connect(mapStateToProps, {getTask});//this is using react-redux to connect to the task and get the state and call the method