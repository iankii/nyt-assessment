import React from "react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Renders the main page", () => {
	beforeAll(() => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
	});

	it("should render App component", () => {
		const app = screen.getByTestId("app");
		const h1 = screen.getByTestId("header");

		expect(app).toBeInTheDocument();
		expect(h1).toBeInTheDocument();
	});
});
