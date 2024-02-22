import { assignments, courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const assignment = assignments.find((assignment) => assignment._id === location.pathname.split("/").slice(-1).join(""))
  return (
    <div>
        <h5>
            <nav className="breadcrumb">
                <ol className="breadcrumb">
                    <li>&ensp;<HiMiniBars3 />&ensp;</li>
                    <li className="breadcrumb-item"><span className="wd-first-link">{course?.name}</span></li>
                    <li className="breadcrumb-item">
                      <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<span className="wd-second-link">Home</span>}/>
                        <Route path="Modules" element={<span className="wd-second-link">Modules</span>} />
                        <Route path="Piazza" element={<span className="wd-second-link">Piazza</span>} />
                        <Route path="Zoom" element={<span className="wd-second-link">Zoom Meetings</span>} />
                        <Route path="Assignments" element={<span className="wd-second-link">Assignments</span>} />
                        <Route path="Assignments/:assignmentId" element={<span className="wd-first-link">Assignments</span>} />
                        <Route path="Quizzes" element={<a href="" className="wd-second-link">Quizzes</a>} />
                        <Route path="Grades" element={<a href="" className="wd-second-link">Grades</a>} />
                        <Route path="People" element={<a href="" className="wd-second-link">People</a>} />
                        <Route path="Panopto" element={<a href="" className="wd-second-link">Panopto Video</a>} />
                        <Route path="Discussions" element={<a href="" className="wd-second-link">Discussions</a>} />
                        <Route path="Announcements" element={<a href="" className="wd-second-link">Announcements</a>} />
                        <Route path="Pages" element={<a href="" className="wd-second-link">Pages</a>} />
                        <Route path="Files" element={<a href="" className="wd-second-link">Files</a>} />
                      </Routes>
                    </li>
                    <Routes>
                      <Route path="Assignments/:assignmentId" element={
                          <li className="breadcrumb-item">
                              <span className="wd-second-link">{assignment?.title}</span>
                          </li>
                        } />
                    </Routes>
                </ol>
            </nav>
        </h5>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom Meetings</h2>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h2>People</h2>} />
            <Route path="Panopto" element={<h2>Panopto Video</h2>} />
            <Route path="Discussions" element={<h2>Discussions</h2>} />
            <Route path="Announcements" element={<h2>Announcements</h2>} />
            <Route path="Pages" element={<h2>Pages</h2>} />
            <Route path="Files" element={<h2>Files</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;