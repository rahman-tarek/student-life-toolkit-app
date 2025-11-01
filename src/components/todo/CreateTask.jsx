import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasksSlice";
import FormModal from "../FormModal";

const CreateTask = ({ open, onClose }) => {
    const dispatch = useDispatch();

    // Define all the fields for this form
    const fields = [
        {
            name: "title",
            label: "Task Title",
            type: "text",
            placeholder: "Enter task title...",
        },
        {
            name: "type",
            label: "Priority",
            type: "select",
            options: [
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
            ],
        },
        {
            name: "description",
            label: "Description(Opyional)",
            type: "textarea",
            placeholder: "Brief description of the task...",
        },

    ];

    // Submit handler
    const handleAddTask = (data) => {
        // Clean up tags into array
        // const formattedData = {
        //     ...data,
        //     tags: data.tags
        //         ? data.tags.split(",").map((tag) => tag.trim())
        //         : [],
        // };

        dispatch(addTask(data)); // Dispatch to Redux
        onClose(); // Close modal
    };

    return (
        <FormModal
            open={open}
            onClose={onClose}
            title="Create New Task"
            fields={fields}
            onSubmit={handleAddTask}
            submitText="Create Task"
        />
    )
}

export default CreateTask