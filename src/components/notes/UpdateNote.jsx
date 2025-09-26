
import { MdClose } from 'react-icons/md';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from '../../redux/features/notesSlice';



const UpdateNote = ({ setData }) => {
    const [title, setTitle] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [content, setContent] = React.useState("");

    const dispatch = useDispatch();


    // New assignments handler
    const addNewNotesHandler = (e) => {
        e.preventDefault();
        const newNote = {
            title, subject, content
        }
        dispatch(addNote(newNote));
    }
    return (
        <>
            <Modal
                open={onClose}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="add-notes md:w-md">
                        <div className="p-6 max-w-full bg-white rounded-lg border border-gray-300">
                            <h3 className="text-xl font-bold text-gray-800">Create New Note</h3>

                            <form action="" className="flex flex-col items-left gap-4 mt-2"
                                onSubmit={addNewNotesHandler}
                            >
                                <div className="item">
                                    <label htmlFor="" className="">Title</label>
                                    <input type="text" name="" placeholder="Enter note title..."
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="">Subject</label>
                                    <input type="text" name=""
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Enter Subject"
                                    />
                                </div>
                                <div className="item">
                                    <label htmlFor="">Content</label>
                                    <textarea type="text" name=""
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Write your note content here..."
                                        className='h-40'
                                    />
                                </div>



                                <div className="py-2 flex flex-row justify-between items-center">
                                    <button
                                        type="submit"
                                        className="outline-none px-4 py-2 rounded-md bg-green-800 text-gray-100 text-sm font-bold cursor-pointer">Add Assignment</button>
                                    <button className="outline-none px-2 py-2 rounded-md bg-gray-300 text-gray-800 text-sm font-bold"
                                        onClick={onClose}
                                    >Cancel</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <MdClose size={20} color="gray-800" className="absolute top-1 right-1 m-2 cursor-pointer" onClick={onClose} />
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}


export default UpdateNote;