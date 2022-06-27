import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { getTasks, getTasksFailed, getTasksSuccess } from "../../reducers/tasks/tasksSlice";

function getTasksApi() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}


function* tasksListSaga(action:any) {
    try {
        const {data} = yield call(getTasksApi);
            yield put(getTasksSuccess({ data }));
      
    } catch (err:any) {
        yield put(getTasksFailed({ response: err }));
    }
}

function* tasks() {
    yield all([takeLatest("tasks/getTasks", tasksListSaga)]);
}
export default tasks;