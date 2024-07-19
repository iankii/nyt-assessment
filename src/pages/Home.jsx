import React, { useState, useEffect } from "react";
import service from "../services/service";
import PostCard from "../components/PostCard";

import "./Home.css";

function Home() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		service
			.getArticles()
			.then((articles) => {
				console.log("articles: ", articles.results);
				if (articles.status === "OK") {
					console.log("articles: OKS", articles);
					setPosts(articles.results);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		//TODO:  create a post card
		<div className="container">
			<div className="posts">
				{posts?.map((post) => {
					return (
						<div key={post.id}>
							<PostCard {...post} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
