import React from "react";
import { Link } from "react-router-dom";

import { Post } from "./../../types/Post";

// removed as I used tailwind css
// import "./PostCard.css";

const PostCard = (post: Post) => (
  <Link to={`/post/${post.id}`}>
    <div className="w-full bg-gray-100 rounded-xl p-4 hover:bg-gray-200 hover:scale-105">
      <div className="w-full justify-center mb-4">
        {post?.media?.[0]?.["media-metadata"]?.[0]?.url && (
          <img
            src={post?.media[0]?.["media-metadata"]?.[2].url}
            alt=""
            className="rounded-xl h-64 w-full object-cover"
          />
        )}
        <h2 className="text-xl font-bold">{post.title}</h2>
      </div>
    </div>
  </Link>
);

export default PostCard;
