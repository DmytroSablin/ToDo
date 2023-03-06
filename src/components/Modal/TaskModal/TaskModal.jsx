import React, { useRef, useState } from "react";

const TaskModal = (props) => {
    const addTask = () => {
        let copy = [...props.collections]
        for (let collection of copy) {
            if (collection.collection === props.collection) {
                collection.tasks = [{ task: taskinput, status: true }, ...collection.tasks]
            }
        }
        props.setCollections(copy)
        setTaskinput("")
        props.setTaskModalStatus(false)
    }

    let task = useRef()
    let [taskinput, setTaskinput] = useState("")

    props.callbackTask(setTaskinput)

    return (
        <>
            {props.taskModalStatus && <div className="w-[500px] p-5 absolute bg-color-1 left-1/3 rounded-md top-10">
                <div className="text-color-4 text-xl">Add a task</div>
                <input className="outline-none bg-color-1 focus:bg-pink-600 focus:text-black text-color-5 border border-pink-600 rounded-md" value={taskinput} onChange={() => setTaskinput(task.current.value)} ref={task} type="text" />
                <button onClick={addTask} className="bg-pink-600 ml-2 rounded-md h-7 w-12 outline-none focus:border-none focus:outline-black ">Add</button>
            </div>}
        </>
    )
}

export default TaskModal