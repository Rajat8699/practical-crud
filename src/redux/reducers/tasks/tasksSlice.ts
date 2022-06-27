import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        taskList: [],
        task: {},
        loader:false
    },
    reducers: {
        getTasks: (state) => {
            return { ...state, loader:true}
        },
        getTasksSuccess: (state, action) => {
            console.log(action?.payload,"success")
            return { ...state, taskList: action.payload?.data, loader:false }
        },
        getTasksFailed: (state, action) => {
            console.log(action?.payload,"failed")
            return { ...state, taskList: action.payload, loader:false }
        }
    },
});

export const { getTasks, getTasksSuccess, getTasksFailed } = taskSlice.actions;

export default taskSlice.reducer;