import { all } from "redux-saga/effects";
import posts from "./posts/posts";
export default function* rootSaga() {
    yield all([posts()]);
}