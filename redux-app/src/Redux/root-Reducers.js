import {combineReducers} from "redux"
import tasksReducer from "./Reducers"

const rootReducers = combineReducers ({
    tasks:tasksReducer
})


export default rootReducers
