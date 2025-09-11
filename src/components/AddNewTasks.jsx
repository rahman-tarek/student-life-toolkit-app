import DatePickerValue from "./DatePicker";
import { MdClose } from 'react-icons/md';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment } from "../redux/features/assignmentSlice";
import dayjs from "dayjs";


const AddNewAssignment = (isOpen) => {
    const [open, setOpen] = React.useState(isOpen);
    const [title, setTitle] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [type, setType] = React.useState("");
    const [dueDate, setDueDate] = useState("");

    // Get data from state
    const assignments = useSelector((state) => state.assignment);

    const dispatch = useDispatch();


    // New assignments handler
    const addNewAssignmentHandler = (e) => {
        e.preventDefault();
        const newAssignment = {
            title, subject, type, dueDate
        }
        dispatch(addAssignment(newAssignment))
    }
    return (
        <>
            <Modal
                open={open}
                onClose={!open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="add-assignment">
                        <div className="p-6 max-w-full bg-white rounded-lg border border-gray-300">
                            <h3 className="text-xl font-bold text-gray-800">Add new assignments</h3>
                            <p className="text-gray-700 mt-2">Create a new assignment or exam to track your academic tasks.</p>
                            <form action="" className="flex flex-col items-left gap-4 mt-2"
                                onSubmit={addNewAssignmentHandler}
                            >
                                <div className="item">
                                    <label htmlFor="" className="">Title</label>
                                    <input type="text" name="" placeholder="Assignment title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="">Subject</label>
                                    <input type="text" name=""
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Subject name"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="">Type</label>
                                    <select name="" id="" value={type} onChange={(e) => setType(e.target.value)} >
                                        {
                                            assignments.map((item, index) => (
                                                <option value={item.type} key={index}>{item.type}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <DatePickerValue parentDate={setDueDate} />
                                </div>
                                <div className="item">
                                    <label htmlFor="">File Upload(Optional)</label>
                                    <input type="file" name="" placeholder="Choose File" />
                                </div>
                                <div className="py-2 flex flex-row justify-between items-center">
                                    <button
                                        type="submit"
                                        className="outline-none px-4 py-2 rounded-md bg-green-800 text-gray-100 text-sm font-bold">Add Assignment</button>
                                    <button className="outline-none px-2 py-2 rounded-md bg-gray-300 text-gray-800 text-sm font-bold"
                                        onClick={() => setOpen(!open)}
                                    >Cancel</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <MdClose size={20} color="gray-800" className="absolute top-1 right-1 m-2 cursor-pointer" onClick={() => setOpen(!setOpen)} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}


export default AddNewAssignment;