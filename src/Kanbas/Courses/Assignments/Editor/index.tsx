import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCalendar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import {
    addAssignment,
    updateAssignment,
    selectAssignment,
} from "./../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
  
    return (
        <div>
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                className="form-control"
            />
            <br/>
            <textarea value={assignment.description}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
                className="form-control"
            />
            <br/>
            <form>
            <div className="form-group row">
                <label className="col-2 col-form-label">
                    Points
                </label>
                <div className="col-sm-10">
                    <input type="number"
                        value={assignment.points}
                        onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
                        className="form-control w-50" id="points" max="100" min="0"
                    />
                </div>
            </div>
            </form>
            <br/>
            {/* <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    Assignment Group
                </label>
                <div className="col-sm-10">
                    <select className="form-select w-50">
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="quizzes">QUIZZES</option>
                        <option value="exams">EXAMS</option>
                        <option value="project">PROJECT</option>
                    </select>
                </div>
            </div>
            </form>
            <br/>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Display Grade as
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select w-50">
                            <option value="percentage">Percentage</option>
                        </select>
                    </div>
                </div>
            </form>
            <br/>
            <div className="row">
            <div className="w-25"></div>
            <div className="w-50">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6"/>
                <label className="form-check-label">Do not count this assignment towards the final grade</label>
                </div>
            </div>
            <div className="w-25"></div>
            </div>
            <br/> */}
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">
                        Assign
                    </label>
                    <div className="col-sm-10 border border-black rounded w-50">
                        {/* <div className="row assign-format">
                            Assign to
                        </div>
                        <div className="border border-black rounded">
                            <div className="border border-black rounded light-gray w-50">
                                Everyone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn">
                                    <IoMdClose/>
                                </button>
                            </div>
                        </div> */}
                        <div className="row due-format">
                            Due
                        </div>
                        <div className="input-group">
                            <input type="text"
                                value={assignment.dueDate}
                                onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                                className="form-control w-50" id="due-date"
                            />
                            <span className="input-group-text">
                                <button className="btn">
                                    <FaCalendar/>
                                </button>
                            </span>
                        </div>
                        <div className="row due-format">
                            <div className="col">
                                Available from
                            </div>
                            <div className="col">
                                Until
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group col">
                                <input type="text"
                                    value={assignment.availableFromDate}
                                    onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                                    className="form-control w-50" id="available-from-date"
                                />
                                <span className="input-group-text">
                                    <button className="btn">
                                        <FaCalendar/>
                                    </button>
                                </span>
                            </div>
                            <div className="input-group col">
                                <input type="text"
                                    value={assignment.availableUntilDate}
                                    onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                    className="form-control w-50" id="available-until-date"
                                />
                                <span className="input-group-text">
                                    <button className="btn">
                                        <FaCalendar/>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-sm-2 col-form-label"></div>
                    <div className="col-sm-10 border border-black rounded w-50 add-button">
                        <button className="btn">
                            + Add
                        </button>
                    </div>
                </div> */}
            </form>
            <br/>
            {/* <div className="form-check col">
                <input className="form-check-input" type="checkbox" id="r7"/>
                <label className="form-check-label">Notify users that this content has changed</label>
            </div> */}
            <div className="cancel-save-buttons">
            {assignmentId === "NewAssignment" &&
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} 
                onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))} 
                className="btn btn-success ms-2 float-end">
                    Save
                </Link>
            }
            {assignmentId !== "NewAssignment" &&
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} 
                onClick={() => dispatch(updateAssignment(assignment))} 
                className="btn btn-success ms-2 float-end">
                    Save
                </Link>
            }
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger float-end">
                Cancel
            </Link>
            </div>
        </div>
    );
}
export default AssignmentEditor;