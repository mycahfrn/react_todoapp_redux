import { ADD_TASK, TOGGLE_DONE, DELETE_TASK } from '../types'

const initialState = {
    tasks: [{
        id: 0,
        content: 'Adding',
        done: true
    }]
}

let counter = 0;

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            counter++
            return {
                ...state, tasks: [...state.tasks, {
                    id: counter,
                    content: action.payload,
                    done: false
                }]
            }
        case TOGGLE_DONE:
            /*const index = state.tasks.findIndex(todo => todo.id !== action.payload)
            const newArray = [...state.tasks]
            newArray[index].done = !newArray[index].done*/
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (action.payload === task.id) {
                        return {...task, done: !task.done }
                    }
                    return task
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}


export default taskReducer