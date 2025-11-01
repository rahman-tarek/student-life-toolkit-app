import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "./features/assignmentSlice"
import notesReducer from "./features/notesSlice"
import resourcesReducer from "./features/resourceSlice";
import tasksReducer from './features/tasksSlice';

const store = configureStore({
    reducer: {
        assignment: assignmentReducer,
        notes: notesReducer,
        resources: resourcesReducer,
        tasks: tasksReducer,
    }
})
export default store;