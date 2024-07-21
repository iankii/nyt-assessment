import React, { useState, useEffect } from "react";
import service from "../services/service";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getArticles().then((articles) => {
      if (articles.status === "OK") {
        setPosts(articles.results);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="w-1/4 p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
