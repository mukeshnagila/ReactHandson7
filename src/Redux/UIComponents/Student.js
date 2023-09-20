import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Student = () => {
    const data = useSelector((state) => state.StudentData)
    console.log(data);

    const Navi = useNavigate();

    return(
        <>
            <h1 className="heading">All Student's Details</h1>
            <div className="forbtn">
                    <button className="addbtn btn" onClick={() => Navi('/AddStudent')}>Add New Student</button>
            </div>
            <div className="StuData">
                    {
                        <table className="table" border="1px">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Course</th>
                                    <th>Batch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {data.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{item.name}</td>   
                                                <td>{item.age}</td>   
                                                <td>{item.course}</td>   
                                                <td>{item.batch}</td>   
                                                <td><NavLink to="/EditStudent" state={{index}}>Edit</NavLink></td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    }  
            </div>

        </>
    )
}

export default Student;