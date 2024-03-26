import React, { useState } from "react";
import { Link } from "react-router-dom";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    
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
                    <Link to={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
                        Update Title                    
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

        </div>
    );
}
export default WorkingWithObjects;