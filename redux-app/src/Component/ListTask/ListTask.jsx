import Task from "../Task/Task";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ListTask() {
    const todos = useSelector((state) => state.Reducer.todos);
    const [filter, setFilter] = useState("all");
    const buton = {
        width: "33%",
        height: "100%",
        border: "none",
        fontSize: "25px",
        color: "#ffffff",
        cursor: "pointer",
        backgroundColor: "#355",
    };
    const butoff = {
        width: "33%",
        height: "100%",
        border: "none",
        fontSize: "25px",
        color: "#ffffff",
        cursor: "pointer",
        backgroundColor: "#42aaf5",
    };
    function all() {
        setFilter("all");
    }
    function done() {
        setFilter(true);
    }
    function undone() {
        setFilter(false);
    }
    return (
        <div className="ListTask">
            <div
                style={{
                    display: "flex",
                    height: "40px",
                    width: "654px",
                    alignItems: "center",
                    justifyContent: "space-between ",
                    backgroundColor: "#1dd2af",
                    position: "fixed",
                }}
            >
                <button
                    style={filter === "all" ? buton : butoff}
                    onClick={all}
                >
                    ALL
                </button>
                <button style={filter === true ? buton : butoff} onClick={done}>
                    DONE
                </button>
                <button
                    style={filter === false ? buton : butoff}
                    onClick={undone}
                >
                    UNDONE
                </button>
            </div>
            <div style={{ paddingTop: "40px" }}>
                {filter === "all"
                    ? todos.map((task, index) => (
                        <Task
                            toDo={task}
                            key={index}
                            index={index}
                            task={task}
                            SubmitChange
                        />
                    ))
                    : todos
                        .filter((task) => task.isDone === filter)
                        .map((task, index) => (
                            <Task toDo={task} key={index} index={index} />
                        ))}
            </div>
        </div>
    );
}
