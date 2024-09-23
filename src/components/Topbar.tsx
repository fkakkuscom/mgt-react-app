import { Link } from "wouter";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
}

export default Topbar;
