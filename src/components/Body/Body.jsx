import React from "react";

const Body = (props) => {
    return (
        <div className={`h-screen bg-color-3 ${props.navstatus ? `grid grid-cols-body` : ``}`}>
            {props.navstatus && <div className="bg-color-1"></div>}
            <div><h1 className="text-white bg-slate-700">Kuku</h1></div>
        </div>
    )
}

export default Body