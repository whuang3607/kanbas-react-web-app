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
} from "./../assignmentsReducer";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  // filter out assignment based on assignmentId from assignment list, get particular assignment details
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Assignment Name</h2>
      {assignmentId === "NewAssignment" && <input value="New Assignment" className="form-control mb-2" />}
      {assignmentId === "NewAssignment" && 
      <textarea className="form-control" id="textarea1" rows={3}>
        New Assignment Description
      </textarea>}
      {assignmentId !== "NewAssignment" && <input value={assignment?.title} className="form-control mb-2" />}
      {assignmentId !== "NewAssignment" &&       
      <textarea className="form-control" id="textarea1" rows={3}>
        This is the assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
      </textarea>}
      <br/>
      <form>
        <div className="form-group row">
            <label className="col-2 col-form-label">
                Points
            </label>
            <div className="col-sm-10">
                <input type="number" className="form-control w-50" id="points" placeholder={assignment?.points} max="100" min="0"/>
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
                      <input type="text" className="form-control" placeholder={assignment?.dueDate} />
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
                          <input type="text" className="form-control" placeholder={assignment?.dueDate}/>
                          <span className="input-group-text">
                              <button className="btn">
                                  <FaCalendar/>
                              </button>
                          </span>
                      </div>
                      <div className="input-group col">
                          <input type="text" className="form-control" placeholder={assignment?.dueDate}/>
                          <span className="input-group-text">
                              <button className="btn">
                                <FaCalendar/>
                              </button>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-2 col-form-label"></div>
              <div className="col-sm-10 border border-black rounded w-50 add-button">
                  <button className="btn">
                      + Add
                  </button>
              </div>
          </div>
      </form>
      <br/>
      {/* <div className="form-check col">
          <input className="form-check-input" type="checkbox" id="r7"/>
          <label className="form-check-label">Notify users that this content has changed</label>
      </div> */}
      <div className="cancel-save-buttons">
        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
          Save
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end">
          Cancel
        </Link>
      </div>
    </div>
  );
}
export default AssignmentEditor;