import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../Slice/SliceCompo";

const EditStudent = () => {

    const back = useNavigate();

    const dispatch = useDispatch();

    const index = useLocation().state.index;
    console.log(index);

    const data = useSelector((state) => state.StudentData);
    console.log(data);

    const [info, setInfo] = useState({
        name: data[index].name,
        age: data[index].age,
        course: data[index].course,
        batch: data[index].batch
    })

    const handlechange = (e) => {
        setInfo({...info, [e.target.name] : e.target.value})
    }

    const handleclick = () => {
        dispatch(editStudent({info, index}));
        back('/Student');
    }

    return(
        <>
            <h1 className="heading">Edit Student Data</h1>

            <div>
                <form className="editform">
                    <label>Name: </label>
                    <input name="name" value={info.name} type="text" placeholder="Enter Your Name" onChange={handlechange} /><br/>

                    <label>Age: </label>
                    <input name="age" value={info.age} type="number" placeholder="Enter Your Age" onChange={handlechange} /><br/>

                    <label>Course: </label>
                    <input name="course" value={info.course} type="text" placeholder="Enter Your Course" onChange={handlechange} /><br/>

                    <label>Batch: </label>
                    <input name="batch" value={info.batch} type="text" placeholder="Enter Your Batch" onChange={handlechange} /><br/><br/>

                    <button className="btn" onClick={() => back('/Student')}>Back</button>
                    <button className="btn" onClick={handleclick}>Update</button>
                </form>    
            </div>
        </>
    )
}

export default EditStudent;