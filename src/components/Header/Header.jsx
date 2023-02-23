import React from "react";

const Header = (props) => {
	const setNavStatus = () => {
		props.setnavstatus(!props.navstatus)
		console.log(props.navstatus)
	}

	return (
		<div className="bg-color-1 grid grid-cols-header shadow-sm relative shadow-gray-900">
			<button onClick={setNavStatus} className="h-5 w-5 mt-3.5 ml-3.5 border border-white bg-slate-500"></button>
			<div className="text-color-2 font-medium mt-3">Dashboard</div>
			<div className="text-color-2 font-medium mt-3">Collections</div>
			<div></div>
			<div className="text-color-2 font-medium mt-3">Else</div>
		</div>
	)
}

export default Header