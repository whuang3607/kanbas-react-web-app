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
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import {Modal, Button} from 'react-bootstrap';
import KanbasNavigation from "../Navigation";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const assignment = assignments.find((assignment) => assignment._id === location.pathname.split("/").slice(-1).join(""))
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div>
        <h5>
            <nav className="breadcrumb">
              <div className="col-2">
                <Button className="nextButton btn btn-light" onClick={() => {setShow(true)}}>
                    <HiMiniBars3/>
                </Button>
                <Modal show={show} onHide={() => {setShow(false);}}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="kanbas-navigation-hamburger">
                      <KanbasNavigation/>
                    </Modal.Body>
                </Modal>
              </div>
              <div className="col">
              <ol className="breadcrumb">
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
                        <Route path="Quizzes" element={<span className="wd-second-link">Quizzes</span>} />
                        <Route path="Grades" element={<span className="wd-second-link">Grades</span>} />
                        <Route path="People" element={<span className="wd-second-link">People</span>} />
                        <Route path="Panopto" element={<span className="wd-second-link">Panopto Video</span>} />
                        <Route path="Discussions" element={<span className="wd-second-link">Discussions</span>} />
                        <Route path="Announcements" element={<span className="wd-second-link">Announcements</span>} />
                        <Route path="Pages" element={<span className="wd-second-link">Pages</span>} />
                        <Route path="Files" element={<span className="wd-second-link">Files</span>} />
                      </Routes>
                    </li>
                    <Routes>
                      <Route path="Assignments/:assignmentId" element={
                          <li className="breadcrumb-item">
                            {typeof assignment === "undefined" && <span className="wd-second-link">New Assignment</span>}
                            <span className="wd-second-link">{assignment?.title}</span>
                          </li>
                        } />
                    </Routes>
                </ol>
              </div>
              <div className="float-end">
                <Button className="nextButton btn btn-light d-sm-block d-md-none" onClick={() => {setShow2(true)}}>
                  <FaCaretDown/>
                </Button>
                <Modal show={show2} onHide={() => {setShow2(false);}}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="kanbas-navigation-hamburger">
                      <CourseNavigation/>
                    </Modal.Body>
                </Modal>
              </div>

            </nav>
        </h5>
        <div className="row">
        <div className="d-none d-md-block col-2">
          <CourseNavigation />
        </div>
        <div className="flex-fill col-10">
          <div
            className="overflow-y-scroll position-relative bottom-0 end-0">
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
    </div>
  );
}
export default Courses;