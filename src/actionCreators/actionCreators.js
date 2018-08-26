import * as ActionTypes from '../actionTypes/actionTypes';

export const setWorkTimer = time => ({
    type: ActionTypes.SET_WORK_TIMER,
    payload: time
});

export const setPauseTime = time => ({
    type: ActionTypes.SET_PAUSE_TIMER,
    payload: time
});

