import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name: 'Mukesh' , age: 24 , course: "MERN", batch: "EA24"},
    {name: 'Rakesh' , age: 34 , course: "MEEN", batch: "EA23"},
    {name: 'Suresh' , age: 44 , course: "MERN", batch: "EA24"},
    {name: 'Ramesh' , age: 54 , course: "MEEN", batch: "EA23"},
    {name: 'Lokesh' , age: 64 , course: "MERN", batch: "EA24"}
]

const StudentSlice = createSlice({
    name : "StudentData",
    initialState,
    reducers : {
        editStudent : (state, action) => {
            state[action.payload.index] = action.payload.info;
        },
        addStudent : (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {editStudent, addStudent} = StudentSlice.actions;
export default StudentSlice.reducer;