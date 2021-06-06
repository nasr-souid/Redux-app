import React,{useState} from 'react'
import "./AddTask.css"

const AddTask = ({createTask}) => {
    const [task, setTask] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault();
        createTask(task);
        setTask("");
    }
    return(
        <form className ="AddTask" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Task"
            id="Task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button className="AddTask-button">Add Task</button>
        </form>
    )
}

export default AddTask
