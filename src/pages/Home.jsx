import React, { useState, useEffect } from "react";
import service from "../services/service";
import PostCard from "../components/postCard/PostCard";
import { Container } from "../components/index";

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service
      .getArticles()
      .then((articles) => {
        if (articles.status === "OK") {
          setPosts(articles.results);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  if (posts.length === 0) {
    return <Container>No posts available</Container>;
  }

  if (posts.length > 0) {
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

  return <div></div>;
}

export default Home;
