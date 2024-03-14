import React from "react";
import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
import {
    deleteAssignment,
    selectAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  console.log(assignment)
  const dispatch = useDispatch();
  return (
    <>
        <div className="form-group row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Search for Assignment"/>
            </div>
            <div className="col">
                <button className="btn btn-light">+ Group</button>&ensp;

                <Link to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`} 
                className="wd-assignment-edit-link" onClick={() => dispatch(selectAssignment({ title: "New Assignment", description: "New Assignment Description", 
                dueDate: "03/13/2024", points: "100", availableFromDate: "02/28/2024", availableUntilDate: "03/27/2024"}))}>
                    <button className="btn btn-success">+ Assignment</button>
                </Link>&ensp;
                <button className="btn btn-light">
                    <FaEllipsisV/>
                </button>
            </div>
        </div>
        <br/>
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
                <li key={index} className="list-group-item">
                    <div className="row">
                        <div className="col-1">
                            <FaEllipsisV className="me-2" />
                        </div>
                        <div className="col-1">
                            <FaRegEdit className="me-2" style={{"color":"green"}}/>
                        </div>
                        <div className="col">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} 
                            className="wd-assignment-edit-link" onClick={() => dispatch(selectAssignment(assignment))}>{assignment.title}
                            </Link><br/>
                            <div>
                                <span style={{"color":"red"}}>Multiple Modules </span>
                                <span>| Due {assignment.dueDate} at 11:59pm | {assignment.points} pts</span>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />&emsp;
                                    {/* <button className="btn btn-danger float-end" 
                                    style={{"borderRadius":"10px"}}
                                    onClick={() => dispatch(deleteAssignment(assignment._id))}>
                                        Delete
                                    </button>                                     */}
                                </span>
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