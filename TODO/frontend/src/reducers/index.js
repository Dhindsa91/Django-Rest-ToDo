//root reducer
import {combineReducers} from 'redux';
import task from './task';
import errors from './errors';

export default combineReducers({

    task,
    errors
    

});
