import axios from "axios";

import { GET_TASK, DELETE_TASK, ADD_TASK, GET_ERRORS} from "./types";

// GET TASK

export const getTask = () => dispatch => {
  axios
    .get("/api/task")
    .then(res => {
      dispatch({
        type: GET_TASK,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteTask = id => dispatch => {
  axios
    .delete(`/api/task/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addTask = task => dispatch => {
  axios
    .post("/api/task/", task)
    .then(res => {
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
    })
    .catch(err => {
      const errors ={
        msg: err.response.data,
        payload: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};