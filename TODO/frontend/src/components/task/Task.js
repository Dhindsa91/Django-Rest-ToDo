import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTask} from '../../actions/task';


export class Task extends Component {
    static propTypes = {
        task: PropTypes.array.isRequired,
    };

    componentDidMount(){      //when the component mounts we want to make that action
        this.props.getTask();
    }

    render() {
        return (
         
<Fragment>
            <h1>Task List</h1>
    <table className="table table-striped">
    <thead>
    <tr>
    <th>State</th>
    <th>Date</th>
    <th>Text</th>
    <th></th>
    </tr>
    </thead>
        <tbody>
            {this.props.task.map(task=>(
                <tr key={task.id}>
                <td>{task.state}</td>
                <td>{task.dueDate}</td>
                <td>{task.text}</td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
             ))}
        </tbody>

           
        </table>
    </Fragment>
        );  
        
    }
}
const mapStateToProps = state => ({ //THIS is redux 
    task: state.task.task,
});

export default connect(mapStateToProps,{getTask})(Task); //this is using react-redux to connect to the task and get the state and call the method