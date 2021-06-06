import React ,{useState} from 'react'

import "./Task.css"
import{TransitionGroup,CSSTransition} from "react-transition-group"

const Task = ({toggleTask,description,isDone,id,removeTask,editTask}) => {
    const [isEditing,setIsEditing]=useState(false)
    const [updateTask,setUpdateTask]=useState(description)
    const handleEdit =(e)=>{
        e.preventDefault()
        editTask(id,editTask);
        setIsEditing(false);
    }
    return (
        <TransitionGroup className={isDone?"Taskisdone":"Task"}>
            {isEditing ? (
                <CSSTransition key ="editing" timeout={500}classNames="form">
                    <form className ="Task-edit-form" onSubmit={handleEdit}>
                        <input
                            type="text"   
                            name="task "
                            value={updateTask}
                            onChange={(e)=>setUpdateTask(e.target.value)}
                            / >
                        <button >Save</button>
                    </form>
                </CSSTransition>

            ):(
                <CSSTransition key="normal" timeout={500} className="description-text">
                <li className="Task-description" onClick={toggleTask}>
                    {description}
                </li>
            </CSSTransition>

            )}

            <div className="Task-buttons">
                <button onclick={()=>setIsEditing(true)}>
                    Edit
                    <i className="fas fa-trash"/> 
                </button>
                <button onclick={removeTask}>
                    Delete
                    <i className="fas fa-trash"/> 
                </button>

            </div>

        </TransitionGroup>
    )
}

export default Task   
