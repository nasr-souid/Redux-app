import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, doneTask,deleteTask } from "../../Actions";
import EditTask from "../EditTask/EditTask";

export default function Task({ toDo, index }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        setId(e);
    };
    const [taskEdit, setTaskEdit] = useState("");
    function task(e) {
        setTaskEdit(e.target.value);
    }
    function handleChange(input) {
        dispatch(doneTask(input));
    }
    function SubmitChange() {
        dispatch(editTask(id, taskEdit));
        setShow(false);
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    height: "80px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        height: "80px",
                        width: "80px",
                        backgroundColor: "#e0f007",
                        color: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center"
                    }}
                >
                    <h2>{Number(index) + 1}</h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between ",
                        padding: "5px",
                        alignItems: "center",
                        width: "574px",
                    }}
                >
                    <p>{toDo.task}</p>
                    <div>
                        <button
                            style={{
                                backgroundColor: "#4CAF50",
                                border: "none",
                                color: "white",
                                padding: "15px 32px",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "16px",
                                marginRight: "5px",
                            }}
                            onClick={(e) => handleChange(toDo.id)}
                        >
                            {toDo.isDone ? "DONE" : "DONE"}
                        </button>
                        <button
                            style={{
                                backgroundColor: "#888888",
                                border: "none",
                                color: "white",
                                padding: "15px 32px",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "16px",
                            }}
                            onClick={(e) => handleShow(toDo.id)}
                        >
                            EDIT
                        </button>
                        <button  style={{
                                backgroundColor: "#f03d07",
                                border: "none",
                                color: "white",
                                padding: "15px 32px",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "16px",
                                marginLeft: "5px",
                            }}
                        onClick={() => dispatch(deleteTask(toDo.id))}>DELETE</button>
                    </div>
                </div>
            </div>
            <EditTask
                show={show}
                handleClose={handleClose}
                task={task}
                SubmitChange={SubmitChange}
            />
            <hr
                style={{
                    backgroundColor: "#ececec",
                    height: "2px",
                    border: "none",
                    margin: "0px",
                }}
            />
        </>
    );
}
