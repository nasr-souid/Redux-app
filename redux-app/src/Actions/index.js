import { ADD_TASK, EDIT_TASK, DONE_TASK,DELETE_TASK} from "../Constants/action-types";
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const editTask = (idedit, payload) => {
    return {
        type: EDIT_TASK,
        idedit: idedit,
        payload: payload,
    };
};
export const doneTask = (payload) => {
    return {
        type: DONE_TASK,
        payload: payload,
    };
}
export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload,
    };
};
