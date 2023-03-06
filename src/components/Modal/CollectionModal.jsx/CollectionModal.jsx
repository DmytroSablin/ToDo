import React from "react";
import { useState, useRef } from "react";

const CollectionModal = (props) => {
    const addColl = () => {
        props.setCollections([...props.collections, { collection: collinput, tasks: [] }])
        setCollinput("")
        props.setCollectionModalStatus(false)
    }

    let colinput = useRef()
    let [collinput, setCollinput] = useState("")

    const inputCol = () => {
        setCollinput(colinput.current.value)
    }
    props.callbackCollection(setCollinput)

    return (
        <div>
            {props.collectionModalStatus && <div className="w-[500px] p-5 absolute bg-color-1 left-1/3 rounded-md top-10">
                <div className="text-color-4 text-xl">Add a collection</div>
                <input className="outline-none bg-color-1  focus:text-black text-color-5 focus:bg-pink-600 border border-pink-600 rounded-md" value={collinput} onChange={inputCol} ref={colinput} type="text" />
                <button onClick={addColl} className="bg-pink-600 ml-2 rounded-md h-7 w-12 outline-none focus:border-none focus:outline-black ">Add</button>
            </div>}
        </div>
    )
}

export default CollectionModal