import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Slice/SliceCompo";

const AddStudent = () => {

    const back = useNavigate();

    const dispatch = useDispatch();
    
    const [info, setinfo] = useState({
        name: "",
        age: "",
        course: "",
        branch: ""
    })
    
    const handlechange = (e) => {
        setinfo({...info, [e.target.name] : e.target.value})
    }

    const handleclick = () => {
        if (
            info.name === '' || info.age === '' || info.course === '' || info.batch === ''
        ) {
            alert('Please fill in all fields');
        } else {
            dispatch(addStudent(info))
            back('/Student')
        }
    }


    return(
        <>
            <h1 className="heading">Add New Student Details</h1>

            <div>
                <form className="editform">
                    <label>Name: </label>
                    <input name="name" type="text" placeholder="Enter Your Name" onChange={handlechange} /><br/>

                    <label>Age: </label>
                    <input name="age" type="number" placeholder="Enter Your Age" onChange={handlechange} /><br/>

                    <label>Course: </label>
                    <input name="course" type="text" placeholder="Enter Your Course" onChange={handlechange} /><br/>

                    <label>Batch: </label>
                    <input name="batch" type="text" placeholder="Enter Your Batch" onChange={handlechange} /><br/><br/>

                    <button className="btn" onClick={() => back('/Student')}>Back</button>
                    <button className="btn" onClick={handleclick}>Add Student</button>
                </form>    
            </div>
        </>
    )
}

export default AddStudent;