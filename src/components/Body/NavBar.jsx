import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div className="bg-color-1 break-words  h-screen">
            <div className="mt-5 ml-4 mb-3 text-color-5 font-medium">Collections</div>
            {props.collections.map(collection => <div className="text-color-4 pl-8 py-3 font-medium">
                <NavLink to={`/${collection.collection}`}>
                    {collection.collection}
                </NavLink>
            </div>)}
            <div className="border border-pink-600 pl-2 pt-2 rounded-xl m-2 relative">
                <button onClick={() => props.setCollectionModalStatus(true)} className="h-6 w-6 bg-add_button bg-cover"></button>
                <div className="font-medium text-lg inline text-color-2 ml-3 absolute top-[50%] translate-y-[-50%]">Add a collection</div>
            </div>
        </div >
    )
}

export default NavBar