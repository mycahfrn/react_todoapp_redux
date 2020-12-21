import { ADD_TASK, TOGGLE_DONE, DELETE_TASK } from '../types'

export const addTask = task => ({
    type: ADD_TASK,
    payload: task
})

export const toggleDone = id => ({
    type: TOGGLE_DONE,
    payload: id
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id
})
