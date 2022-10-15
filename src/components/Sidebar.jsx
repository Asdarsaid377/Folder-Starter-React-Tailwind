import React from "react";
import Card from "./Card";
import Header from "./Header";
import Search from "./Search";

const Sidebar = () => {
	return (
		<div className="flex-[1] bg-secondary overflow-auto border-r-4 z-10 rounded-l-lg border-gray-800 border-solid">
			<Header />
			<Search />
			<Card />
		</div>
	);
};

export default Sidebar;
