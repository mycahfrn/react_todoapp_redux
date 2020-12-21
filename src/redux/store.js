import { createStore } from 'redux'
import tasksReducer from '../redux/reducers'

export const store = createStore(tasksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
