import { Link } from "wouter";
import Paper from "../stories/Paper";
import { useEffect, useState } from "react";
import type { Post, ProcessEntityError } from "../shared-types";

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [errors, setErrors] = useState<ProcessEntityError[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      `http://${window.location.hostname}:3333/v1/posts?withCategories=true&hasCategories=true`,
      { signal: abortController.signal }
    )
      .then((response) => response.json())
      .then((data) =>
        data.errors ? setErrors(data.errors) : setPosts(data.data)
      )
      .catch((reason) => {
        if (reason.errors) {
          return console.error(
            "Error fetching posts:",
            reason.errors.map((e: ProcessEntityError) => e.message).join(", ")
          );
        }
        if (reason === "Unmount") {
          return console.debug("Fetch aborted:", reason);
        }
        return console.error("Error fetching posts:", reason);
      });

    return () => {
      abortController.abort("Unmount");
    };
  }, []);

  return (
    <Paper style={{ minHeight: 4000 }}>
      {errors.map((error) => (
        <div key={error.field} className="text-red-500">
          <p>{error.message}</p>
        </div>
      ))}
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
          {post.user && <p>By {post.user.fullName}</p>}
          {post.categories && (
            <p>
              Categories:{" "}
              {post.categories.map((category) => (
                <span key={category.id}>{category.name}</span>
              ))}
            </p>
          )}
        </div>
      ))}
    </Paper>
  );
}

export default Blog;
