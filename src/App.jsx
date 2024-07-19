import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className="app w-full" data-testid="app">
			{/* <Header /> */}
			<header className="header" data-testid="header">
				Some Header {"   "}
				<Link to="/">Home</Link>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>Some footer</footer>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
