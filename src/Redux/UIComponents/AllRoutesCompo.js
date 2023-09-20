import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import EditStudent from "./EditStudent";
import AddStudent from "./AddStudent";

const AllRoutesCompo = () => {
    return(
        <>
                <BrowserRouter>
                        <div className="nav">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/Student">Student's</NavLink>
                                <NavLink to="/Contact">Contact</NavLink>
                        </div>

                        <div>
                            <Routes>
                                 <Route path="/" element={<Home/>} />
                                 <Route path="/Student" element={<Student/>} />
                                 <Route path="/Contact" element={<Contact/>} />
                                 <Route path="/EditStudent" element={<EditStudent/>} />
                                 <Route path="/AddStudent" element={<AddStudent/>} />
                            </Routes>
                        </div>
                </BrowserRouter>
        </>
    )
}

export default AllRoutesCompo;