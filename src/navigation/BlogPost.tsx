import { useRoute } from "wouter";
import Paper from "../stories/Paper";

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

function BlogPost() {
  const [, params] = useRoute<{ id: string }>("/blog/:id");
  const post = blogPosts.find((post) => post.id === Number(params?.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Paper>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </Paper>
  );
}

export default BlogPost;
