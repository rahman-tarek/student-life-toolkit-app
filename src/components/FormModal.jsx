import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const FormModal = ({
    open,
    onClose,
    title = "Form",
    fields = [],
    onSubmit,
    submitText = "Submit"
}) => {
    const [formData, setFormData] = useState({});

    // Handle input changes dynamically
    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }
    return (
        <Modal open={open} onClose={onClose}>
            <Box className="w-full p-4 md:w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="p-6 max-w-full bg-white rounded-lg border border-gray-300 relative shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {fields.map((field, index) => (
                            <div key={index} className="item flex flex-col">
                                <label className="font-medium text-gray-700 mb-1">{field.label}</label>

                                {/* Input type detection */}
                                {field.type === "textarea" ? (
                                    <textarea
                                        placeholder={field.placeholder}
                                        value={formData[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                        className="border rounded-md p-2 h-28"
                                    />
                                ) : field.type === "select" ? (
                                    <select
                                        value={formData[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                        className="border rounded-md p-2 bg-white"
                                    >
                                        <option value="">Select {field.label}</option>
                                        {field.options?.map((opt, i) => (
                                            <option key={i} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={formData[field.name] || ""}
                                        onChange={(e) => handleChange(field.name, e.target.value)}
                                        className="border rounded-md p-2"
                                    />
                                )}
                            </div>
                        ))}

                        <div className="flex justify-between mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-800 text-white rounded-md font-semibold hover:bg-green-700 transition"
                            >
                                {submitText}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md font-semibold hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>

                    <MdClose
                        size={20}
                        color="gray"
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={onClose}
                    />
                </div>
            </Box>
        </Modal>
    )
}

export default FormModal