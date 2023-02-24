import React, { useRef, useState } from "react";

const Modal = (props) => {

    let colinput = useRef()
    let [collinput, setCollinput] = useState()

    const inputCol = () => {
        setCollinput(colinput.current.value)
    }

    const addColl = () => {
        props.setCollections([...props.collections, collinput])
        setCollinput("")
        props.setModalStatus(false)
    }

    const hideModal = () => {
        props.setModalStatus(false)
        setCollinput("")
    }

    return (
        <>
            {props.modalStatus && <div onClick={hideModal} className="fixed bg-black/50 right-0 left-0 top-0 bottom-0" />}
            {props.modalStatus && <div className="w-[500px] p-5 absolute bg-color-1 left-1/3 rounded-md top-10">
                <div className="text-color-4 text-xl">Add a collection</div>
                <input className="outline-none bg-color-1 focus:bg-[#ff66f8] border border-[#ff66f8] rounded-md" value={collinput} onChange={inputCol} ref={colinput} type="text" />
                <button onClick={addColl} className="bg-[#ff66f8] ml-2 rounded-md h-7 w-12 outline-none focus:border-none focus:outline-black ">Add</button>
            </div>}
        </>
    )
}

export default Modal