import { Link } from "wouter";

const linkClasses =
  "bg-slate-800 no-underline mx-0.5 px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-slate-700";

function Topbar() {
  return (
    <div className="absolute flex justify-center items-center self-center p-3">
      <img
        src="/logo192.png"
        alt="Logo"
        className="h-10 w-10 mr-4 rounded-full"
      />
      <nav className="flex items-center">
        <Link href="/" className={linkClasses}>
          Home
        </Link>
        <Link href="/about" className={linkClasses}>
          About
        </Link>
        <Link href="/blog" className={linkClasses}>
          Blog
        </Link>
        <Link href="/three" className={linkClasses}>
          3D Scene
        </Link>
        <Link href="/login" className={linkClasses}>
          Login
        </Link>
      </nav>
    </div>
  );
}

export default Topbar;
