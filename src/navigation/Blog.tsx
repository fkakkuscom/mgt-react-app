import { Link } from "wouter";
import Paper from "../components/Paper";

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

function Blog() {
  return (
    <Paper style={{ minHeight: 4000 }}>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </Paper>
  );
}

export default Blog;
