import React from "react";
import Task from "./Task/Task";

const Collection = (props) => {
    const todo = () => {
        let copy = [...props.collection.tasks]
        let todo = []
        let completed = []
        for (let task of copy) {
            if (task.status === true) {
                todo.push(task)
            } else {
                completed.push(task)
            }
        }
        return { todo: todo.length, completed: completed.length }
    }

    return (
        <div className="mx-auto w-[700px] max-w-[700px] mt-[50px]">
            <h1 className="text-color-5 font-medium text-3xl mb-7">{props.collection.collection}</h1>
            <div className="h-11 border border-pink-600 mb-7 relative pl-2 rounded-xl">
                <button onClick={() => props.setTaskModalStatus(true)} className=" absolute translate-y-[-50%] top-[50%] h-6 w-6 bg-add_button bg-cover"></button>
                <div className="inline text-lg absolute top-[50%] translate-y-[-50%] text-color-2 font-medium ml-10 max-h-10 my-auto">Add a task</div>
            </div>
            <div className="text-color-2 text-xl font-normal mb-2">
                Tasks-{todo().todo}
            </div>
            <div>
                {props.collection.tasks.map(task => task.status === true && <Task setCollections={props.setCollections} collection={props.collection} task={task} collections={props.collections} tasks={props.tasks} />)}
            </div>
            {todo().completed !== 0 && <div className="text-color-2 text-xl font-normal mb-2">
                Completed-{todo().completed}
            </div>}
            {todo().completed !== 0 && <div>{props.collection.tasks.map(task => task.status === false && <Task setCollections={props.setCollections} collection={props.collection} task={task} collections={props.collections} />)}</div>}

        </div >
    )
}

export default Collection