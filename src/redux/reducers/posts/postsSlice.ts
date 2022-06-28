import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        taskList: [],
        postData: {},
        loader:false
    },
    reducers: {
        getPosts: (state) => {
            return { ...state, loader:true}
        },
        getPostsSuccess: (state, action) => {
            return { ...state, taskList: action.payload?.data, loader:false }
        },
        getPostsFailed: (state, action) => {
            return { ...state, taskList: action.payload, loader:false }
        },
         getPostData: (state,action) => {
            return { ...state, loader:true, action}
        },
        getPostDataSuccess: (state, action) => {
            toast.success("Post fetched successfully")
            return { ...state, postData: action.payload?.data, loader:false }
        },
        getPostDataFailed: (state, action) => {
            return { ...state, postData: action.payload, loader:false }
        },
        editPost: (state,action) => {
            return { ...state,loader:true, action}
        },
        editPostSuccess: (state, action) => {
            toast.success("Post edited Successfully")
            return { ...state, taskList: action.payload?.data, loader:false }
        },
        editPostFailed: (state, action) => {
            toast.error("Failed to edit post")
            return { ...state, taskList: action.payload, loader:false }
        },
        deletePost: (state,action) => {
            return { ...state, loader:true, action}
        },
        deletePostSuccess: (state, action) => {
            toast.success("Post deleted Successfully")
            return { ...state, loader:false }
        },
        deletePostFailed: (state, action) => {
            toast.error("Failed to delete post")
            return { ...state, loader:false }
        },
        addPost: (state,action) => {
            return { ...state, loader:true, action}
        },
        addPostSuccess: (state, action) => {
            toast.success("Post added Successfully")
            return { ...state, postData:{}, loader:false }
        },
        addPostFailed: (state, action) => {
            toast.error("Failed to add post")
            return { ...state, postData:action?.payload?.data, loader:false }
        },
        clearPostData:(state)=>{
            return {...state, postData:{}}
        }
    },
});

export const { getPosts, getPostsSuccess, getPostsFailed, editPost, editPostSuccess, editPostFailed, addPost, addPostSuccess, addPostFailed, deletePost, deletePostSuccess, deletePostFailed, getPostData, getPostDataSuccess, getPostDataFailed, clearPostData } = postSlice.actions;

export default postSlice.reducer;