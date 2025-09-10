import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "./features/assignmentSlice"

const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
    }
})
export default store;