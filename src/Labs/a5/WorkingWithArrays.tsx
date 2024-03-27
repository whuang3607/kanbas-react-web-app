import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react"; 
import axios from "axios";

export default function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState<any[]>([]);
    
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    
    const removeTodo = async (todo: any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };    

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <Link to={API} className="btn btn-primary">
            Get Todos                    
        </Link>
        <br/><br/>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input className="form-control w-25" type="number" value={todo.id} 
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
        <br/>
        <Link to={`${API}/${todo.id}`} className="btn btn-secondary">
            Get Todo by ID                    
        </Link>
        <br/><br/>

        <h3>Filtering Array Items</h3>
        <Link to={`${API}?completed=true`} className="btn btn-warning">
            Get Completed Todos                    
        </Link>
        <br/><br/>

        <h3>Creating new Items in an Array</h3>
        <Link to={`${API}/create`} className="btn btn-success">
            Create Todos
        </Link>
        <br/><br/>

        <h3>Deleting from an Array</h3>
        <Link to={`${API}/${todo.id}/delete`} className="btn btn-info">
            Delete Todo with ID = {todo.id}
        </Link>
        <br/><br/>

        <h3>Updating an Item in an Array</h3>
        <input className="form-control w-25" type="number" value={todo.id}
        onChange={(e) => setTodo({...todo, id: parseInt(e.target.value) })}/>
        <br/>
        <input className="form-control w-50" type="text" value={todo.title}
        onChange={(e) => setTodo({...todo, title: e.target.value })}/>
        <br/>
        <button onClick={createTodo} className="btn btn-info">
            Create Todo
        </button>
        <br/><br/>
        {/* <Link to={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-success">
            Update Title to {todo.title}
        </Link> */}
        <button onClick={updateTitle} className="btn btn-success">
            Update Title
        </button>
        <br/><br/>
        <ul className="list-group w-50">
            {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
                <div className="row">
                    <div className="col-8">
                        {todo.title}
                    </div>
                    <div className="col-2">
                        <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning">
                            Edit
                        </button>
                    </div>
                    <div className="col-2">
                        <button onClick={() => removeTodo(todo)} className="btn btn-danger">
                            Remove
                        </button>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        <br/><br/>



        <div className="row">
            <div className="col-3" style={{"textAlign": "center"}}>
                <input className="form-check-input" type="checkbox" id="completed-checkbox" onChange={(e) => setTodo({ ...todo, completed: e.target.checked})}/>
            </div>
            <div className="col">
                <Link to={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-warning">
                    Update Completed to                    
                </Link>
            </div>
        </div>
        <br/><br/>
        
        <div className="row">
            <div className="col-5">
                <input className="form-control" type="text" value={todo.description}
                onChange={(e) => setTodo({...todo, description: e.target.value })}/>                
            </div>
            <div className="col">
                <Link to={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-success">
                    Update Description to {todo.description}
                </Link>
            </div>
        </div>
        <br/><br/>
      </div>
    );
}