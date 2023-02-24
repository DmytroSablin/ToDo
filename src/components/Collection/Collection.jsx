import React from "react";

const Collection = (props) => {
    return (
        <div className="mx-auto max-w-2xl mt-[50px] w-[700px]">
            <h1 className="text-color-5 font-medium text-3xl mb-4">{props.collname}</h1>
            <div>
                <button className="h-6 w-6 bg-add_button bg-cover"></button>
                <div className="inline text-color-2 font-medium ml-5 max-h-10 my-auto">Add a task</div>
            </div>
        </div>
    )
}

export default Collection