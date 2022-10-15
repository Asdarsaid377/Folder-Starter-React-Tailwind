import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Registers from "./pages/Registers";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Registers />} />
					<Route path="/home" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
