import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFilter, FaSearch, FaCaretDown, FaCog, FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import "../../styles.css"

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <div className="wd-modules-top-buttons">
        <button className="btn btn-light">
          <FaCaretSquareRight/>&emsp;
          Import
        </button>
        &emsp;                        
        <button className="btn btn-light">
            <div className="input-group">
                <span className="input-group-text">
                    <FaCaretSquareLeft/>
                </span>
                <select className="form-select" aria-label="Default select example">
                    <option value="export">Export</option>
                    <option value="export_current_gradebook">Export Current Gradebook</option>
                    <option value="export_entire_gradebook">Export Entire Gradebook</option>
                </select>
            </div>
        </button>
        &emsp;
        <button>
            <FaCog/>
        </button>
      </div>
      <br/>
      <div className="row">
          <div className="col">
              <label className="form-label">
                  Student Names
              </label>
              <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch/>
                  </span>
                  <input className="form-control" id="student-name" placeholder="Search Students"/>
                  <span className="input-group-text">
                    <FaCaretDown/>
                  </span>
              </div>
          </div>
          <div className="col">
              <label className="form-label">
                  Assignment Names
              </label>
              <div className="input-group">
                  <span className="input-group-text">
                      <FaSearch/>
                  </span>
                  <input className="form-control" id="assignment-name" placeholder="Search Assignments"/>
                  <span className="input-group-text">
                      <i className="fa fa-caret-down"></i>
                  </span>
              </div>
          </div>
      </div>
      <br/>
      <div className="row filter-btn">
          <button className="btn btn-light w-25">
              <FaFilter/>
              Apply Filters
          </button>
      </div>
      <br/>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && assignment.course === courseId);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;
