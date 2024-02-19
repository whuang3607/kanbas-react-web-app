import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Link, useLocation } from "react-router-dom";
import Modules from "./Modules";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  return (
    <div>
        <h5>
            <nav className="breadcrumb">
                <ol className="breadcrumb">
                    <li>&ensp;<HiMiniBars3 />&ensp;</li>
                    <li className="breadcrumb-item"><a href="" className="wd-first-link">{course?.name}</a></li>
                    <li className="breadcrumb-item">
                      <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<a href="" className="wd-second-link">Home</a>}/>
                        <Route path="Modules" element={<a href="" className="wd-second-link">Modules</a>} />
                        <Route path="Piazza" element={<a href="" className="wd-second-link">Piazza</a>} />
                        <Route path="Assignments" element={<a href="" className="wd-second-link">Assignments</a>} />
                        <Route path="Assignments/:assignmentId" element={<a href="" className="wd-second-link">Assignment Editor</a>} />
                        <Route path="Grades" element={<a href="" className="wd-second-link">Grades</a>} />
                      </Routes>
                    </li>
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
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;