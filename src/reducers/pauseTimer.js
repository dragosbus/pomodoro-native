import * as ActionTypes from '../actionTypes/actionTypes';

export const pauseTimer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.SET_PAUSE_TIMER:
            return parseInt(action.payload, 10);
        default:
            return state;
    }
};