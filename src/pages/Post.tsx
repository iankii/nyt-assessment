import React, { useEffect, useState } from "react";
import service from "../services/service";
import { useParams } from "react-router-dom";
import { Container } from "../components";

function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    service
      .getArticleById(id as string)
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
    post && (
      <div className="py-8">
        <Container>
          <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
              src={`https://static01.nyt.com/${post?.multimedia?.[0]?.url}`}
              alt={post.title}
              className="rounded-xl"
            />
          </div>
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold">
              {post?.headline?.print_headline}
            </h1>
          </div>
          <div className="browser-css">{post?.lead_paragraph}</div>
        </Container>
      </div>
    )
  );
}

export default Post;
