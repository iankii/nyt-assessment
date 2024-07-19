import React, { useEffect, useState } from "react";
import service from "../../services/service";
import { useParams } from "react-router-dom";

import "./Post.css";

function Post() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState({});
	console.log("post: ", post);

	useEffect(() => {
		service
			.getArticleById(id)
			.then((res) => {
				if (res.status === "OK") {
					const post = res.response.docs[0]
						? res.response.docs[0]
						: res.response;
					setPost(post);
				}
			})
			.catch((err) => {
				throw err;
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <div>Loading...</div>;
	return (
		<div className="post-container">
			<h1 className="post-headline">{post?.headline?.main}</h1>
			<img
				className="post-image"
				src={`https://static01.nyt.com/${post.multimedia[0].url}`}
				alt={post.headline.main}
			/>
			<p>{post.lead_paragraph}</p>
		</div>
	);
}

export default Post;
