import React from "react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Renders the main page", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
	});

	it("should render App component", () => {
		const app = screen.getByTestId("app");

		expect(app).toBeInTheDocument();
	});

	it("should render App container with header and footer component", () => {
		const h1 = screen.getByTestId("header");
		const footer = screen.getByTestId("footer");

		expect(h1).toBeInTheDocument();
		expect(footer).toBeInTheDocument();
	});

	it("should render nav items inside header component", () => {
		const header = screen.getByTestId("header");
		const navItems = screen.getAllByTestId("nav-item");
		const homeNav = navItems[0];
		const postNav = navItems[1];

		expect(homeNav).toBeInTheDocument(header);
		expect(postNav).toBeInTheDocument(header);
	});
});
