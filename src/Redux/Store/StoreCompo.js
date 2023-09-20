import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Slice/SliceCompo";


const Store = configureStore({
    reducer : {
        StudentData : StudentSlice,
    }
})

export default Store;