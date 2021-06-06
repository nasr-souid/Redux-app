import React from 'react'
import {useSelector} from 'react-redux'
import './App.css'
import TaskList from './Components/TaskList';


function App() {
    const state = useSelector((state) => ({...state}));
    return (
        <div className="App">
            <TaskList/>

        </div>
    )
}

export default App

