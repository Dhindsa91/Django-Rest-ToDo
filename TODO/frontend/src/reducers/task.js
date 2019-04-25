import { GET_TASK } from '../actions/types.js';

const initialState = {
    leads: []
}


export default function(state = initialState, action){

    switch(action.type) {
         case GET_TASK:
            return {
                ...state,
                task: action.payload
            }
        default:
            return state
    }


}