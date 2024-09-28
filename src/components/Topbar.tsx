import { Link } from "wouter";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <nav>
        <Link href="/">Home</Link>
        <span> • </span>
        <Link href="/about">About</Link>
        <span> • </span>
        <Link href="/blog">Blog</Link>
        <span> • </span>
        <Link href="/three">3D Scene</Link>
      </nav>
    </div>
  );
}

export default Topbar;
