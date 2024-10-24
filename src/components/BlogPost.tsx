import { useRoute } from "wouter";

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

const BlogPost = () => {
  const [match, params] = useRoute<{ id: string }>("/blog/:id");
  const post = blogPosts.find((post) => post.id === Number(params?.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
