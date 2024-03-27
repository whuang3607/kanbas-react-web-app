import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", 
        completed: false, 
        score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
    const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
    };
    useEffect(() => {
    fetchAssignment();
    }, []);

    const [module, setModule] = useState({
        id: "M1",
        name: "Welcome to Web Dev",
        description: "Learn to create a web page",
        course: "CS 5610"
    });
    const MODULE_URL = "http://localhost:4000/a5/module"

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <Link to={`http://localhost:4000/a5/assignment`}  
            className="btn btn-primary">
                Get Assignment                    
            </Link>
            <br/><br/>

            <h4>Retrieving Properties</h4>
            <Link to={`http://localhost:4000/a5/assignment/title`}  
            className="btn btn-secondary">
                Get Title                    
            </Link>
            <br/><br/>

            <h4>Modifying Properties</h4>
            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="text" onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} value={assignment.title}/>
                </div>
                <div className="col">
                    {/* <Link to={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
                        Update Title to: {assignment.title}                    
                    </Link> */}
                    <button onClick={updateTitle} className="btn btn-primary">
                        Update Title to: {assignment.title}
                    </button>
                </div>
                <div className="col">
                    <button onClick={fetchAssignment} className="btn btn-success">
                        Fetch Assignment
                    </button>
                </div>
            </div>
            <br/>
            
            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="number" onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} value={assignment.score}/>
                </div>
                <div className="col">
                    <Link to={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-secondary">
                        Update Score                    
                    </Link>
                </div>
            </div>
            <br/>

            <div className="row">
                <div className="col-3" style={{"textAlign": "center"}}>
                    <input className="form-check-input" type="checkbox" id="completed-checkbox" onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked})}/>
                </div>
                <div className="col">
                    <Link to={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-warning">
                        Update Completed                    
                    </Link>
                </div>
            </div>
            <br/>

            <h3>Working with Module Object</h3>
            <h4>Retrieving Module Object</h4>
            <Link to={`http://localhost:4000/a5/module`}  
            className="btn btn-primary">
                Get Module                    
            </Link>
            <br/><br/>

            <h4>Retrieving Module Properties</h4>
            <Link to={`http://localhost:4000/a5/module/name`}  
            className="btn btn-secondary">
                Get Name                    
            </Link>
            <br/><br/>

            <h4>Modifying Module Properties</h4>
            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="text" onChange={(e) => setModule({ ...module, name: e.target.value })} value={module.name}/>
                </div>
                <div className="col">
                    <Link to={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
                        Update Name                    
                    </Link>
                </div>
            </div>
            <br/>

            <div className="row">
                <div className="col-3">
                    <input className="form-control" type="text" onChange={(e) => setModule({ ...module, description: e.target.value })} value={module.description}/>
                </div>
                <div className="col">
                    <Link to={`${MODULE_URL}/description/${module.description}`} className="btn btn-success">
                        Update Description                    
                    </Link>
                </div>
            </div>
            <br/>

        </div>
    );
}
export default WorkingWithObjects;