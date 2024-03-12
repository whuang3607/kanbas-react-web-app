import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  return (
    <>
        <div className="form-group row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Search for Assignment"/>
            </div>
            <div className="col">
                <button className="btn btn-light">Add Group</button>&ensp;
                <button className="btn btn-success">Add Assignment</button>&ensp;
                <button className="btn btn-light">
                    <FaEllipsisV/>
                </button>
            </div>
        </div>
        <ul className="list-group wd-modules">
        <li className="list-group-item">
            <div>
            <FaEllipsisV className="me-2" /> 
            <FaCaretDown className="me-2" />
            ASSIGNMENTS
            <span className="float-end">
                <span className="border border-dark rounded" style={{"padding":"0px 10px 0px 10px"}}>40% of Total</span>
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
            </div>
            <ul className="list-group wd-assignment-left-border-color">
            {assignmentList
                .filter((assignment) => assignment.course === courseId)
                .map((assignment, index) => (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <FaEllipsisV className="me-2" />
                        </div>
                        <div className="col-1">
                            <FaRegEdit className="me-2" style={{"color":"green"}}/>
                        </div>
                        <div className="col">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} 
                            className="wd-assignment-edit-link">{assignment.title}</Link><br/>
                            <div>
                                {assignment.title === "A1 - ENV + HTML" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A1 - ENV + HTML" && <span>| Due Sep 18 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A1 - ENV + HTML" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                                {assignment.title === "A2 - CSS + BOOTSTRAP" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A2 - CSS + BOOTSTRAP" && <span>| Due Oct 2 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A2 - CSS + BOOTSTRAP" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                                {assignment.title === "A3 - JS + REACT" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A3 - JS + REACT" && <span>| Due Oct 16 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A3 - JS + REACT" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                                {assignment.title === "A4 - STATE + REDUX" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A4 - STATE + REDUX" && <span>| Due Oct 30 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A4 - STATE + REDUX" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                                {assignment.title === "A5 - NODE + SESSION" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A5 - NODE + SESSION" && <span>| Due Nov 13 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A5 - NODE + SESSION" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                                {assignment.title === "A6 - MONGO" && <span style={{"color":"red"}}>Multiple Modules </span>}
                                {assignment.title === "A6 - MONGO" && <span>| Due Sep 18 at 11:59pm | 100 pts</span>}
                                {assignment.title === "A6 - MONGO" && <span className="float-end"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>}
                            </div>
                        </div>
                    </div>
                </li>))}
            </ul>
        </li>
        </ul>
    </>
);}
export default Assignments;