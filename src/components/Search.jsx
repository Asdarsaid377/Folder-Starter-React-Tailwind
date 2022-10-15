import React from "react";

const Search = () => {
	return (
		<div className="w-full border-b-1 border-white bg-transparent">
			<input
				type="text"
				placeholder="Search Chat"
				className="w-full border-b-1 text-white bg-transparent border-none mt-3 outline-none"
			/>
		</div>
	);
};

export default Search;
