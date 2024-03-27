import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    const [result, setResult] = useState(0);
    const fetchSum = async (a: any, b: any) => {
      const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
      setResult(response.data);
    };
    const fetchSubtraction = async (a: any, b: any) => {
      const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
      setResult(response.data);
    };
  
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get("http://localhost:4000/a5/welcome");
        setWelcome(response.data);
    };

    useEffect(() => {
        fetchWelcome();
    }, []);

    return (
        <div>
        <h3>Encoding Parameters In URLs</h3>
        <h4>Calculator</h4>
        <input className="form-control w-25" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
        <br/>
        <input className="form-control w-25" type="number" onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
        <br/>
        <input className="form-control w-25" value={result} type="number" readOnly />
        <br/>
        
        <h3>Fetch Result</h3>
        <button className="btn btn-primary" onClick={() => fetchSum(a, b)} >
            Fetch Sum of {a} + {b}
        </button>
        <br/><br/>
        <button className="btn btn-danger" onClick={() => fetchSubtraction(a, b)} >
            Fetch Substraction of {a} - {b}
        </button>
        <br/><br/>


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
        &emsp;
        <Link to={`http://localhost:4000/a5/multiply/${a}/${b}`}  
        className="btn btn-warning">
            Multiply {a} * {b}                    
        </Link>
        &emsp;
        <Link to={`http://localhost:4000/a5/divide/${a}/${b}`}  
        className="btn btn-info">
            Divide {a} / {b}                    
        </Link>
        <br/><br/><br/>

        <h4>Integrating React with APIs</h4>
        <h5>Fetching Welcome</h5>
        <h6>{welcome}</h6>
        </div>
    );
}