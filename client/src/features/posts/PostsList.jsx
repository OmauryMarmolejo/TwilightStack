// API_URL comes from .env file
import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch posts from the API

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${API_URL}/posts`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw new Error("Fetch failed");
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error.message}</p> : null}
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          {post.body}
        </div>
      ))}
    </div>
  );
}

export default PostsList;
