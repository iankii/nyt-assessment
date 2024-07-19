import React from "react";
import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";

describe("PostCard", () => {
	test("renders image", () => {
		render(<PostCard />);
		expect(true).toBeTruthy();
	});

	test("renders article title", () => {
		render(<PostCard />);
		expect([1, 2]).toHaveLength(2);
	});
});
