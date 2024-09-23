import React from "react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Another Blog Post",
    content: "This is the content of another blog post.",
  },
  {
    id: 3,
    title: "Yet Another Blog Post",
    content: "This is the content of yet another blog post.",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog-list" style={{ minHeight: 4000 }}>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
