import { Link } from "wouter";

const linkClasses =
  "bg-slate-800 no-underline px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-slate-700 whitespace-nowrap -outline-offset-1";

function Topbar() {
  return (
    <div className="self-center w-full">
      <div className="flex justify-center p-4">
        <img
          src="/logo192.png"
          alt="Logo"
          className="h-10 w-10 mr-4 rounded-full"
        />
        <nav className="flex items-center gap-1 overflow-x-auto">
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
          <Link href="/storybook" className={linkClasses}>
            Storybook
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;
