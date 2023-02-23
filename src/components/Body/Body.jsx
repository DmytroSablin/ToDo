import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../Collection/Collection";
import NavBar from "./NavBar";

const Body = (props) => {
    return (
        <div className={`h-screen bg-color-3 ${props.navstatus ? `grid grid-cols-body` : ``}`}>
            {props.navstatus && <NavBar collections={props.collections} />}
            <Routes>
                {props.collections.map(collection => <Route path={`/${collection}`} element={<Collection />} />)}
            </Routes>
        </div>
    )
}

export default Body