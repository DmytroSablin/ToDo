import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div className="bg-color-1">
            <div className="mt-5 ml-4 mb-3 text-color-5 font-medium">Collections</div>
            {props.collections.map(collection => <div className="text-color-4 pl-8 py-3 font-medium"><NavLink to={`/${collection}`}>{collection}</NavLink></div>)}
            <div className="border border-color-6 pl-2 pt-2 rounded-md m-2">
                <button onClick={() => props.setModalStatus(true)} className="h-6 w-6 bg-add_button bg-cover"></button>
                <div className="inline text-color-2 ml-3">Add a collection</div>
            </div>
        </div >
    )
}

export default NavBar