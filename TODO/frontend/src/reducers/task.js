import { GET_TASK } from '../actions/types.js';

const initialState = {
    task: []
}


export default function(state = initialState, action){

    switch(action.type) {
         case GET_TASK:
            return {
                ...state,
                task: action.payload //being sent as a payload as a action
            }
        default:
            return state
    }


}