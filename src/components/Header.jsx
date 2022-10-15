import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

const Header = () => {
	// const [user, setUser] = useState();

	// const getUser = async () => {
	// 	const res = await axios.get("https://picsum.photos/200/300");
	// 	setUser(res.data);
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);
	// console.log(user);
	return (
		<div className="navbar bg-navbar sticky top-0 drop-shadow-lg flex justify-between items-center">
			<span className="logo text-white font-bold p-3">MiChat</span>
			<div className="user flex items-center p-1 justify-between gap-3">
				<img
					className="rounded-full w-8 h-8"
					src="https://picsum.photos/200/300"
					alt="asdadf"
				/>
				<span className="text-white font-semibold">Nama User</span>
				<button className="py-2 px-4 bg-white drop-shadow-lg hover:drop-shadow-2xl rounded-md text-primary font-semibold">
					Logout
				</button>
			</div>
		</div>
	);
};

export default Header;
