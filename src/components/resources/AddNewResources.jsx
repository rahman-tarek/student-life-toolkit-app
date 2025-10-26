import React from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../../redux/features/resourceSlice";
import FormModal from "../FormModal";

const AddNewResource = ({ open, onClose }) => {
    const dispatch = useDispatch();

    // Define all the fields for this form
    const fields = [
        {
            name: "title",
            label: "Resource Title",
            type: "text",
            placeholder: "Enter resource title...",
        },
        {
            name: "link",
            label: "Link / URL",
            type: "text",
            placeholder: "https://example.com",
        },
        {
            name: "type",
            label: "Resource Type",
            type: "select",
            options: [
                { label: "Link", value: "link" },
                { label: "Video", value: "video" },
                { label: "PDF", value: "pdf" },
            ],
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Brief description of the resource...",
        },
        {
            name: "tags",
            label: "Tags (comma-separated)",
            type: "text",
            placeholder: "Mathematics, Calculus",
        },
    ];

    // Submit handler
    const handleAddResource = (data) => {
        // Clean up tags into array
        const formattedData = {
            ...data,
            tags: data.tags
                ? data.tags.split(",").map((tag) => tag.trim())
                : [],
        };

        dispatch(addResource(formattedData)); // Dispatch to Redux (example)
        onClose(); // Close modal
    };

    return (
        <FormModal
            open={open}
            onClose={onClose}
            title="Add New Resource"
            fields={fields}
            onSubmit={handleAddResource}
            submitText="Add Resource"
        />
    );
};

export default AddNewResource;
