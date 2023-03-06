import React from "react";
import CollectionModal from "./CollectionModal.jsx/CollectionModal";
import TaskModal from "./TaskModal/TaskModal";

const Modal = (props) => {
    let setTask = () => { }
    let setCollection = () => { }

    const callbackTask = (settask) => {
        setTask = settask
    }
    const callbackCollection = (setcoll) => {
        setCollection = setcoll
    }

    const hideModal = () => {
        props.setCollectionModalStatus(false)
        props.setTaskModalStatus(false)
        setTask("")
        setCollection("")
    }

    return (
        <>
            {(props.collectionModalStatus || props.taskModalStatus) &&
                <div onClick={hideModal} className="fixed bg-black/50 right-0 left-0 top-0 bottom-0" />}

            <CollectionModal
                collectionModalStatus={props.collectionModalStatus}
                setCollections={props.setCollections}
                collections={props.collections}
                setCollectionModalStatus={props.setCollectionModalStatus}
                callbackCollection={callbackCollection} />
            <TaskModal
                taskModalStatus={props.taskModalStatus}
                setTaskModalStatus={props.setTaskModalStatus}
                callbackTask={callbackTask}
                collections={props.collections}
                setCollections={props.setCollections}
                collection={props.activeCollection} />
        </>
    )
}

export default Modal