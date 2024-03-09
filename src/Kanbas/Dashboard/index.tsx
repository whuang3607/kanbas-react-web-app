import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "valentine_meme.jpg"
  });

  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1><hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <button onClick={addNewCourse} className="btn btn-primary">
        Add
      </button><br/>
      <br/>
      <h2>Published Courses ({courses.length})</h2><hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 100 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-text">{course.number}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;