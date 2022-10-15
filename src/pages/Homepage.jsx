import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
	return (
		<div className="home h-screen bg-main-bg flex justify-center items-center w-screen">
			<div className="containe flex rounded-lg drop-shadow-lg w-[65%] h-[80%] ">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Homepage;
