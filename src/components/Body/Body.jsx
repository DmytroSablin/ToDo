import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../Collection/Collection";
import Modal from "../Modal/Modal";
import NavBar from "./NavBar";

const Body = (props) => {
    console.log(props.activeCollection)
    return (
        <div className={`h-full bg-color-3 ${props.navstatus ? `grid grid-cols-body` : ``}`}>
            {props.navstatus && <NavBar setActiveCollection={props.setActiveCollection} setCollectionModalStatus={props.setCollectionModalStatus} collections={props.collections} />}
            <Routes>
                {props.collections.map(collection => <Route path={`/${collection.collection}`} element={
                    <Collection
                        setTaskModalStatus={props.setTaskModalStatus}
                        setCollections={props.setCollections}
                        collection={collection}
                        collections={props.collections} />
                } />)}
            </Routes>
            <Modal
                collectionModalStatus={props.collectionModalStatus}
                setCollectionModalStatus={props.setCollectionModalStatus}
                setCollections={props.setCollections}
                collections={props.collections}
                taskModalStatus={props.taskModalStatus}
                setTaskModalStatus={props.setTaskModalStatus}
                modalStatus={props.modalStatus}
                setModalStatus={props.setModalStatus}
                activeCollection={props.activeCollection} />
        </div>
    )
}

export default Body