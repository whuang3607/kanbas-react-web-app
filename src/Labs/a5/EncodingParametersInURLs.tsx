import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    return (
        <div>
        <h3>Encoding Parameters In URLs</h3>
        <h4>Calculator</h4>
        <input className="form-control" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
        <br/>
        <input className="form-control" type="number" onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
        <h3>Path Parameters</h3>
        <Link to={`http://localhost:4000/a5/add/${a}/${b}`}  
        className="btn btn-primary">
            Add {a} + {b}                    
        </Link>
        &emsp;
        <Link to={`http://localhost:4000/a5/subtract/${a}/${b}`}  
        className="btn btn-danger">
            Subtract {a} - {b}                    
        </Link>
        </div>
    );
}