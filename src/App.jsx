import { useState, useEffect } from "react";
import "./App.css";
import service from "./services/service";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="app">
			{/* <Header /> */}
			<h1 className="header">
				Some Header {"   "}
				<Link to="/">Home</Link>
			</h1>
			<main>
				<Outlet />
			</main>
			<footer>Some footer</footer>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
