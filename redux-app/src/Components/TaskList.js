import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import './TaskList.css'
import {CSSTransition,TransitionGroup} from "react-transition-group"
import{useSelector,useDispatch}from "react-redux"
import { isDoneTask,addTask,removeTask,editTask} from '../Redux/Actions'
const TaskList = () => {
    const state = useSelector((state) => ({...state.tasks}));
    const dispatch = useDispatch()
    const create =(newTask)=>{
        dispatch(addTask(newTask))
    }
    const edit =(id,editedTask)=>{
        dispatch(editTask({id,editedTask}))
    }
    return (
        <div className="TaskList">
            <h1>Todo App with React Redux</h1>
            <AddTask createTask={create}/>
            <ul>
                <TransitionGroup className="task=list">
                    {state.tasks&&
                    state.tasks.map((task)=>{
                        return (
                            <CSSTransition key={task.id} className="task">
                                <Task
                                key={task.id}
                                id={task.id}
                                description={task.description}
                                isDone={task.isDone}
                                toggleTask={()=>dispatch(isDoneTask(task))}
                                removeTask={()=>dispatch(removeTask(task))} 
                                editTask={edit}
                                />
                            </CSSTransition>  
                        )
                    })}

                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TaskList
