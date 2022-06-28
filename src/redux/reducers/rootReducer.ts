import { combineReducers } from "redux";
import postReducer from "./posts/postsSlice";

const rootReducer = combineReducers({
    postReducer,
});

export default rootReducer;