import {combineReducers} from 'redux';
import {workTimerReducer} from './workTimer';
import {pauseTimer} from './pauseTimer';

const rootReducer = combineReducers({
    workTimer: workTimerReducer,
    pauseTimer: pauseTimer
});

export default rootReducer;