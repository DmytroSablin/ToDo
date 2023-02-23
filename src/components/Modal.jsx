import React from "react";

const Modal = (props) => {


    return (
        <>
            {props.modalStatus && <div onClick={() => props.setModalStatus(false)} className="fixed bg-black/50 right-0 left-0 top-0 bottom-0" />}
            {props.modalStatus && <div className="w-[500px] p-5 absolute bg-white left-1/3 rounded-md top-10">
                <input type="text" />
            </div>}
        </>
    )
}

export default Modal