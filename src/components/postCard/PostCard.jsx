import React from "react";
import { Link } from "react-router-dom";

import "./PostCard.css";

function PostCard(post) {
	return (
		<Link to={`post/${post.id}`}>
			<div className="card-container">
				{post?.media?.[0]?.["media-metadata"]?.[0]?.url && (
					<img src={post?.media[0]?.["media-metadata"]?.[0].url} alt="" />
				)}
				<p>{post.title}</p>
			</div>
		</Link>
	);
}

export default PostCard;
