import axios from "axios";

import { GET_TASK } from "./types";

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
