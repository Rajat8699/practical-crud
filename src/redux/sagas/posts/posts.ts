import * as Effects from "redux-saga/effects";
import axios from "axios";
import { getPostsSuccess, getPostsFailed, editPostSuccess, editPostFailed, addPostSuccess, addPostFailed, deletePostSuccess, deletePostFailed, getPostDataSuccess, getPostDataFailed } from "../../reducers/posts/postsSlice";

const { put, takeLatest, all } = Effects;
const call:any = Effects.call
function getPostsApi() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}

function addPostApi(data:{userId: number;
    title: string;
    body: string;
    id: number;}) {
    return axios.post("https://jsonplaceholder.typicode.com/posts", data)
}

function getPostDataApi(data:string) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`)
}

function editPostApi(data:{data:{userId: number;
    title: string;
    body: string;
    id: number;},id:string}) {
    return axios.put(`https://jsonplaceholder.typicode.com/posts/${data?.id}`,data?.data)
}

function deletePostApi(id:number) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}


function* postsListSaga(action:any) {
    try {
        const {data} = yield call(getPostsApi);
            yield put(getPostsSuccess({ data }));
      
    } catch (err:any) {
        yield put(getPostsFailed({ response: err }));
    }
}

function* postAddSaga(action:any) {
    try {
        const {data} = yield call(addPostApi, action?.payload);
            yield put(addPostSuccess({ data }));
      
    } catch (err:any) {
        yield put(addPostFailed({ response: err, data:action?.payload }));
    }
}

function* getPostDataSaga(action:any) {
    try {
        const {data} = yield call(getPostDataApi, action?.payload);
            yield put(getPostDataSuccess({ data }));
      
    } catch (err:any) {
        yield put(getPostDataFailed({ response: err }));
    }
}

function* postEditSaga(action:any) {
    try {
        const {data} = yield call(editPostApi,action?.payload);
            yield put(editPostSuccess({ data }));
      
    } catch (err:any) {
        yield put(editPostFailed({ response: err }));
    }
}

function* postDeleteSaga(action:any) {
    try {
        const {data} = yield call(deletePostApi, action?.payload);
            yield put(deletePostSuccess({ data }));
      
    } catch (err:any) {
        yield put(deletePostFailed({ response: err }));
    }
}


function* posts() {
    yield all([
        takeLatest("posts/getPosts", postsListSaga),
        takeLatest("posts/addPost",postAddSaga),
        takeLatest("posts/editPost",postEditSaga),
        takeLatest("posts/deletePost",postDeleteSaga),
        takeLatest("posts/getPostData",getPostDataSaga)
    ]);
}
export default posts;