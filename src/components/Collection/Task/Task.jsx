import React from "react";

const Task = (props) => {
    const checkTask = () => {

        let copy = [...props.collections]
        for (let collection of copy) {
            for (let task of collection.tasks) {
                if (task.task === props.task.task) {
                    task.status = !task.status
                }
            }
        }
        props.setCollections(copy)

    }

    return (
        <div className="h-10 bg-color-1 mb-2 rounded-xl relative">
            <button onClick={checkTask} className={`mt-2.5 ml-2 w-5 h-5 hover:bg-pink-600 hover:bg-check hover:bg-cover rounded-lg border-2 border-pink-600 ${!props.task.status ? `bg-pink-600 bg-check bg-cover ` : ``}`}></button>
            <div className={`inline ml-5 absolute top-[50%] translate-y-[-50%] text-color-2 text-lg font-normal ${!props.task.status ? `line-through` : ``}`}>{props.task.task}</div>
        </div>
    )
}

export default Task