import { all } from "redux-saga/effects";
import tasks from "./tasks/tasks";
export default function* rootSaga() {
    yield all([tasks()]);
}