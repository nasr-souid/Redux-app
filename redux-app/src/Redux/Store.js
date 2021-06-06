import{createStore,applyMiddleware}from "redux"
import logger from "redux-logger"
import rootReducers from "./root-Reducers";
import rootReducer from "./root-Reducers"

const middleware =[]
if(process.env.MODE_ENV==="development"){
    middleware.push(logger);
}
const store =createStore(rootReducers,applyMiddleware(...middleware))
export default store;