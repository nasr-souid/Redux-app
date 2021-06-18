import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Actions";
export default function AddTask() {
    const [newTask, useNewTask] = useState("");
    const dispatch = useDispatch();
    function NewTask(input) {
        useNewTask(input);
    }
    function SubmitTask() {
        dispatch(addTask(newTask));
        useNewTask("");
    }
    return (
        <div className="AddTask">
            <input
                type="text"
                style={{
                    backgroundColor: "#313e4f",
                    height: "56px",
                    marginRight: "2px",
                    color: "#a4abb2",
                    width: "600px",
                    border: "none",
                    fontSize: "40px",

                }}
                onChange={(e) => NewTask(e.target.value)}
                value={newTask}
            />
            <button
                style={{
                    backgroundColor: "#1dd2af",
                    border: "none",
                    color: "white",
                    fontSize: "40px",
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "background 0.4s ease-out",
                    outline: "none"
                }}
                onClick={SubmitTask}
            >
                +
            </button>
        </div>
    );
}
