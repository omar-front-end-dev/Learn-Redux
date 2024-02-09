import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer"

const rootReducer = combineReducers({
    counter: counterReducer,
}) 

export const myStore = createStore(rootReducer)

