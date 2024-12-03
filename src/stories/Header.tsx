import { Link } from "wouter";
import "./Header.css";

const linkClasses =
  "bg-slate-800 no-underline px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-slate-700 whitespace-nowrap -outline-offset-1";

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <header
      className={[
        "storybook-header self-center w-full dark:text-white",
        className,
      ].join(" ")}
    >
      <div className="flex justify-center items-center p-4">
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
    </header>
  );
}

export default Header;
