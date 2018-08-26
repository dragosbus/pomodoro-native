import * as ActionTypes from '../actionTypes/actionTypes';

export const workTimerReducer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.SET_WORK_TIMER:
            return parseInt(action.payload, 10);
        default:
            return state;
    }
};