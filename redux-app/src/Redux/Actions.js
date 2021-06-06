import * as types from "./ActionTypes";

export const isDoneTask=(task)=>({
    type: types.ISDONE_TASK,
    payload:task, 
})
export const addTask=(task)=>({
    type: types.ADD_TASK,
    payload:task, 
})
export const removeTask=(task)=>({
    type: types.REMOVE_TASK,
    payload:task, 
})
export const editTask=(task)=>({
    type: types.EDIT_TASK,
    payload:task, 
})