import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const blogSlice = createSlice({
    name : 'blogs',
    initialState : {allBlogs : []},
    reducers : {
        setBlogArray(state, action){
            state.allBlogs = action.payload
        }
    },
})

export const blogActions = blogSlice.actions

export default blogSlice;