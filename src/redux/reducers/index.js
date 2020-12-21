import { combineReducers } from "redux"
import tasksReducer from './tasks'
import visibilityFilterReducer from './visibilityFilter'

export default combineReducers({tasksReducer, visibilityFilterReducer})