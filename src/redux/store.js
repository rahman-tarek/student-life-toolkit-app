import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "./features/assignmentSlice"
import notesReducer from "./features/notesSlice"

const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
        notes: notesReducer,
    }
})
export default store;