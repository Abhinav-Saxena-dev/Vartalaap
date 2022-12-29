import { configureStore} from "@reduxjs/toolkit";
import blogSlice from "./blogReducer/blogReducer";
import userSlice from "./userReducer/userReducer";

const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        blogs : blogSlice.reducer,
    }
})

export default store;