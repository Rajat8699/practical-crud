import { combineReducers } from "redux";
import taskReducer from "./tasks/tasksSlice";

interface Reducer{taskReducer:any}

const rootReducer = combineReducers({
    taskReducer,
});

export default rootReducer;