import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Constants/action-types";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "task 1...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 2...",
            isDone: false,
        },
        {
            id: Math.random(),
            task: "task 3...",
            isDone: true,
        },
    ],
};

export default function Reducer(state = initialState, action) {
    const { type, payload, idedit } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    { id: Math.random(), task: payload, isDone: false },
                ],
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((todo) =>
                    todo.id === idedit ? { ...todo, task: payload } : todo
                ),
            };
        }
        case DONE_TASK: {
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload
                        ? { ...todo, isDone: !todo.isDone }
                        : todo
                ),
            };
        }
        case DELETE_TASK :{
        return {
            ...state,
            todos: state.todos.filter((el) => el.id !== action.payload),
            };
        }
        default:
            return state;
    }
}
