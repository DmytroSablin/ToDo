import React from "react";

const Header = (props) => {
	const setNavStatus = () => {
		props.setnavstatus(!props.navstatus)
	}

	return (
		<div className="bg-color-1 grid grid-cols-header shadow-sm relative shadow-gray-900">
			<button onClick={setNavStatus} className="h-4 w-4 mt-4 ml-3.5 bg-menu bg-cover"></button>
			<div className="text-color-2 font-medium mt-3">Dashboard</div>
			<div className="text-color-2 font-medium mt-3">Collections</div>
			<div></div>
			<div className="text-color-2 font-medium mt-3">Else</div>
		</div>
	)
}

export default Header